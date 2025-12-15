
import { GoogleGenAI } from "@google/genai";
import { GenerationResult, UploadedImage } from "../types";

// --- CONSTANTS FOR PROMPT ENGINEERING ---

// Universal System Instruction for High-End Architecture
const SYSTEM_INSTRUCTION = `
You are an advanced AI Architecture Visualizer & Photographer.
Your mission is to generate or enhance architectural images with "Architectural Digest" quality.

CORE DIRECTIVES:
1.  **Photorealism**: Achieve 8k resolution, perfect exposure, and high dynamic range (unless a specific artistic style is requested).
2.  **Physical Accuracy**: Adhere to PBR (Physically Based Rendering) rules. Materials must look tangible (e.g., concrete porosity, wood grain, glass reflections).
3.  **Lighting & Atmosphere**: Simulate realistic global illumination, soft shadows, and specific environmental contexts (e.g., Golden Hour, Blue Hour, Overcast/Misty, Harsh Desert Sun).
4.  **Perspective**: Maintain structural integrity. Use 2-point perspective for exteriors and wide-angle for interiors.
5.  **Biomes & Landscape**: Accurately render vegetation and terrain suitable for the requested location (e.g., Arid Desert, Lush Tropical, Pine Forest).

STRICT RULES:
- If the input is a sketch: Convert it to a photorealistic render (unless prompted for a specific artistic style).
- If the input is a photo: Enhance details, lighting, and materials based on the prompt.
- If a mask is provided: MODIFY ONLY the masked area. Blend edges seamlessly.
`;

/**
 * Helper to safely get API key from environment without crashing if process is undefined
 */
const getEnvApiKey = (): string | undefined => {
  try {
    return process.env.API_KEY;
  } catch (e) {
    return undefined;
  }
};

/**
 * Helper to clean up user prompts.
 */
const sanitizePrompt = (input: string): string => {
  if (!input) return "";
  // Ensure the model knows we want an image/photo aesthetic
  return input.replace(/\b(render|3d model|cgi)\b/gi, "photograph") + ", 8k, highly detailed";
};

/**
 * Robustly extract status and message from various error formats
 */
const getErrorDetails = (error: any) => {
    let status = error.status || error.response?.status;
    let message = error.message || error.toString();
    
    // Handle nested Google GenAI error structure { error: { code: 403, message: ... } }
    if (error.error) {
        status = status || error.error.code || error.error.status;
        message = error.error.message || message;
    }
    
    return { status, message };
};

/**
 * Generates content based on an image and a text prompt using Gemini models.
 */
export const generateImageFromReference = async (
  base64Data: string,
  mimeType: string,
  prompt: string,
  modelName: string,
  styleImageData?: UploadedImage | null,
  maskImageData?: string | null,
  apiKey?: string,
  resolution: '1K' | '2K' | '4K' = '1K'
): Promise<GenerationResult> => {
  const finalApiKey = apiKey || getEnvApiKey();
    
  if (!finalApiKey) {
    throw new Error("API Key is missing. Please enter it in Settings or configure the environment.");
  }

  const ai = new GoogleGenAI({ apiKey: finalApiKey });

  // Clean base64 string for main image
  const cleanBase64 = base64Data.replace(/^data:image\/(png|jpeg|jpg|webp|heic);base64,/, "");

  const sanitizedUserPrompt = sanitizePrompt(prompt || "Enhance this architecture, realistic.");

  // Construct a structured prompt
  let fullPrompt = `
    ${SYSTEM_INSTRUCTION}
    
    ---
    USER INSTRUCTION: ${sanitizedUserPrompt}
    ---
  `;
  
  // Add Mask Context - STRICT IN-PAINTING COMMAND
  if (maskImageData) {
    fullPrompt += `
    [CRITICAL TASK: HARD MATERIAL REPLACEMENT / INPAINTING]
    
    INPUT DATA:
    - IMAGE 1: The Base Image.
    - IMAGE 2: The Selection Mask (contains colored brush strokes).
    
    STRICT EXECUTION STEPS:
    1. **IDENTIFY ZONE**: The colored brush strokes (red, purple, etc.) in Image 2 define the "Edit Zone".
    2. **HARD CLIPPING**: This is a hard selection. Do not paint outside the lines. Do not hallucinate outside the mask.
    3. **PIXEL-PERFECT ALIGNMENT**: The mask is 1:1 aligned with the Base Image. (0,0) matches (0,0).
    4. **IGNORE MASK COLOR**: The purple/red color of the mask is irrelevant. DO NOT blend this color into the output. It is invisible data.
    5. **DELETE & REPLACE**: Inside the "Edit Zone", completely OBLITERATE the original texture/object.
    6. **APPLY NEW MATERIAL**: Fill the "Edit Zone" with the material described in the USER INSTRUCTION (e.g., "concrete").
    7. **MATCH PHYSICS**: The new material must match the lighting, perspective, and shadows of the Base Image.
    
    SUMMARY: "Act as a Photoshop expert. Select the masked area. Delete content. Fill with new material from prompt. Blend edges."
    `;
  }

  // Add Style Reference Context
  if (styleImageData) {
     fullPrompt += `
     [TASK: STYLE TRANSFER]
     - A Style Reference image is provided.
     - ACTION: Analyze the reference image for Lighting, Color Palette, and Material Mood.
     - APPLY: Apply these aesthetic qualities to the main generated image.
     `;
  }

  const parts: any[] = [
    { text: fullPrompt },
    {
      inlineData: {
        data: cleanBase64,
        mimeType: mimeType,
      },
    },
  ];

  // Add Mask Image if provided
  if (maskImageData) {
    const cleanMaskBase64 = maskImageData.replace(/^data:image\/(png|jpeg|jpg|webp|heic);base64,/, "");
    parts.push({
      inlineData: {
        data: cleanMaskBase64,
        mimeType: "image/png",
      },
    });
  }

  // Add style reference image if provided
  if (styleImageData) {
    const cleanStyleBase64 = styleImageData.base64.replace(/^data:image\/(png|jpeg|jpg|webp|heic);base64,/, "");
    parts.push({
      inlineData: {
        data: cleanStyleBase64,
        mimeType: styleImageData.mimeType,
      },
    });
  }

  // Configure image options if supported (Gemini 3 Pro)
  const requestConfig: any = {};
  if (modelName.includes('gemini-3-pro-image')) {
    requestConfig.imageConfig = {
      imageSize: resolution
    };
  }

  // --- EXECUTION FUNCTION WITH RETRY LOGIC ---
  const executeGeneration = async (currentModel: string, config: any) => {
    return await ai.models.generateContent({
      model: currentModel,
      contents: {
        parts: parts,
      },
      config: config,
    });
  };

  try {
    const response = await executeGeneration(modelName, requestConfig);
    return processResponse(response);

  } catch (error: any) {
    // Only warn on first failure, don't error yet
    console.warn(`Gemini API Warning (Attempt 1 with ${modelName}):`, error.message || error);

    const { status, message } = getErrorDetails(error);
    
    const isQuotaError = status == 429 || message.includes('429') || message.includes('quota') || message.includes('RESOURCE_EXHAUSTED');
    const isOverloaded = status == 503 || message.includes('503');
    // Loose check for 403 (number or string)
    const isPermissionError = status == 403 || message.includes('403') || message.includes('Permission') || message.includes('PERMISSION_DENIED');

    // FALLBACK LOGIC: If Pro model fails due to quota or permission, try Flash
    // We check if the originally requested model was a Pro model
    if ((isQuotaError || isOverloaded || isPermissionError) && modelName.includes('gemini-3-pro')) {
       console.info(`ℹ️ Switching to 'gemini-2.5-flash-image' due to API restrictions...`);
       
       try {
         // Retry with Flash model (No imageConfig supported for Flash)
         // 'gemini-2.5-flash-image' is the alias for Nano Banana which supports images
         const fallbackResponse = await executeGeneration('gemini-2.5-flash-image', {});
         return processResponse(fallbackResponse);
       } catch (fallbackError: any) {
         console.error("Gemini API Error (Fallback Failed):", fallbackError);
         throw mapError(fallbackError);
       }
    }

    throw mapError(error);
  }
};

/**
 * Analyzes a Floor Plan image to extract accurate geometry, scale, and room types.
 * This runs BEFORE the main generation to provide "Ground Truth" data.
 */
export const analyzePlanGeometry = async (
  base64Data: string,
  mimeType: string,
  apiKey?: string
): Promise<string> => {
  try {
    const finalApiKey = apiKey || getEnvApiKey();
    if (!finalApiKey) return "";

    const ai = new GoogleGenAI({ apiKey: finalApiKey });
    const cleanBase64 = base64Data.replace(/^data:image\/(png|jpeg|jpg|webp|heic);base64,/, "");

    // Using Gemini 2.5 Flash for superior OCR and logical reasoning on technical drawings
    const modelToUse = 'gemini-2.5-flash'; 

    const response = await ai.models.generateContent({
      model: modelToUse,
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          {
            text: `
              Analyze this architectural floor plan image STRICTLY.
              
              YOUR TASK:
              1. **OCR (Text Reading)**: Identify all numerical dimensions (e.g., "3000", "4.5m", "12'6") and room labels. **Support both English and Thai text (ภาษาไทย) - Translate Thai labels to English.**
              2. **Geometry Analysis**: Estimate the aspect ratio and primary scale based on the numbers found.
              3. **Validation**: Double-check the numbers. Do not hallucinate.
              
              OUTPUT FORMAT (JSON):
              {
                "dimensions_found": ["3000", "4500", ...],
                "rooms": ["Bedroom", "Kitchen"],
                "scale_summary": "Rectangular layout approx 10m x 15m",
                "aspect_ratio_description": "Wide rectangle"
              }
              
              Return ONLY the JSON.
            `
          }
        ]
      }
    });

    const analysis = response.candidates?.[0]?.content?.parts?.[0]?.text || "";
    console.log("Plan Analysis Result:", analysis);
    
    // Convert JSON to readable summary for the next prompt
    try {
        const jsonStr = analysis.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(jsonStr);
        return `PLAN DATA: Dimensions: ${data.dimensions_found?.join(', ') || 'N/A'}. Rooms: ${data.rooms?.join(', ') || 'N/A'}. Context: ${data.scale_summary || 'N/A'}.`;
    } catch (e) {
        return analysis; // Fallback to raw text if JSON parse fails
    }

  } catch (error) {
    console.error("Plan Analysis Failed:", error);
    return ""; // Fail silently, just proceed without analysis
  }
};

/**
 * Helper to process the API response and extract image/text
 */
const processResponse = (response: any): GenerationResult => {
  let resultImageUrl: string | undefined;
  let resultText: string | undefined;

  if (response.candidates && response.candidates.length > 0) {
    const parts = response.candidates[0].content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          resultImageUrl = `data:image/png;base64,${base64EncodeString}`;
        } else if (part.text) {
          resultText = part.text;
        }
      }
    }
  }

  if (!resultImageUrl && !resultText) {
    throw new Error("No image generated. The model might have blocked the request due to safety filters.");
  }

  return {
    imageUrl: resultImageUrl,
    text: resultText
  };
};

/**
 * Helper to map raw API errors to user-friendly messages
 */
const mapError = (error: any): Error => {
  const { status, message } = getErrorDetails(error);

  if (status == 429 || message.includes('429') || message.includes('quota')) {
    return new Error("⚠️ Rate Limit Exceeded. Try 'Gemini 2.5 Flash' or check your API Key quota.");
  }
  if (status == 403 || message.includes('403')) {
    return new Error("⚠️ Permission Denied. Your API Key does not have access to this model (or is invalid).");
  }
  if (status == 503 || message.includes('503')) {
     return new Error("⚠️ Service Overloaded. Try again shortly.");
  }
  return new Error(message || "An unexpected error occurred.");
};

/**
 * Uses a text model to rewrite and enhance a short prompt.
 */
export const enhancePrompt = async (originalPrompt: string, apiKey?: string): Promise<string> => {
  try {
    const finalApiKey = apiKey || getEnvApiKey();
    if (!finalApiKey) {
      throw new Error("API Key is missing.");
    }

    const ai = new GoogleGenAI({ apiKey: finalApiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', 
      contents: `
      Act as a Senior Prompt Engineer for Architecture AI.
      Refine the following user input into a concise, professional prompt.
      
      User Input: "${originalPrompt}"
      
      Requirements:
      - If input is non-English (e.g., Thai), TRANSLATE it to English architectural keywords first.
      - Focus on architectural terms (Facade, Materiality, Lighting).
      - Add keywords for quality (8k, photorealistic, cinematic lighting).
      - Keep it under 60 words.
      
      Output ONLY the enhanced prompt.
      `,
    });

    return sanitizePrompt(response.text || originalPrompt);
  } catch (error) {
    console.error("Prompt Enhancement Error:", error);
    return sanitizePrompt(originalPrompt);
  }
};
