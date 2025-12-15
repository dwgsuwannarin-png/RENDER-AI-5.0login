
import { Preset } from './types';

export const TRANSLATIONS = {
  EN: {
    aiSettings: "AI Settings",
    aiModel: "AI Model",
    apiKey: "API Key",
    getKey: "Get Key",
    exterior: "EXTERIOR",
    interior: "INTERIOR",
    plan: "PLAN",
    mainImage: "Main Image (Structure)",
    required: "Required",
    promptLabel: "Prompt (Command)",
    promptPlaceholder: "Describe your vision (e.g., 'Modern white house, sunset')...",
    maskPromptPlaceholder: "Describe what to generate inside the masked area...",
    enhanceButton: "Magic Enhance",
    enhancing: "Improving...",
    refineLabel: "Refine Result",
    refinePlaceholder: "Add details to the result...",
    styleReference: "Style Reference",
    optional: "Optional",
    quickPrompts: "Professional Styles",
    generate: "Generate Visual",
    rendering: "Rendering...",
    newProject: "NEW PROJECT",
    startNew: "Start a new project? Current progress will be lost.",
    enterKey: "Please enter your Personal API Key to proceed.",
    enterPrompt: "Please enter a prompt or select a style preset.",
    unexpectedError: "An unexpected error occurred.",
    brushTool: "Brush Tool (In-paint)",
    textTool: "Text Tool (Overlay)",
    brushSize: "Size",
    brushColor: "Color",
    undo: "Undo",
    redo: "Redo",
    apiKeyStatus: "Member License",
    connected: "Active",
    readyToRender: "Ready to Render",
    uploadToBegin: "Upload a reference image (High-Res PNG recommended).",
    aiProcessing: "AI is rendering your vision...",
    generationFailed: "Generation Failed",
    somethingWrong: "Something went wrong. Please try again.",
    apiKeyPlaceholder: "Paste your Gemini API Key here...",
    saveKey: "Save Key",
    keySaved: "API Key Saved. Pro Features Unlocked.",
    modelHint: "Optimized for speed & cost.",
    proModelHint: "Requires Personal API Key for full resolution.",
    adminRestriction: "Note: Without a Personal Key, Pro models will be optimized to Standard quality.",
    analyzingPlan: "Analyzing Plan Geometry...",
    personalKeyLabel: "Use Personal Key",
    proUnlocked: "PRO UNLOCKED",
    freeTier: "FREE TIER",
    needKeyWarning: "⚠️ This model requires a Personal Key. Add one to unlock 4K.",
    imageStyle: "Image Style",
    stylePhoto: "Photorealistic",
    styleOil: "Oil Painting",
    stylePencil: "Pencil Sketch",
    styleMarker: "Marker Sketch",
    styleColorPencil: "Colored Pencil",
    styleAnime: "Anime Style"
  },
  TH: {
    aiSettings: "ตั้งค่า AI",
    aiModel: "โมเดล AI",
    apiKey: "คีย์ API",
    getKey: "รับคีย์",
    exterior: "ภายนอก (Exterior)",
    interior: "ภายใน (Interior)",
    plan: "แปลน (Plan)",
    mainImage: "รูปภาพหลัก (โครงสร้าง)",
    required: "จำเป็น",
    promptLabel: "คำสั่ง (Prompt)",
    promptPlaceholder: "พิมพ์คำสั่งที่นี่ (เช่น 'บ้านโมเดิร์นสีขาว')...",
    maskPromptPlaceholder: "ระบุสิ่งที่ต้องการให้ปรากฏในพื้นที่ระบายสี...",
    enhanceButton: "เสกคำสั่งสวย",
    enhancing: "กำลังปรับปรุง...",
    refineLabel: "ปรับแต่งผลลัพธ์",
    refinePlaceholder: "ปรับแต่งรายละเอียดเพิ่มเติม...",
    styleReference: "อ้างอิงสไตล์ (Style Ref)",
    optional: "ไม่บังคับ",
    quickPrompts: "สไตล์มืออาชีพ",
    generate: "สร้างภาพ",
    rendering: "กำลังเรนเดอร์...",
    newProject: "เริ่มใหม่ (Reset)",
    startNew: "เริ่มโปรเจคใหม่หรือไม่?",
    enterKey: "กรุณาใส่ API Key ส่วนตัวเพื่อใช้งาน",
    enterPrompt: "กรุณากรอกคำสั่ง",
    unexpectedError: "เกิดข้อผิดพลาด",
    brushTool: "แปรงแก้ไข (In-paint)",
    textTool: "พิมพ์ข้อความ (Text)",
    brushSize: "ขนาด",
    brushColor: "สี",
    undo: "ย้อนกลับ",
    redo: "ทำซ้ำ",
    apiKeyStatus: "สถานะไลเซนส์",
    connected: "ใช้งานได้",
    readyToRender: "พร้อมทำงาน",
    uploadToBegin: "อัปโหลดรูปภาพเพื่อเริ่ม (แนะนำภาพความละเอียดสูง/High-Res)",
    aiProcessing: "AI กำลังวาดภาพ...",
    generationFailed: "ล้มเหลว",
    somethingWrong: "เกิดข้อผิดพลาด",
    apiKeyPlaceholder: "วางรหัส Gemini API Key ที่นี่...",
    saveKey: "บันทึกคีย์",
    keySaved: "บันทึกแล้ว ปลดล็อคฟีเจอร์ Pro สำเร็จ",
    modelHint: "โหมดประหยัด (เร็ว)",
    proModelHint: "ต้องใช้คีย์ส่วนตัวสำหรับความคมชัดสูงสุด",
    adminRestriction: "หมายเหตุ: หากไม่มีคีย์ส่วนตัว ระบบจะปรับคุณภาพเป็นมาตรฐานอัตโนมัติ",
    analyzingPlan: "กำลังอ่านระยะและสเกลจากแปลน...",
    personalKeyLabel: "ใช้คีย์ส่วนตัว",
    proUnlocked: "ปลดล็อค PRO",
    freeTier: "โหมดทดลองใช้",
    needKeyWarning: "⚠️ โมเดลนี้ต้องใช้คีย์ส่วนตัว (Personal Key) เพื่อภาพระดับ 4K",
    imageStyle: "สไตล์ภาพ",
    stylePhoto: "ภาพถ่าย (Photo)",
    styleOil: "ภาพสีน้ำมัน",
    stylePencil: "ภาพดินสอ",
    styleMarker: "ภาพสีเมจิก",
    styleColorPencil: "ภาพสีไม้",
    styleAnime: "ภาพอนิเมะ"
  }
};

export const EXTERIOR_PRESETS: Preset[] = [
  // GROUP 1: Featured Collections (New Requests)
  {
    id: 'ext-group-featured',
    label: 'Featured Collections',
    subtitle: 'New & Popular',
    thSubtitle: 'คอลเลกชันพิเศษ (แนะนำ)',
    prompt: '',
    children: [
      {
        id: 'feat-pool-villa-modern',
        label: 'Modern Pool Villa',
        subtitle: 'Backyard & Blue Sky',
        thSubtitle: 'พูลวิลล่า (หลังบ้าน)',
        prompt: 'A wide-angle architectural photograph of a luxurious modern minimalist building, viewed from the far end of its backyard under a bright clear blue sky. The two-story structure is characterized by clean white cubic forms, large floor-to-ceiling glass windows, and glass balcony railings. A long rectangular swimming pool with clear turquoise water runs parallel to the entire length of the building\'s main facade. A large, manicured green lawn area is situated to the left of the pool, and a wide paved walkway made of large light-colored stone tiles borders the pool on all other sides. Several wooden sun loungers with white cushions are arranged on the poolside patio. Landscaping features mature palm trees and tropical plants. Bright midday sunlight, sharp shadows.'
      },
      {
        id: 'feat-pool-landscape',
        label: 'Pool Landscape',
        subtitle: 'Garden Focus',
        thSubtitle: 'สวนสระว่ายน้ำ (เน้นสวน)',
        prompt: 'A wide-angle landscape photograph focusing on the luxurious backyard area of a modern property. A long, rectangular swimming pool with clear turquoise water runs parallel to the main facade in the background. A wide paved walkway made of large light-colored stone tiles borders the entire length of the pool on the right side, featuring several white modern sun loungers. To the left of the pool is a perfectly manicured green lawn area. The landscape is adorned with mature palm trees and various lush tropical plants, creating a serene, high-end resort atmosphere. Bright midday natural sunlight casts sharp shadows.'
      },
      {
        id: 'feat-rice-paddy-villa',
        label: 'Rice Paddy Villa',
        subtitle: 'Flooded Field',
        thSubtitle: 'วิลล่ากลางนา (น้ำขัง)',
        prompt: 'A photorealistic architectural photograph of a modern residence situated on an elevated foundation above a flooded green rice paddy field. The water is calm, perfectly reflecting the structure and the clear blue sky with scattered fluffy white clouds. Lush, vibrant green rice plants fill the surrounding fields, with grassy banks and reeds. Bright, natural daylight illuminates the scene. The background shows a distant rural landscape with trees under a wide sky. High resolution, incredibly detailed textures, peaceful atmosphere.'
      },
      {
        id: 'feat-suburban-luxury',
        label: 'Suburban Luxury',
        subtitle: 'Asphalt Driveway',
        thSubtitle: 'บ้านจัดสรรหรู',
        prompt: 'A wide-angle architectural photograph of a luxury residence situated in an upscale suburban neighborhood. The foreground features a spacious, clean paved asphalt driveway leading up to the structure. The building is surrounded by perfectly manicured landscape design, low trimmed hedges, ornamental shrubs, needle pine trees, and a lush green lawn. The sky is a clear, smooth gradient blue with soft natural daylight. Warm, welcoming yellow light glows from the windows, contrasting with the cool twilight sky. Ultra-realistic, 8k resolution, premium real estate photography style.'
      },
      {
        id: 'feat-european-garden',
        label: 'European Estate',
        subtitle: 'French Topiary',
        thSubtitle: 'บ้านยุโรป (สวนดัด)',
        prompt: 'A grand architectural photograph of a classic estate situated in an opulent formal French garden. A long, elegant light-beige cobblestone paved driveway leads centrally towards the structure. The foreground is dominated by perfectly manicured geometric boxwood hedges, low-trimmed garden mazes, and symmetrical cone-shaped cypress trees flanking the path. Lush vibrant green lawns. The sky is a dramatic mix of blue and soft textured white clouds. Soft, diffused natural daylight. High-end real estate photography, hyper-realistic, 8k resolution, symmetry, wealth and elegance.'
      },
      {
        id: 'feat-woodland-path',
        label: 'Woodland Garden',
        subtitle: 'Lush & Green',
        thSubtitle: 'ทางเดินสวนป่า',
        prompt: 'A photorealistic architectural photograph of a residence nestled in a lush, mature woodland garden. A winding light-grey flagstone pathway leads through a vibrant green lawn towards the entrance. The foreground is filled with rich, textured landscaping including ferns, hostas, and low-growing shrubs. Tall, mature trees frame the scene, creating a natural canopy overhead. Soft, diffused natural daylight illuminates the exterior, while warm golden interior lights glow invitingly from the windows, creating a cozy and serene atmosphere.'
      },
      {
        id: 'feat-rice-aerial',
        label: 'Rice Field Aerial',
        subtitle: 'Bird\'s Eye View',
        thSubtitle: 'ทุ่งนา (มุมสูง)',
        prompt: 'A stunning architectural photograph of a residence situated in the middle of vast, vibrant green rice paddy fields. In the background, a majestic, layering mountain range stretches across the horizon under a bright blue sky with fluffy white clouds. A long, straight paved concrete driveway leads from the foreground gate towards the building, flanked by manicured green lawns and the rice fields. The scene is bathed in bright, clear natural sunlight. High contrast, vivid colors, photorealistic, 8k resolution, wide-angle shot.'
      },
      {
        id: 'feat-lake-mountain-aerial',
        label: 'Lake & Mountain',
        subtitle: 'Alpine Aerial',
        thSubtitle: 'วิวทะเลสาบภูเขา (มุมสูง)',
        prompt: 'High-angle aerial landscape photograph. Bright, warm sunlight with sharp shadows. Vibrant blue sky dotted with fluffy white clouds. Rugged mountainous terrain with snow-capped peaks and forested slopes. A large, reflective, deep blue lake dominates the mid-ground. The hillside is meticulously landscaped with green lawns, carefully placed shrubs and flowers, stone pathways, and a clear blue swimming pool with a sun deck. Photorealistic 8k.'
      },
      {
        id: 'feat-jenny-project',
        label: 'Resort Project',
        subtitle: 'Dusk/Dawn Atmosphere',
        thSubtitle: 'โครงการรีสอร์ท (Jenny)',
        prompt: 'High-resolution photograph of a resort or residential project area at dusk or dawn. Blue-grey sky with wispy clouds, serene atmosphere. Meticulously designed and maintained gardens filled with lush greenery, large shade trees, pine trees, shrubs, colorful flowering plants, and ground covers. Concrete or stone walkways winding through the garden. Water features or swimming pools with clear water reflecting the sky. Background: Modern architecture, single-detached houses or villas, mixing concrete, stone, wood, and glass. Large windows letting in natural light, warm lighting in some areas. Clean asphalt or concrete roads with garden lights.'
      },
      {
        id: 'feat-hillside-village',
        label: 'Hillside Village',
        subtitle: 'Mountain Resort',
        thSubtitle: 'หมู่บ้านบนไหล่เขา',
        prompt: 'Vibrant mountain landscape teeming with lush, green forests and expansive meadows under a bright, cloud-dotted sky. A collection of diverse resort structures integrated into the natural setting. Buildings feature modern tropical elements with thatch or flat roofs, large glass panels, stone, and wood. Structures are arranged across the hillside, incorporating features such as infinity pools, terraces, wooden walkways, and pavilions. High detail.'
      },
      {
        id: 'feat-lakefront-view',
        label: 'Lakefront View',
        subtitle: 'Water & Mountain',
        thSubtitle: 'วิวหน้าทะเลสาบ',
        prompt: 'High-resolution 8K landscape photograph showing a serene waterfront atmosphere. Foreground: Large marsh or lake with mirror-like still water reflecting the sky and landscape perfectly. The bank features a spacious, manicured green lawn alternating with gravel and natural stone paths. Background: Lush tropical rainforest and majestic high mountains covered in green trees. Sky with scattered clouds, soft diffused lighting. Center: Space for architecture (wood, glass, or modern) blending with nature.'
      },
      {
        id: 'feat-hillside-reflection',
        label: 'Hillside Reflection',
        subtitle: 'Lake & Forest',
        thSubtitle: 'เนินเขาเงาสะท้อนน้ำ',
        prompt: 'High-resolution landscape photograph emphasizing the serenity and grandeur of nature. Foreground: Fresh green manicured lawn sloping down to the edge of a large lake. The lake surface is still as a mirror, perfectly reflecting the surroundings. Background: Towering mountains covered in dense, lush green rainforest. Beautiful mature trees framing the waterfront. Diffused morning light or soft sunlight, creating a fresh atmosphere. Scattered clouds.'
      },
      {
        id: 'feat-khaoyai-modern',
        label: 'Khao Yai Modern',
        subtitle: 'Concrete & Wood',
        thSubtitle: 'เขาใหญ่ (โมเดิร์น)',
        prompt: 'Architectural photograph of a striking two-story modern house. Facade mixes bare concrete, black structural elements, and wooden slats. Large floor-to-ceiling glass windows revealing modern interior. Situated amidst lush natural landscape, dense forest mountain background. Foreground: Reflective pool, smooth wide lawn, and colorful flower garden. Morning sunlight, serene and luxurious.'
      },
      {
        id: 'feat-khaoyai-resort',
        label: 'Stone & Wood Resort',
        subtitle: 'Tranquil Garden',
        thSubtitle: 'รีสอร์ทหินและไม้',
        prompt: 'A modern resort built of stone and wood, nestled in lush greenery. Tranquil atmosphere. Wide lawn bordered by white and purple flowering plants. A pool reflecting the building. Large trees, including mango trees with supports, providing shade. Forested mountain backdrop. Afternoon sunlight bathes the scene in a relaxing ambiance.'
      },
      {
        id: 'feat-twilight-pool',
        label: 'Twilight Villa',
        subtitle: 'Blue Hour & Lanterns',
        thSubtitle: 'บ้านริมสระ (พลบค่ำ)',
        prompt: 'A cinematic, photorealistic architectural landscape photograph of a luxurious resort villa at twilight (Blue Hour). Foreground: Sleek, dark-tiled swimming pool with still water creating perfect mirror-like reflections of warm lights. Spacious wooden deck, built-in lounge seating, dining area with parasol, floor lanterns casting warm golden glow. Architecture: Wide, expansive luxury residence, open-concept, massive sliding glass doors revealing warm illuminated interior. Background: Dense, lush green hillside covering the horizon. 8k resolution.'
      }
    ]
  },

  // GROUP 2: Luxury & Estates
  {
    id: 'ext-group-estates',
    label: 'Luxury Estates',
    subtitle: 'Villas & Mansions',
    thSubtitle: 'คฤหาสน์และวิลล่าหรู',
    prompt: '',
    children: [
      {
        id: 'ext-twilight-estate',
        label: 'Twilight Estate',
        subtitle: 'Blue Hour & Cypress',
        thSubtitle: 'สวนคฤหาสน์ (ยามค่ำคืน)',
        prompt: 'A cinematic wide-angle landscape photograph of a luxurious estate garden at twilight (Blue Hour). Foreground & Midground (The Focus): An immaculate, manicured formal garden featuring a velvety green lawn. The highlight is a row of tall, slender Italian Cypress trees (Pencil Pines) and perfectly shaped round boxwood hedges. Dramatic warm uplighting at the base of the trees casts elegant shadows and highlights the texture of the foliage against the deep blue sky. A sophisticated walkway made of large grey stone slabs with grass joints leads the eye into the scene. Background (Context Only): A large, modern Neoclassical luxury villa stands in the background, serving as a majestic backdrop. The details of the building are soft, but warm golden light spills invitingly from grand floor-to-ceiling glass windows and the entrance archway, creating a beautiful contrast with the cool tones of the twilight exterior. Mood & Style: High-end real estate photography, ultra-detailed textures, serene atmosphere, expensive, symmetrical composition, 8k resolution, photorealistic.'
      },
      {
        id: 'ext-grand-garden-scene',
        label: 'Grand Garden',
        subtitle: 'Lush Lawn & Hydrangeas',
        thSubtitle: 'สวนขนาดใหญ่ (ไฮเดรนเยีย)',
        prompt: 'A detailed visualization of a large, well-kept garden. Key elements: a lush, shadowed lawn with rich texture, a large tree with a wide canopy, younger trees supported by wooden frames, neat boxwood hedges, and vibrant flower beds featuring hydrangeas and yellow blooms. The scene includes concrete walking paths and seating areas arranged naturally. The composition focuses on the landscape and spatial arrangement, with the house minimized or removed to emphasize the garden. Natural lighting, balanced composition, photorealistic, 8k resolution.'
      },
      {
        id: 'ext-luxury-estate-pro',
        label: 'Luxury Estate',
        subtitle: 'Modern Tropical',
        thSubtitle: 'คฤหาสน์หรูโมเดิร์น',
        prompt: 'A high-resolution, wide-angle architectural photography series showcasing luxurious modern tropical and contemporary residences set within an expansive, tranquil estate. The Houses: Two to three-story structures featuring modern designs with a color palette of white, cream, and dark grey. Premium materials include smooth stucco, grey stone veneer accents, and warm wood trim. Characterized by expansive floor-to-ceiling glass windows and doors with black aluminum frames to maximize natural light. Rooflines vary, including prominent A-frame features, dark tiled hipped roofs, and flat modern rooflines. Spacious balconies with glass railings are common. Many homes feature large garages accommodating 2-4 luxury vehicles (some with cars parked, like Tesla or Volvo). Landscaping & Gardens: Each house sits on a large plot surrounded by meticulously manicured landscaped gardens. Expansive vibrant green lawns are crossed by pathways of large natural flagstones set in gravel or grass-paver concrete blocks. The gardens feature orderly hedge rows, colorful flower beds (e.g., blue/white hydrangeas, yellow flowering bushes), and mature, sprawling shade trees (some with wooden support braces). Additional Features: Some scenes include private infinity-edge swimming pools with poolside terraces, decorative water fountains, minimalist wooden garden benches, or unique brutalist concrete garden pavilion structures. Atmosphere & Lighting: Bright natural daylight under a blue sky with scattered clouds, creating a warm, luxurious, and relaxing vibe. (Optional: Some scenes at dusk/twilight with warm interior and exterior garden lighting turned on). Ultra-sharp focus emphasizing material textures and light and shadow depth.'
      },
      {
        id: 'ext-pool-villa',
        label: 'Pool Villa',
        subtitle: 'Luxury & White',
        thSubtitle: 'พูลวิลล่าหรูหรา',
        prompt: 'Subject: A wide-angle landscape photograph of a luxurious modern tropical pool garden on a bright sunny day. Key Details (The Focus): The Pool: A long, rectangular lap pool dominates the center. The water is crystal clear, shimmering turquoise/aquamarine, with bright sun reflections dancing on the surface. Decking & Hardscape: Expansive, smooth white stone slab pavers surround the pool area, creating a bright, clean contrast. The Lawn: Adjacent to the pool is a perfectly manicured, vibrant green grass lawn, looking like a plush carpet. Furniture: A row of modern teak wood lounge chairs with thick white cushions rests on the white stone deck by the water\'s edge. Landscaping: The area is enclosed by lush tropical foliage. Tall date palms tower over the scene, casting distinct shadows on the white deck and lawn. Dense green hedges, banana plants, and various tropical shrubs fill the background and borders. Atmosphere & Lighting: Bright midday sunlight under a clear blue sky with a few wispy clouds. The light is harsh and crisp, emphasizing textures. The overall mood is serene, expensive, and private resort-like.8k resolution, architectural photography style.'
      },
      {
        id: 'ext-resort-villa',
        label: 'Resort Villa',
        subtitle: 'Twilight Pool Deck',
        thSubtitle: 'วิลล่ารีสอร์ท (แสงค่ำ)',
        prompt: 'A cinematic, photorealistic architectural landscape photograph of a luxurious resort villa at twilight (Blue Hour). Foreground & Outdoor Living (Primary Focus): The foreground features a sleek, dark-tiled swimming pool with still water creating perfect, mirror-like reflections of the warm lights. A spacious wooden deck surrounds the pool. The outdoor living area includes built-in lounge seating with plush cushions, a dining area with a large parasol, and wide stone steps leading up to the residence. Lighting & Atmosphere: The scene is illuminated by a cozy, warm golden glow coming from numerous floor lanterns placed on the steps and pool edge, as well as the interior lighting. This warm light contrasts beautifully with the cool deep blue tones of the twilight sky. The mood is intimate, inviting, and expensive. The Architecture (Variable Element): Overlooking the pool deck is a wide, expansive luxury residence. (Note to AI: The architecture can be any style—Modern Tropical, Contemporary Flat Roof, or Classic Resort Style with a pitched roof—provided it features an open-concept design with massive sliding glass doors that are fully open, revealing a warm, illuminated interior). Background: The backdrop is a dense, lush green hillside covering the horizon, providing a natural and secluded setting. 8k resolution, architectural photography style.'
      },
      {
        id: 'ext-grand-pond-estate',
        label: 'Grand Pond Estate',
        subtitle: 'Pond & Infinity Pool',
        thSubtitle: 'สวนคฤหาสน์ (สระน้ำพุ)',
        prompt: 'A sweeping, wide-angle landscape photograph taken at twilight, capturing the expansive grounds of a luxurious estate. The foreground and midground are the primary focus, featuring a perfectly manicured, emerald-green lawn intersected by pathways of large, light-colored stone slabs and fine gravel. A prominent, illuminated ornamental pond with a central fountain and aquatic plants is surrounded by low-cut hedges, diverse flowering shrubs, and mature trees, including tall, slender cypress and spreading deciduous varieties. Beyond this, a large infinity-edge swimming pool with a surrounding deck of weathered timber and stone reflects the warm orange and deep blue hues of the sunset sky, furnished with modern lounge chairs. In the distance, the silhouettes of grand, multi-story residential structures are visible, their architectural details softly blurred and de-emphasized, defined primarily by the warm, inviting glow spilling from numerous large windows and exterior light fixtures. The background is a mix of dense, lush foliage and a hint of a distant coastline under the dramatic evening sky. The entire scene exudes an atmosphere of tranquil luxury and sprawling natural beauty.'
      },
      {
        id: 'ext-waterfront-estate',
        label: 'Waterfront Estate',
        subtitle: 'Hydrangeas & Lake',
        thSubtitle: 'สวนริมน้ำ (ไฮเดรนเยีย)',
        prompt: 'A breathtaking, symmetrical landscape photograph of a luxurious waterfront estate garden, framed by nature. Composition & Framing: The shot is dramatically framed by two massive, dark-trunked mature trees in the immediate foreground (left and right). Their upper branches reach toward each other, creating a majestic natural archway that frames the scene. A straight, central white stone pathway creates a strong leading line drawing the eye toward the background. The Landscape (Primary Focus): Flanking the pathway are lush, overflowing rows of blooming white hydrangea bushes and manicured boxwood hedges. Beyond the flowers lies an expansive, perfectly manicured emerald green lawn that stretches smoothly up a gentle slope like a green carpet. The Architecture (Variable Element): At the top of the grassy slope stands a residential building. (Note to AI: The architecture can be of any style—modern, traditional, or contemporary—as long as it fits the scale of the estate). It serves as a distant focal point without specific emphasis on its details. Background & Atmosphere: Behind the house, a glimpse of a calm blue lake or ocean bay is visible with a distant shoreline. The sky is bright blue with fluffy white clouds. The lighting is bright and sunny, creating dappled shadows on the grass. Style: Architectural Digest landscape photography, symmetrical balance, serene, expansive, 8k resolution, photorealistic.'
      },
    ]
  },

  // GROUP 3: Landscape & Gardens
  {
    id: 'ext-group-gardens',
    label: 'Landscape & Gardens',
    subtitle: 'Various Styles',
    thSubtitle: 'สวนและภูมิทัศน์',
    prompt: '',
    children: [
      {
        id: 'ext-suburban-landscape',
        label: 'Modern Tropical',
        subtitle: 'Expansive Garden',
        thSubtitle: 'สวนโมเดิร์นทรอปิคอล',
        prompt: 'A sweeping wide-angle landscape photograph of an expansive modern tropical garden estate. The Primary Focus (Landscape & Hardscape): The foreground and midground are dominated by immense, perfectly manicured green lawns (velvet lawns) bordered by precise low formal hedges and clusters of shaped boxwood spheres. Several large, mature shade trees with sprawling canopies (some with wooden structural supports) frame the view. Expansive areas of smooth troweled concrete paving, grass block pavers, and gravel pathways connect different garden zones. A striking, sculptural brutalist concrete garden pavilion (like the one in the reference images) or a sleek swimming pool with a terrace might be integrated into the landscape as a focal point. The Secondary Element (Architecture as Backdrop): A modern white house (Nordic or contemporary style) is visible in the distant background, serving merely as context. The focus is on how the garden spaces interact with the building terraces or patios, not on the architectural details themselves. Atmosphere & Technical: Bright natural daylight, clear blue sky with some clouds. The mood is serene, lush, spacious, and tranquil. High resolution, sharp focus on the textures of foliage and hardscape materials.'
      },
      {
        id: 'ext-curved-garden',
        label: 'Curved Garden',
        subtitle: 'Sweeping Curves',
        thSubtitle: 'สวนโค้งมน (Sweeping)',
        prompt: 'A picturesque, photorealistic landscape photograph of a lush, manicured garden estate featuring sweeping curves. Foreground & Framing: The scene is artistically framed by the massive dark trunk and sprawling overhanging branches of a mature oak tree in the immediate foreground (left side). This creates a canopy of dappled sunlight and soft shadows across the garden. The Landscape (Primary Focus): The garden design is defined by smooth, sweeping curvilinear lines. Layers of low, perfectly manicured boxwood hedges wind through the space. Nestled behind the hedges are vibrant clusters of pink and white flowers (such as azaleas or hydrangeas). The ground is carpeted in an immaculate, velvet-like emerald green lawn that flows seamlessly through the garden curves. The Architecture (Variable Element): Nestled in the background, partially framed by the foliage, stands a charming residential estate. (Note to AI: The architecture can be varied—Traditional White Colonial, English Stone Cottage, or Modern Glass Pavilion—as long as it feels inviting and harmonizes with the lush, green surroundings). Atmosphere: The lighting is soft and filtered, creating a dreamy, serene, and romantic atmosphere. The scene evokes a sense of peace and established luxury. 8k resolution, highly detailed textures.'
      },
      {
        id: 'ext-european-topiary',
        label: 'European Topiary',
        subtitle: 'Formal Hedges',
        thSubtitle: 'สวนยุโรปทางการ',
        prompt: 'Grand Formal European Topiary Garden, magnificent successive hedge arches forming a green corridor with profound depth. Pathway is a straight, symmetrical line of pale gravel or geometric stone pavers. The path is flanked by meticulously trimmed topiary—both spherical balls and cube-shaped hedges. The axis leads to a classic stone fountain or a simple spherical topiary focal point. Features elegant lanterns hanging from the hedge arches. A separate area contains a sculptural, gnarled mature tree framed by tall, vertical hedge walls. Bright, clear natural daylight, or golden hour lighting, creating high-contrast shadows. Straight-on, symmetrical perspective. Ultra-high resolution, photorealistic photography, silent luxury aesthetic'
      },
      {
        id: 'ext-japanese-garden',
        label: 'Grand Zen Garden',
        subtitle: 'Sand, Moss & Pine',
        thSubtitle: 'สวนเซนญี่ปุ่น',
        prompt: 'Exquisite Grand Modern Zen Garden (Karesansui and Tsukiyama Style), vast immaculately raked white sand with precise ripple patterns, symbolizing water. Features mounds of vibrant emerald green moss and large, imposing natural dark stone boulders. Adorned with majestically sculpted Japanese Black Pine trees (Niwaki). Garden is bordered by a low white wall and dense background foliage. Seamlessly integrated with a minimalist contemporary building via floor-to-ceiling glass windows and a sleek light wood terrace. Soft, diffuse natural daylight, subtle shadows, ultra-high resolution, photorealistic quality, conveying profound peace and stillness.'
      },
      {
        id: 'ext-tropical-jungle',
        label: 'Tropical Jungle',
        subtitle: 'Lush & Exotic',
        thSubtitle: 'สวนป่าดิบชื้น (ไม้พุ่ม)',
        prompt: 'Intimate and Lush Tropical Jungle Garden Pathway. Scale is human-sized and detailed, avoiding massive towering trees. Filled with overlapping layers of medium-sized exotic foliage including bird of paradise, small fan palms, elephant ears, and ferns. Dominant color is vibrant, rich deep green, accented by fiery red or bright orange tropical flowers at eye level. The path is a winding line of flat, dark stone stepping slabs set within a bed of smooth, pale river pebbles. Light is soft, diffused, and filtered sunlight, creating scattered highlights and deep, rich shadows on the glossy leaves. The atmosphere is humid, secluded, and exotic. Ultra-high resolution, photorealistic photography, botanical conservatory quality.'
      },
      {
        id: 'ext-enchanted-forest',
        label: 'Enchanted Forest',
        subtitle: 'Moss & Lanterns',
        thSubtitle: 'สวนป่าลึกลับ',
        prompt: 'Enchanted, Deeply Forested Japanese Garden Pathway, highly mystical and tranquil. Dominated by ancient, gnarled, moss-covered trees forming a dense canopy. The ground is covered in vibrant emerald green moss and large, dark stepping stones that wind into the distance. Lush, large-leafed dark green foliage borders the path. A rustic, dark wood Japanese pavilion/teahouse is visible in the middle ground. Light is filtered and diffuse (God Rays) or overcast/misty, creating a deep shade. Features traditional dark metal Japanese lanterns casting a warm, amber glow along the path. Ultra-high resolution, photorealistic photography, ancient and mysterious atmosphere.'
      },
      {
        id: 'ext-rustic-water',
        label: 'Rustic Water',
        subtitle: 'Creek & Stone',
        thSubtitle: 'สวนลำธารหินธรรมชาติ',
        prompt: 'Serene Rustic Garden with Natural Water Feature, featuring a winding, cascading creek with small waterfalls flowing over tiers of warm, natural flagstone and boulders. Creek banks are lined with smooth river stones and densely planted with lush ferns, hostas, and tall ornamental grasses. Pathways consist of large, irregularly shaped flagstone slabs and rough-hewn stone steps ascending a gentle slope. Framed by large, mature deciduous and coniferous shade trees and an immaculately manicured green lawn. The scene is set against a backdrop of a handsome stone cottage or wooden lodge. Bright natural daylight, dappled sunlight creating high-contrast shadows. Ultra-high resolution, photorealistic photography, tranquil and deeply natural atmosphere.'
      },
    ]
  },

  // GROUP 4: Nature & Scenery
  {
    id: 'ext-group-nature',
    label: 'Nature & Scenery',
    subtitle: 'Atmospheric Views',
    thSubtitle: 'ธรรมชาติและบรรยากาศ',
    prompt: '',
    children: [
      {
        id: 'ext-misty-hillside',
        label: 'Misty Hillside',
        subtitle: 'Fog & Greenery',
        thSubtitle: 'เนินเขาในสายหมอก',
        prompt: 'A breathtaking cinematic landscape photography of a lush green hillside on a misty, overcast day. The Foreground & Landscape (Primary Focus): A steep, rolling slope covered in vibrant, wild green grass and vegetation. Large, weathered grey boulders are scattered naturally across the terrain. A narrow, winding gravel or dirt path leads the eye up the hill. The texture of the grass is highly detailed, looking wet and fresh as if after rain. The Background & Atmosphere: The background features majestic, dark mountains partially obscured by thick, low-hanging fog and mist. A dense forest of pine trees or tropical greenery lines the distant ridges. The sky is moody, grey, and overcast, providing soft, diffused lighting with no harsh shadows. The Secondary Element (Minimalist Structure): A sleek, minimalist modern structure (glass and concrete) is perched precariously on the edge of the slope or elevated on stilts. It is treated as a silhouette or a simple geometric form blending into nature. Contrast: Warm, golden light glows invitingly from the interior of the structure, creating a striking contrast against the cool, blue-green tones of the misty landscape. Style: Photorealistic, 8k resolution, architectural digest landscape style, serene, solitary, peaceful.'
      },
      {
        id: 'ext-misty-mountain-valley',
        label: 'Mountain Valley',
        subtitle: 'Lake & Mist',
        thSubtitle: 'หุบเขาหมอก & ทะเลสาบ',
        prompt: 'A breathtaking, cinematic wide-angle landscape photograph of a secluded luxury residence situated in a dramatic misty mountain valley. The Environment (Primary Focus): The scene is dominated by majestic, steep mountains covered in dense green vegetation rising sharply in the background, their peaks partially obscured by low-hanging mist and white clouds. To the side lies a deep, serene emerald-green lake or river. The Foreground & Leading Line: The foreground features a winding gravel driveway cutting through a lush, vibrant green lawn. The grassy slope is dotted with natural grey boulders and a few palm trees, creating a manicured yet natural look. The Architecture (Variable Element): Perched prominently on the grassy slope overlooking the water is a magnificent residential structure. (Note to AI: The architecture can be of any style—Modern Brutalist concrete, Contemporary Glass Villa, or Organic Architecture—as long as it features expansive windows to capture the view and integrates structurally with the hillside). Atmosphere & Lighting: The sky is overcast with soft, diffused white light, eliminating harsh shadows and saturating the greens of the landscape. The mood is tranquil, isolated, and expensive. Technical: 8k resolution, photorealistic, wide depth of field, architectural digest style.'
      },
      {
        id: 'ext-winding-road',
        label: 'Winding Road',
        subtitle: 'Asphalt & Forest',
        thSubtitle: 'ถนนคดเคี้ยวในป่า',
        prompt: 'A photorealistic, cinematic landscape photograph of a quiet winding asphalt driveway leading through a wooded estate on an overcast day. The Road (Primary Focus): A curving dark asphalt road leads from the foreground deep into the scene. The road surface is highly detailed, slightly textured, and scattered with dry, brown fallen leaves, creating a realistic, lived-in atmosphere. Crucially, the road is empty with no cars or vehicles present. The Forest & Vegetation: The scene is framed by tall, imposing trees with dark bark. The branches create intricate patterns against the sky; some are bare and skeletal, while others display sparse, fresh light green leaves (suggesting early spring). The Architecture (Secondary Element): In the background, nestled among the trees at the end of the road, is a minimalist white modern residence. The architecture features clean geometric box forms, a flat roof, and large black-framed glass windows that reflect the surroundings. It serves as a stark, clean contrast to the organic forest. Atmosphere & Lighting: The sky is white and overcast, providing soft, flat, diffused lighting with no harsh shadows. The mood is serene, slightly melancholic, cool, and peaceful. Technical: 8k resolution, highly detailed textures (bark, asphalt, grass), wide angle, eye-level shot, architectural photography style.'
      },
      {
        id: 'ext-desert-modern',
        label: 'Desert Modern',
        subtitle: 'Arid & Minimal',
        thSubtitle: 'ทะเลทรายมินิมอล',
        prompt: 'A photorealistic, wide-angle landscape photograph of a minimalist modern setting in an arid desert environment. Foreground & Natural Textures (Primary Focus): The ground is covered in dry, golden scrub vegetation and desert grass, with highly detailed textures. Large, scattered grey boulders dot the landscape, adding organic ruggedness. A straight, perfectly manicured grey gravel pathway acts as a strong leading line from the foreground, guiding the eye towards a raised pure white concrete platform. Midground Elements: A sleek, minimalist infinity plunge pool with clear blue water sits on the white platform, offering a cool contrast to the dry terrain. Background & Atmosphere: The sky is a very pale, soft blue gradient, almost white at the horizon, creating a bright, high-key lighting effect. In the far distance, faint hazy mountains are visible on the horizon line. The atmosphere is quiet, hot, and serene. The Structure (Contextual Backdrop): A modern black and white architectural form (resembling a Nordic A-frame silhouette) stands in the background. It is treated as a clean, geometric backdrop to emphasize the landscape, with no focus on interior details or specific window designs. Style: Desert modernism, Architectural Digest landscape style, 8k resolution, bright daylight, soft shadows, ultra-clean composition.'
      },
      {
        id: 'ext-coastal-mediterranean',
        label: 'Modern Coastal',
        subtitle: 'Olive & Ocean',
        thSubtitle: 'โมเดิร์นคอสตอล',
        prompt: 'Luxurious Modern Coastal Mediterranean Landscape, pristine and sun-drenched. Features a sculptural ancient Olive Tree with silver-green foliage, tall Italian Cypress trees, and Agave/Yucca accent plants. Expansive immaculately manicured green lawn. Walkways of wide, smooth light-colored stone slabs bordered by dark grey crushed stone/pebbles and low, rustic stone retaining walls. The backdrop is a stark white, minimalist modern villa with large dark windows and glass railings. Bright, clear, intense natural sunlight under a deep blue sky, casting sharp, distinct shadows. Hints of the deep blue ocean in the distance. Ultra-high resolution, photorealistic photography.'
      },
      {
        id: 'ext-mediterranean-hillside',
        label: 'Hillside Garden',
        subtitle: 'Cypress & Stone',
        thSubtitle: 'สวนเนินเขาเมดิเตอร์เรเนียน',
        prompt: 'Luxurious Mediterranean Hillside Garden, grand, wide natural stone staircase ascending terraced slopes supported by dry-stacked stone retaining walls. Features numerous tall, slender Italian Cypress trees and a mature, gnarled ancient Olive Tree. Planting beds filled with purple-flowering lavender, tightly clipped spherical shrubs, and drifts of silvery ornamental grasses. Background shows a view of rolling hillsides and a villa with pale stone/stucco walls. Bright, intense natural sunlight casting sharp, distinct shadows. Low-angle, wide vertical shot emphasizing the ascent and verticality. Ultra-high resolution, photorealistic photography.'
      },
    ]
  },
  
  // GROUP 5: Basic Styles
  {
    id: 'ext-group-basic',
    label: 'Basic Styles',
    subtitle: 'Standard Presets',
    thSubtitle: 'สไตล์พื้นฐาน (Basic)',
    prompt: '',
    children: [
       { 
         id: 'ext-modern-min', 
         label: 'Modern Minimal', 
         subtitle: 'Clean & White', 
         thSubtitle: 'โมเดิร์น ขาวคลีน', 
         prompt: 'Architectural Style: Modern Minimalist Facade. Materials: Pure white smooth plaster, frameless glass floor-to-ceiling windows. Atmosphere: Soft overcast lighting, clean and serene. Landscape: Manicured green lawn, concrete pavers.' 
       },
       { 
         id: 'ext-night-glow', 
         label: 'Night Facade', 
         subtitle: 'Lighting Design', 
         thSubtitle: 'แสงไฟยามค่ำคืน', 
         prompt: 'Architectural Style: Night Photography. Lighting: Warm 3000K interior glow visible through windows, exterior uplighting on columns, hidden LED strips highlighting textures. Atmosphere: Blue hour twilight, dramatic, cinematic high-contrast.' 
       },
       { 
         id: 'ext-tropical-resort', 
         label: 'Nature Resort', 
         subtitle: 'Wood & Stone', 
         thSubtitle: 'รีสอร์ทธรรมชาติ', 
         prompt: 'Architectural Style: Luxury Tropical Resort. Materials: Natural teak wood timber screens, rough-cut stone wall cladding, thatch or shingle roof. Landscape: Lush rainforest vegetation, palms, ferns surrounding the structure. Atmosphere: Dappled sunlight, warm.' 
       },
       { 
         id: 'ext-futuristic', 
         label: 'Futuristic', 
         subtitle: 'Parametric Curve', 
         thSubtitle: 'ล้ำสมัย', 
         prompt: 'Architectural Style: Neo-Futuristic / Zaha Hadid style. Form: Fluid organic curves, parametric design. Materials: Glossy white aluminum composite panels, curved glass. Atmosphere: Bright high-key lighting, futuristic, sci-fi aesthetic.' 
       },
       {
         id: 'ext-industrial',
         label: 'Industrial',
         subtitle: 'Brick & Steel',
         thSubtitle: 'อินดัสเทรียล', 
         prompt: 'Architectural Style: Modern Industrial. Materials: Red brick walls, exposed black steel beams, large factory-style windows, raw concrete accents. Atmosphere: Urban setting, golden hour sunlight, sharp shadows.'
       }
    ]
  }
];

export const INTERIOR_PRESETS: Preset[] = [
  // --- ROOM TYPES (Grouped) ---
  {
    id: 'int-living-group',
    label: 'Living Room',
    subtitle: 'Various Styles',
    thSubtitle: 'ห้องรับแขก',
    prompt: '',
    children: [
       {
         id: 'int-living-modern-lux',
         label: 'Modern Luxury',
         subtitle: 'Beige & Gold',
         thSubtitle: 'โมเดิร์นหรูหรา',
         prompt: 'Stunning Modern Living Room Interior, open-plan design with expansive glass walls, bathed in soft natural light. Features a contemporary beige sectional sofa, Italian marble coffee table, and warm walnut wood paneling. Elements of luxury: brass accents, velvet throw pillows, and a statement chandelier. Neutral color palette of creams, greys, and warm earth tones. Photorealistic, 8k, architectural visualization.'
       },
       {
         id: 'int-living-minimal',
         label: 'Minimalist',
         subtitle: 'Clean & Airy',
         thSubtitle: 'มินิมอล',
         prompt: 'Ultra-Minimalist Living Room. Characteristics: Extreme simplicity, low profile furniture, clutter-free surfaces. Materials: White walls, light oak wood floors, matte finishes. Atmosphere: Serene, airy, spacious, and calm. Soft diffuse daylight.'
       },
       {
         id: 'int-living-industrial',
         label: 'Industrial Loft',
         subtitle: 'Brick & Leather',
         thSubtitle: 'ลอฟท์',
         prompt: 'Modern Industrial Loft Living Room. Features exposed red brick walls, concrete ceiling with exposed ductwork, and large factory-style windows. Furniture includes a distressed leather chesterfield sofa and raw wood coffee table. Atmosphere: Urban, edgy, warm lighting.'
       }
    ]
  },
  {
    id: 'int-dining-group',
    label: 'Dining Room',
    subtitle: 'Various Styles',
    thSubtitle: 'ห้องรับประทานอาหาร',
    prompt: '',
    children: [
       {
         id: 'int-dining-modern-luxury',
         label: 'Modern Luxury',
         subtitle: 'Marble & Velvet',
         thSubtitle: 'โมเดิร์นหรูหรา',
         prompt: 'Opulent Modern Luxury Dining Room. Centerpiece is a large polished Calacatta marble dining table surrounded by plush velvet dining chairs in deep charcoal or navy. Statement crystal chandelier hangs above. Wall features dark wood paneling or bronze mirror accents. Floor-to-ceiling windows with sheer drapes. Atmosphere: Sophisticated, expensive, evening dinner party setting. 8k, photorealistic.'
       },
       {
         id: 'int-dining-scandi',
         label: 'Scandi Minimal',
         subtitle: 'Wood & White',
         thSubtitle: 'สแกนดิเนเวียน',
         prompt: 'Bright Scandinavian Dining Room. Features a light oak wood dining table with wishbone chairs. Clean white walls, large windows letting in abundant natural light. A simple ceramic vase with branches as a centerpiece. Light wood flooring. Atmosphere: Cozy, hygge, airy, and welcoming. 8k, photorealistic.'
       },
       {
         id: 'int-dining-industrial',
         label: 'Industrial Loft',
         subtitle: 'Raw & Metal',
         thSubtitle: 'อินดัสเทรียล',
         prompt: 'Edgy Industrial Loft Dining Area. Features a raw edge solid wood slab table with black metal legs. Tolix style metal chairs or distressed leather benches. Exposed brick walls and concrete ceiling. Pendant lights with Edison bulbs. Large steel-framed windows. Atmosphere: Urban, raw, textured. 8k, photorealistic.'
       },
       {
         id: 'int-dining-classic',
         label: 'Classic Elegant',
         subtitle: 'Formal',
         thSubtitle: 'คลาสสิคทางการ',
         prompt: 'Formal Classic Dining Room. Features a long dark mahogany dining table with upholstered French Louis XVI chairs. Walls adorned with wainscoting and elegant wallpaper. A grand crystal chandelier and wall sconces provide warm lighting. Rich Persian rug on the floor. Atmosphere: Timeless, grand, traditional. 8k, photorealistic.'
       },
       {
         id: 'int-dining-tropical',
         label: 'Tropical Resort',
         subtitle: 'Open & Natural',
         thSubtitle: 'ทรอปิคอลรีสอร์ท',
         prompt: 'Tropical Resort Style Dining Room, semi-outdoor setting. Features a large teak wood table with rattan or wicker dining chairs. Surrounded by lush indoor plants and opening up to a view of greenery. Ceiling fans and bamboo pendant lights. Natural stone flooring. Atmosphere: Relaxed, breezy, vacation vibe. 8k, photorealistic.'
       }
    ]
  },
  {
    id: 'int-bedroom-group',
    label: 'Bedroom',
    subtitle: 'Various Styles',
    thSubtitle: 'ห้องนอน',
    prompt: '',
    children: [
       {
        id: 'int-bedroom-modern',
        label: 'Modern Minimal',
        subtitle: 'Clean & Soft',
        thSubtitle: 'โมเดิร์น มินิมอล',
        prompt: 'Serene Master Bedroom Retreat, minimalist modern style. Centerpiece is a plush king bed with layered premium linens and a textured upholstered headboard. Warm oak flooring, soft wool area rug, and floor-to-ceiling sheer curtains filtering sunlight. Ambient cove lighting and elegant bedside sconces. Calming color scheme of white, taupe, and soft sage green. 8k resolution, photorealistic.'
       },
       {
        id: 'int-bedroom-luxury',
        label: 'Dark Luxury',
        subtitle: 'Moody & Gold',
        thSubtitle: 'หรูหรา โทนเข้ม',
        prompt: 'Opulent Master Bedroom, dark luxury aesthetic. Features a charcoal velvet tufted headboard, black marble side tables with gold accents, and dark walnut wood wall paneling. Moody, dramatic lighting with warm hidden LED strips. Silk bedding in deep jewel tones. High-end hotel atmosphere. 8k, photorealistic.'
       },
       {
        id: 'int-bedroom-japandi',
        label: 'Japandi Zen',
        subtitle: 'Wood & Rattan',
        thSubtitle: 'เจแปนดิ',
        prompt: 'Japandi Style Bedroom, perfect blend of Japanese rustic minimalism and Scandinavian functionality. Low platform bed made of light ash wood. Rattan wardrobe doors and linen bedding in oatmeal color. Soft, diffused natural light, paper lantern pendant light. Peaceful, zen atmosphere. 8k, photorealistic.'
       },
       {
        id: 'int-bedroom-classic',
        label: 'Modern Classic',
        subtitle: 'Elegant Moldings',
        thSubtitle: 'โมเดิร์นคลาสสิค',
        prompt: 'Modern Classic Bedroom, Parisian apartment style. High ceilings with intricate wall moldings and cornices. Chevron parquet wood flooring. Elegant curved furniture in soft cream and pastel blue. Crystal chandelier. Bright, airy, and sophisticated. 8k, photorealistic.'
       },
       {
        id: 'int-bedroom-kids',
        label: 'Kids Room',
        subtitle: 'Playful & Bright',
        thSubtitle: 'ห้องนอนเด็ก',
        prompt: 'Playful and Stylish Kids Bedroom. Features a cozy reading nook, light wood bunk beds or house-frame bed. Soft pastel color palette (mint, blush, soft yellow). Whimsical wallpaper on one wall. Plenty of natural light, fluffy rugs, and organized toy storage. Happy and bright atmosphere. 8k, photorealistic.'
       }
    ]
  },
  {
    id: 'int-kitchen-group',
    label: 'Kitchen',
    subtitle: 'Various Styles',
    thSubtitle: 'ห้องครัว',
    prompt: '',
    children: [
       {
         id: 'int-kitchen-modern',
         label: 'Modern Luxury',
         subtitle: 'Marble & Grey',
         thSubtitle: 'โมเดิร์นหรูหรา',
         prompt: 'Sleek Modern Luxury Kitchen, featuring a grand island with white Calacatta marble waterfall countertops. Handleless matte cabinetry in charcoal grey or soft white. High-end integrated appliances and built-in shelving with LED strip lighting. Polished concrete or light wood floors. Large window over the sink. Clean, functional, and elegant. 8k, photorealistic.'
       },
       {
         id: 'int-kitchen-classic',
         label: 'Classic Farmhouse',
         subtitle: 'Warm & Wood',
         thSubtitle: 'คลาสสิค/ฟาร์มเฮาส์',
         prompt: 'Modern Farmhouse Kitchen. Features shaker-style cabinets in soft white or navy blue, brass hardware, and a large farmhouse sink. Exposed wooden beams on the ceiling. Warm wood flooring. Atmosphere: Cozy, inviting, family-oriented.'
       }
    ]
  },
  {
    id: 'int-bathroom-group',
    label: 'Bathroom',
    subtitle: 'Various Styles',
    thSubtitle: 'ห้องน้ำ',
    prompt: '',
    children: [
       {
         id: 'int-bathroom-spa',
         label: 'Luxury Spa',
         subtitle: 'Stone & Wood',
         thSubtitle: 'สปาหรูหรา',
         prompt: 'Opulent Modern Spa Bathroom, stone and wood textures. Features a large freestanding soaking tub and a frameless glass rain shower. Walls clad in large-format travertine or grey marble tiles. Floating vanity with warm timber finish and stone basin. Backlit round mirrors and soft, moody ambient lighting. Atmosphere of total relaxation and cleanliness.'
       },
       {
         id: 'int-bathroom-bright',
         label: 'Bright Modern',
         subtitle: 'White & Black',
         thSubtitle: 'ขาวสะอาดตา',
         prompt: 'Bright White Modern Bathroom. Features white subway tiles, matte black fixtures, and a glass shower partition. Hexagonal floor tiles. Potted green plant for freshness. Atmosphere: Clean, bright, energetic morning light.'
       }
    ]
  },
  
  // --- MATERIALS (Interior) ---
  {
    id: 'int-materials-group',
    label: 'Materials',
    subtitle: 'Flooring & Walls',
    thSubtitle: 'วัสดุ (พื้น/ผนัง)',
    prompt: '',
    children: [
       {
         id: 'mat-light-wood',
         label: 'LIGHT WOOD',
         subtitle: 'Herringbone',
         thSubtitle: 'ปาร์เก้ไม้สีอ่อน',
         prompt: 'Material: Light oak wood parquet flooring, herringbone pattern. Finish: Matte, natural grain texture. Atmosphere: Warm, Scandinavian aesthetic.'
       },
       {
         id: 'mat-dark-wood',
         label: 'DARK WOOD',
         subtitle: 'Walnut',
         thSubtitle: 'ไม้แผ่นสีเข้ม',
         prompt: 'Material: Dark walnut wood plank flooring. Finish: Satin sheen, rich deep brown tones. Atmosphere: Elegant, moody, luxury.'
       },
       {
         id: 'mat-white-marble',
         label: 'WHITE MARBLE',
         subtitle: 'Calacatta',
         thSubtitle: 'หินอ่อนขาว',
         prompt: 'Material: Premium Calacatta White Marble flooring. Finish: High-gloss polished, distinctive grey veining. Atmosphere: Opulent, bright, clean.'
       },
       {
         id: 'mat-black-marble',
         label: 'BLACK MARBLE',
         subtitle: 'Nero Marquina',
         thSubtitle: 'หินอ่อนดำ',
         prompt: 'Material: Nero Marquina Black Marble flooring. Finish: Polished, striking white lightning veins against deep black. Atmosphere: Sophisticated, bold, expensive.'
       },
       {
         id: 'mat-polished-concrete',
         label: 'CONCRETE',
         subtitle: 'Industrial',
         thSubtitle: 'ปูนขัดมัน',
         prompt: 'Material: Polished Concrete flooring. Finish: Smooth, semi-gloss industrial grey, slight texture variations. Atmosphere: Modern industrial, loft style.'
       },
       {
         id: 'mat-beige-tiles',
         label: 'BEIGE TILES',
         subtitle: 'Porcelain',
         thSubtitle: 'กระเบื้องเบจ',
         prompt: 'Material: Large format Beige Porcelain Tiles. Finish: Matte stone effect, neutral warm tones. Atmosphere: Minimalist, clean, airy.'
       },
       {
         id: 'mat-grey-slate',
         label: 'GREY SLATE',
         subtitle: 'Natural Stone',
         thSubtitle: 'กระเบื้องหินกาบ',
         prompt: 'Material: Natural Grey Slate Stone tiles. Finish: Textured, cleft surface, matte dark grey. Atmosphere: Contemporary, rustic, earthy.'
       },
       {
         id: 'mat-cream-carpet',
         label: 'CARPET',
         subtitle: 'Plush',
         thSubtitle: 'พรมสีครีม',
         prompt: 'Material: Wall-to-wall Cream Colored Carpet. Finish: Soft plush texture, uniform. Atmosphere: Cozy, warm, residential.'
       },
       {
         id: 'mat-terrazzo',
         label: 'TERRAZZO',
         subtitle: 'Speckled',
         thSubtitle: 'หินขัด',
         prompt: 'Material: Modern Terrazzo flooring. Pattern: White base with colorful stone chips (grey, rust, black). Atmosphere: Trendy, artistic, durable.'
       },
       {
         id: 'mat-herringbone',
         label: 'HERRINGBONE',
         subtitle: 'Classic Oak',
         thSubtitle: 'ไม้ลายก้างปลา',
         prompt: 'Material: Classic Herringbone Wood flooring. Finish: Medium brown oak, precise geometric installation. Atmosphere: Timeless, traditional elegance.'
       }
    ]
  },

  // --- INTERIOR STYLES (Comprehensive Group) ---
  {
     id: 'int-styles-group',
     label: 'Interior Styles',
     subtitle: 'Select by Style',
     thSubtitle: 'สไตล์ตกแต่ง (เลือกตามสไตล์)',
     prompt: '',
     children: [
        {
          id: 'style-modern',
          label: 'MODERN',
          subtitle: 'Clean & Geometric',
          thSubtitle: 'โมเดิร์น',
          prompt: 'Interior Design Style: Modern. Characteristics: Clean lines, geometric shapes, neutral color palette, lack of clutter, functional furniture, open floor plan. Materials: Glass, steel, concrete. Atmosphere: Sleek, simple, and spacious.'
        },
        {
          id: 'style-modern-luxury',
          label: 'LUXURY',
          subtitle: 'Opulent & Refined',
          thSubtitle: 'ลักชัวรี่',
          prompt: 'Interior Design Style: Modern Luxury. Characteristics: Sophisticated elegance, high-end finishes, bespoke furniture. Materials: Italian marble, polished brass, velvet upholstery, dark walnut wood, crystal lighting. Atmosphere: Opulent, refined, and expensive.'
        },
        {
          id: 'style-contemporary',
          label: 'CONTEMPORARY',
          subtitle: 'Fluid & Trendy',
          thSubtitle: 'คอนเทมโพรารี',
          prompt: 'Interior Design Style: Contemporary. Characteristics: Fluid and curved lines, current trends, mixed patterns and textures. Materials: Light wood, mixed metals, soft textiles. Atmosphere: Comfortable, welcoming, and stylish.'
        },
        {
          id: 'style-scandinavian',
          label: 'SCANDINAVIAN',
          subtitle: 'Cozy & Light',
          thSubtitle: 'สแกนดิเนเวียน',
          prompt: 'Interior Design Style: Scandinavian. Characteristics: Functional minimalism, "Hygge" comfort, light and airy. Materials: Pale woods (ash, beech), wool throws, linen, indoor plants. Palette: White, grey, soft pastels. Atmosphere: Cozy, bright, and cheerful.'
        },
        {
          id: 'style-japanese',
          label: 'JAPANESE',
          subtitle: 'Zen & Wabi-Sabi',
          thSubtitle: 'ญี่ปุ่น (เซน)',
          prompt: 'Interior Design Style: Japanese Zen. Characteristics: Minimalism, connection to nature, low-profile furniture. Materials: Natural wood, bamboo, rice paper (Shoji), tatami mats, stone. Palette: Earthy neutrals. Atmosphere: Peaceful, meditative, and balanced.'
        },
        {
          id: 'style-thai',
          label: 'THAI',
          subtitle: 'Traditional Luxury',
          thSubtitle: 'ไทยร่วมสมัย',
          prompt: 'Interior Design Style: Modern Thai Luxury. Characteristics: Blend of traditional Thai craftsmanship with modern comfort. Materials: Teak wood, Thai silk textiles, intricate lattice screens, gold leaf accents. Atmosphere: Warm, cultural, and elegant.'
        },
        {
          id: 'style-chinese',
          label: 'CHINESE',
          subtitle: 'Modern Oriental',
          thSubtitle: 'จีนร่วมสมัย',
          prompt: 'Interior Design Style: Modern Chinese. Characteristics: Symmetry, balance (Feng Shui), clean lines with oriental motifs. Materials: Dark lacquered wood, porcelain, red and gold accents, lantern-style lighting. Atmosphere: Harmonious and sophisticated.'
        },
        {
          id: 'style-moroccan',
          label: 'MOROCCAN',
          subtitle: 'Exotic & Pattern',
          thSubtitle: 'โมร็อกโก',
          prompt: 'Interior Design Style: Moroccan. Characteristics: Intricate tile work (Zellige), horseshoe arches, lanterns. Materials: Plaster, mosaic, colorful textiles. Atmosphere: Exotic, vibrant, and warm.'
        },
        {
          id: 'style-classic',
          label: 'CLASSIC',
          subtitle: 'Timeless Elegance',
          thSubtitle: 'คลาสสิค',
          prompt: 'Interior Design Style: Classic/Traditional. Characteristics: Symmetry, ornate details, rich color palettes. Materials: Dark wood, damask fabrics, antique furniture, oil paintings. Atmosphere: Formal, grand, and timeless.'
        },
        {
          id: 'style-industrial',
          label: 'INDUSTRIAL',
          subtitle: 'Raw & Urban',
          thSubtitle: 'อินดัสเทรียล',
          prompt: 'Interior Design Style: Industrial Loft. Characteristics: Raw and unfinished look, exposed structural elements. Materials: Exposed brick walls, concrete floors, ductwork, black steel, distressed leather. Atmosphere: Edgy, urban, and masculine.'
        },
        {
          id: 'style-minimalist',
          label: 'MINIMALIST',
          subtitle: 'Less is More',
          thSubtitle: 'มินิมอล',
          prompt: 'Interior Design Style: Ultra-Minimalist. Characteristics: Extreme simplicity, "less is more", monochromatic. Materials: Smooth surfaces, hidden storage, lack of decor. Palette: All white or shades of grey. Atmosphere: Serene, airy, and uncluttered.'
        },
        {
          id: 'style-tropical',
          label: 'TROPICAL',
          subtitle: 'Green & Resort',
          thSubtitle: 'ทรอปิคอล',
          prompt: 'Interior Design Style: Tropical Resort. Characteristics: Bringing the outdoors in, lush and relaxed. Materials: Rattan, cane, bamboo, dark tropical woods, large indoor palms. Palette: Greens, earth tones. Atmosphere: Breezy, exotic, and vacation-like.'
        },
        {
          id: 'style-midcentury',
          label: 'MID-CENTURY',
          subtitle: 'Retro 50s',
          thSubtitle: 'มิด-เซนจูรี่',
          prompt: 'Interior Design Style: Mid-Century Modern. Characteristics: Retro 1950s-60s aesthetic, organic curves, tapered legs. Materials: Teak wood, plastic shell chairs, bold geometric fabrics. Palette: Mustard yellow, olive green, orange. Atmosphere: Retro-chic and iconic.'
        },
        {
          id: 'style-bohemian',
          label: 'BOHEMIAN',
          subtitle: 'Eclectic & Artsy',
          thSubtitle: 'โบฮีเมียน',
          prompt: 'Interior Design Style: Bohemian. Characteristics: Eclectic, layered, free-spirited. Materials: Macrame, persian rugs, mismatched vintage furniture, poufs, many plants. Palette: Warm, vibrant, jewel tones. Atmosphere: Cozy, artistic, and relaxed.'
        },
        {
          id: 'style-rustic',
          label: 'RUSTIC',
          subtitle: 'Natural & Raw',
          thSubtitle: 'รัสติก',
          prompt: 'Interior Design Style: Rustic. Characteristics: Natural, rugged beauty, farmhouse charm. Materials: Reclaimed wood beams, rough stone, wrought iron, cotton fabrics. Atmosphere: Warm, unpretentious, and homey.'
        },
        {
          id: 'style-artdeco',
          label: 'ART DECO',
          subtitle: 'Glamour & Geometry',
          thSubtitle: 'อาร์ตเดโค',
          prompt: 'Interior Design Style: Art Deco. Characteristics: Glamour, geometric patterns, symmetry. Materials: Mirror, chrome, lacquer, inlaid wood, velvet. Palette: Black, gold, silver, jewel tones. Atmosphere: Dramatic, glitzy, and vintage luxury.'
        },
        {
          id: 'style-coastal',
          label: 'COASTAL',
          subtitle: 'Breezy & Blue',
          thSubtitle: 'คอสตอล',
          prompt: 'Interior Design Style: Coastal Hamptons. Characteristics: Beachy, breezy, relaxed. Materials: White washed wood, stripes, linen, wicker. Palette: White, blue, sand. Atmosphere: Fresh and airy.'
        },
        {
          id: 'style-zen',
          label: 'ZEN',
          subtitle: 'Peaceful Flow',
          thSubtitle: 'เซน',
          prompt: 'Interior Design Style: Zen Sanctuary. Characteristics: Flow, soft lighting, absence of clutter. Materials: Water features, pebbles, smooth wood, soft fabrics. Atmosphere: Spiritual, quiet, and restorative.'
        }
     ]
  }
];

export const PLAN_PRESETS: Preset[] = [
  {
    id: 'plan-group-quick',
    label: 'Quick Commands',
    subtitle: 'Furnish & Styles',
    thSubtitle: 'คำสั่งด่วน',
    prompt: '',
    children: [
       {
         id: 'plan-furnish',
         label: 'FURNISH PLAN',
         subtitle: 'Add Furniture',
         thSubtitle: 'จัดวางเฟอร์นิเจอร์',
         prompt: 'Architectural Design Task: Furnish this floor plan. Identify room functions (Living, Bed, Bath, Kitchen) and place appropriate modern furniture scaling correctly. Style: 2D Realistic Top-down. Clean layout.'
       },
       {
         id: 'plan-blueprint',
         label: 'BLUEPRINT STYLE',
         subtitle: 'Technical Blue',
         thSubtitle: 'สไตล์พิมพ์เขียว',
         prompt: 'Architectural Blueprint Style. Background: Deep blue. Lines: White technical drawing lines. Look: Classic engineering schematic.'
       },
       {
         id: 'plan-sketch',
         label: 'HAND-DRAWN SKETCH',
         subtitle: 'Pencil Style',
         thSubtitle: 'ภาพสเก็ตช์มือ',
         prompt: 'Architectural Concept Sketch. Style: Freehand graphite pencil drawing on paper. Loose lines, artistic flair, rough shading. "Napkin sketch" aesthetic.'
       },
       {
         id: 'plan-watercolor-landscape',
         label: 'WATERCOLOR LANDSCAPE',
         subtitle: 'Hand-Drawn Masterplan',
         thSubtitle: 'ผังแม่บทสีน้ำ (วาดมือ)',
         prompt: 'A high-detailed, top-down landscape architectural master plan illustration, rendered in a hand-drawn watercolor and colored pencil style on textured paper. The center of the image features a generic, simplified building floor plan footprint. Surrounding this building footprint is an elaborate and lush garden design. Key features include a large swimming pool with a paved deck, distinct patio areas, stone pathways, and various water features. The entire site is densely filled with mature trees, thick shrubbery borders, manicured green lawns, and garden beds. The colors are rich and natural, showing brush strokes and paper texture.'
       },
       {
         id: 'plan-pro-color',
         label: 'PRO COLORED PLAN',
         subtitle: 'Marketing Style',
         thSubtitle: 'แปลนขาย (ลงสี)',
         prompt: 'Professional Real Estate Floor Plan. Top-down 2D view. Style: Clean, colored, and textured. Flooring materials: Light wood parquet in living areas, neutral tiles in wet areas, timber decking on terraces. Furniture: Modern, top-down view with soft drop shadows. Walls: Clean cut lines. Aesthetic: High-end architectural presentation, bright and welcoming.'
       },
       {
         id: 'plan-line-art',
         label: 'LINE ART',
         subtitle: 'Minimal B&W',
         thSubtitle: 'ลายเส้นขาว-ดำ',
         prompt: 'Architectural Line Art style. High contrast black ink lines on pure white paper. No textures, no shadows. Focus on clean geometry, wall thickness, and furniture outlines. Minimalist technical drawing.'
       },
       {
         id: 'plan-pastel-zoning',
         label: 'PASTEL ZONING',
         subtitle: 'Soft Flat Colors',
         thSubtitle: 'โซนนิ่งสีพาสเทล',
         prompt: 'Architectural Zoning Diagram. Style: Flat vector illustration. Soft pastel color palette (mint, blush, pale blue, lemon) to differentiate rooms. Clean white outlines. No realistic textures. Infographic aesthetic.'
       },
       {
         id: 'plan-chalkboard',
         label: 'CHALKBOARD',
         subtitle: 'White on Dark',
         thSubtitle: 'สไตล์กระดานดำ',
         prompt: 'Architectural Chalkboard Drawing. White chalk lines on a rough dark slate grey background. Sketchy line quality. Hand-drawn aesthetic. High contrast.'
       },
       {
         id: 'plan-marker',
         label: 'MARKER RENDER',
         subtitle: 'Vibrant Colors',
         thSubtitle: 'สีปากกาเมจิก',
         prompt: 'Architectural Marker Rendering. Style: Alcohol marker sketch. Bold, vibrant flat colors with visible marker strokes. Distinct black ink outlines. Artistic, energetic presentation style.'
       },
       {
         id: 'plan-neon-blueprint',
         label: 'NEON BLUEPRINT',
         subtitle: 'Electric Blue',
         thSubtitle: 'นีออนบลูพริ้นต์',
         prompt: 'Architectural Blueprint Style. Style: Monochromatic Electric Blue Neon on Dark Concrete. Lighting: Dramatic top-left directional light casting shadows. Lines: Thick solid blue neon for walls, thin neon for furniture. Text: Keep original text perfectly legible. Atmosphere: Cyberpunk, high contrast, technical.'
       }
    ]
  },
  {
    id: 'plan-group-modes',
    label: 'Visualization Modes',
    subtitle: '2D & 3D Render',
    thSubtitle: 'โหมดแปลงภาพ',
    prompt: '',
    children: [
       {
         id: 'plan-2d-bw',
         label: '2D BLACK & WHITE (CAD)',
         subtitle: 'Technical',
         thSubtitle: '2D ขาว-ดำ (CAD)',
         prompt: '2D Floor Plan. Style: Professional Black and White CAD. High contrast, clear walls, defined windows/doors. Minimalist technical presentation.'
       },
       {
         id: 'plan-2d-color',
         label: '2D REALISTIC (COLOR)',
         subtitle: 'Materials',
         thSubtitle: '2D สีสมจริง',
         prompt: '2D Floor Plan. Style: Realistic Materials. Real wood flooring textures, tiled bathrooms, soft shadows under furniture. Bright, clean, professional real estate brochure style.'
       },
       {
         id: 'plan-2d-watercolor',
         label: '2D WATERCOLOR',
         subtitle: 'Artistic',
         thSubtitle: '2D สีน้ำ',
         prompt: '2D Floor Plan. Style: Watercolor Painting. Soft washes of color, artistic texture, hand-painted look. Gentle and inviting atmosphere.'
       },
       {
         id: 'plan-2d-digital',
         label: '2D DIGITAL (PHOTOSHOP)',
         subtitle: 'Graphic',
         thSubtitle: '2D กราฟิก/Photoshop',
         prompt: '2D Floor Plan. Style: Digital Graphic Illustration. Flat colors, clean vector shapes, subtle gradients, soft drop shadows. Modern UI/UX aesthetic plan.'
       },
       {
         id: 'plan-3d-iso',
         label: '3D ISOMETRIC',
         subtitle: 'Section Cut',
         thSubtitle: '3D ไอโซเมตริก',
         prompt: '3D Isometric Floor Plan Render. Walls cut at 1.2m. Lighting: Soft global illumination. Style: Clay render with material accents. Miniature model look.'
       },
       {
         id: 'plan-3d-iso-realistic',
         label: '3D ISOMETRIC (PRO)',
         subtitle: 'Sunlight & Shadows',
         thSubtitle: '3D ไอโซเมตริก (แสงเงาจริง)',
         prompt: 'Professional 3D Isometric Floor Plan Render. Cutaway view with walls cut at 1.5m. Lighting: Strong directional sunlight casting distinct, realistic shadows across the floor from window openings. Soft ambient global illumination. Materials: High-quality PBR textures, light wood flooring, modern furniture with fabric textures, marble kitchen countertops. Style: Photorealistic architectural visualization, clean, neutral color palette, high detail, 8k.'
       },
       {
         id: 'plan-3d-iso-exploded-bw',
         label: 'ISOMETRIC EXPLODED',
         subtitle: 'Black & White',
         thSubtitle: '3D ระเบิด (ขาว-ดำ)',
         prompt: '3D Isometric Exploded View. Style: Monochrome Black and White. Elements: Base is a solid dark block. 2D White floor plan lines hover above as a ghost overlay. Lighting: High contrast, dramatic shadows. Aesthetic: Diagrammatic, technical, professional architectural presentation.'
       },
       {
         id: 'plan-3d-iso-outline-pro',
         label: '3D ISO OUTLINE (PRO)',
         subtitle: 'Lines & Colors',
         thSubtitle: '3D เส้นขอบ (ตามรูป)',
         prompt: 'High-Fidelity 3D Isometric Architectural Cutaway. Style: Technical Diagram with Graphic Outlines. Viewpoint: Orthographic Isometric (30-degree angle). Visual Language: 1. **Outlines**: Apply distinct, sharp black lines to all edges and contours to enhance readability (Edge Rendering). 2. **Lighting**: Soft, even Global Illumination with distinct, directional cast shadows to emphasize depth. 3. **Materials**: Matte, non-reflective surfaces. Use the Color Palette from the input image (Reference). 4. **Section Cut**: Walls cut at 1.5m height, with cut surfaces filled in solid dark grey or black (Poché). 5. **Detail**: High level of detail in furniture and fixtures, but stylized (clean geometry). Aesthetic: Professional architectural presentation, competition board style, clarity and precision. 8k resolution.'
       },
       {
         id: 'plan-iso-ghost',
         label: 'ISO GHOST (X-RAY)',
         subtitle: 'Translucent Walls',
         thSubtitle: '3D ผนังโปร่งแสง (Ghost)',
         prompt: 'Professional 3D Isometric Render. Style: "Ghost Mode" or X-Ray Architecture. Feature: All exterior and partition walls are rendered as semi-transparent translucent white glass (50% opacity) to reveal the interior details behind them. Edges: Bold black outlines (Cel-shaded/Ink) on all structural elements. Interior Furniture: Solid, full color, photorealistic high-detail textures. Lighting: Soft global illumination. Aesthetic: Clean, diagrammatic, architectural presentation.'
       },
       {
         id: 'plan-iso-glass',
         label: 'ISO GLASS (CLEAR)',
         subtitle: 'Crystal Walls',
         thSubtitle: '3D ผนังกระจกใส',
         prompt: '3D Isometric X-Ray Render. Style: Technical Glass Section. Feature: Walls are 100% transparent clear glass defined only by sharp black structural framing/outlines. Interior: Fully rendered in high-quality materials (wood, fabric, stone). Effect: Seeing through the walls to understand the spatial layout. High contrast, white background.'
       },
       {
         id: 'plan-iso-wireframe',
         label: 'ISO WIREFRAME',
         subtitle: 'Structure Only',
         thSubtitle: '3D โครงสร้างเส้น (Wireframe)',
         prompt: 'Stylized Isometric Illustration. Style: Wireframe Hybrid. Feature: Walls are represented as Wireframe meshes (Black lines only, no fill) allowing full visibility of the interior. Floor slabs: Solid opaque textures. Furniture: Realistic rendering. Combination of technical line drawing for structure and realistic rendering for contents. 8k resolution.'
       },
       {
         id: 'plan-dark-luxury-wireframe',
         label: 'DARK LUXURY WIREFRAME',
         subtitle: 'Dark Mode Plan',
         thSubtitle: 'แปลน Dark Mode (Wireframe)',
         prompt: 'A premium architectural floor plan visualization in a sophisticated "Dark Mode" aesthetic. Visual Style: Background: Solid, matte dark navy blue or deep slate grey surface. Accent Color: All architectural elements are rendered in a monochrome golden-beige or light wood tone. Line Work: Walls: Depicted as 3D extruded lines (raised slightly from the background) with visible thickness, casting soft ambient shadows. Furniture: Rendered as ultra-fine, precise wireframe line art (thin pen weight). Lighting: Soft, top-down lighting creates gentle drop shadows around the walls. Typography: Minimalist, uppercase sans-serif text labels. Aesthetic: High-end, technical, schematic wireframe style.'
       },
       {
         id: 'plan-3d-top',
         label: '3D TOP-DOWN',
         subtitle: 'Perspective',
         thSubtitle: '3D มุมท็อป',
         prompt: '3D Top-Down Perspective Floor Plan. Camera: High angle looking down. Lighting: Sun shadows entering windows. Realistic 3D models of furniture and textures.'
       },
        {
         id: 'plan-perspective',
         label: 'PERSPECTIVE VIEW (ROOM)',
         subtitle: 'Eye Level',
         thSubtitle: 'ทัศนียภาพ (มุมคนมอง)',
         prompt: 'Interior Perspective View. Convert this floor plan layout into an eye-level 3D interior render of the main open space. Style: Photorealistic, modern interior design, natural lighting.'
       }
    ]
  },
  {
    id: 'plan-materials-group',
    label: 'Plan Materials',
    subtitle: 'Top-down Textures',
    thSubtitle: 'วัสดุแปลน (Plan Textures)',
    prompt: '',
    children: [
       {
         id: 'plan-mat-light-wood',
         label: 'LIGHT WOOD',
         subtitle: 'Oak Top-down',
         thSubtitle: 'ไม้สีอ่อน (มุมท็อป)',
         prompt: 'Texture: Top-down view of light oak wood flooring. Seamless, clean lines, bright and natural. Architectural plan style.'
       },
       {
         id: 'plan-mat-dark-wood',
         label: 'DARK WOOD',
         subtitle: 'Walnut Top-down',
         thSubtitle: 'ไม้สีเข้ม (มุมท็อป)',
         prompt: 'Texture: Top-down view of dark walnut wood flooring. Rich brown tones, seamless plank pattern. Luxury plan style.'
       },
        {
         id: 'plan-mat-herringbone',
         label: 'HERRINGBONE',
         subtitle: 'Pattern Top-down',
         thSubtitle: 'ลายก้างปลา (มุมท็อป)',
         prompt: 'Texture: Top-down view of herringbone wood flooring. Intricate geometric pattern, light wood tone. High-detail plan texture.'
       },
       {
         id: 'plan-mat-white-marble',
         label: 'WHITE MARBLE',
         subtitle: 'Carrara Top-down',
         thSubtitle: 'หินอ่อนขาว (มุมท็อป)',
         prompt: 'Texture: Top-down view of white Carrara marble. Subtle grey veining, pure white base. Elegant stone floor plan.'
       },
       {
         id: 'plan-mat-concrete',
         label: 'CONCRETE',
         subtitle: 'Polished Top-down',
         thSubtitle: 'คอนกรีต (มุมท็อป)',
         prompt: 'Texture: Top-down view of polished concrete flooring. Smooth grey surface, industrial aesthetic. Seamless texture.'
       },
        {
         id: 'plan-mat-grey-tile',
         label: 'GREY TILES',
         subtitle: 'Matte Top-down',
         thSubtitle: 'กระเบื้องเทา (มุมท็อป)',
         prompt: 'Texture: Top-down view of large grey matte tiles. Clean grid lines, neutral stone look. Bathroom/Kitchen plan style.'
       },
       {
         id: 'plan-mat-terrazzo',
         label: 'TERRAZZO',
         subtitle: 'Speckled Top-down',
         thSubtitle: 'หินขัด (มุมท็อป)',
         prompt: 'Texture: Top-down view of terrazzo flooring. White base with colorful aggregate speckles. Modern artistic plan texture.'
       },
       {
         id: 'plan-mat-deck',
         label: 'WOOD DECK',
         subtitle: 'Outdoor Planks',
         thSubtitle: 'ระเบียงไม้ภายนอก',
         prompt: 'Texture: Top-down view of outdoor wooden decking. Weathered timber planks, linear pattern with gaps. Garden plan style.'
       },
       {
         id: 'plan-mat-grass',
         label: 'GRASS LAWN',
         subtitle: 'Green Landscape',
         thSubtitle: 'สนามหญ้า',
         prompt: 'Texture: Top-down view of perfect green grass lawn. Uniform vibrant green, soft texture. Landscape architecture plan.'
       },
       {
         id: 'plan-mat-water',
         label: 'POOL WATER',
         subtitle: 'Blue Ripple',
         thSubtitle: 'น้ำสระว่ายน้ำ',
         prompt: 'Texture: Top-down view of swimming pool water. Crystal clear blue, slight ripple effect, caustic reflections. Pool plan style.'
       }
    ]
  },
  {
    id: 'plan-group-pro-styles',
    label: 'Professional Styles',
    subtitle: 'High-End Specific',
    thSubtitle: 'สไตล์มืออาชีพ (สไตล์เฉพาะ)',
    prompt: '',
    children: [
       {
         id: 'plan-pro-landscape',
         label: 'LANDSCAPE MASTERPLAN',
         subtitle: 'Lush Greenery',
         thSubtitle: 'ผังแม่บทภูมิทัศน์ (สีเขียวชอุ่ม)',
         prompt: 'Professional Architectural Landscape Masterplan. Top-down view. Features meticulously detailed lush landscaping: vibrant green manicured lawns, mature oak trees casting soft realistic shadows, stone paved pathways, and distinct outdoor zones. Textures: High-res grass, paving stones, water features. 8k resolution, photorealistic site plan presentation.'
       },
       {
         id: 'plan-pro-garden-site',
         label: 'GARDEN SITE PLAN',
         subtitle: 'Top-down Landscape',
         thSubtitle: 'ผังบริเวณสวน (Site Plan)',
         prompt: 'A photorealistic, top-down architectural landscape rendering (site plan view) of a private residence garden design. The Landscape (Softscape): A large, open rectangular manicured lawn dominates the right side of the property. The entire perimeter is densely planted with a rich variety of trees and shrubs in varying shades of green, creating a lush, natural privacy buffer. Texture is key, with a mix of leafy canopy trees and lower bushes. The Hardscape (Patios & Paths): Adjacent to the house is a spacious, multi-level outdoor terrace paved with light grey rectangular stone tiles. A path of square stepping stones leads playfully from the main patio into the dense greenery on the side. Outdoor Living: The terrace is furnished with modern outdoor furniture sets, including a comfortable L-shaped lounge area with a coffee table and a separate outdoor dining set, illustrating a functional living space. The Structures (Variable Architecture): Main House: Located at the top left, featuring a dark-colored roof (hip or gable style) that contrasts with the landscape. (Note to AI: The building style is flexible). Annex: To the right of the main house is a smaller structure with a modern glass roof with a grid pattern (suggesting a conservatory, greenhouse, or solar room). Lighting & Style: Bright, even daylight with soft shadows indicating a sunny afternoon. The style is clean, high-quality 3D architectural visualization.'
       },
       {
         id: 'plan-pro-chinese',
         label: 'CHINESE COURTYARD',
         subtitle: 'Traditional Siheyuan',
         thSubtitle: 'แปลนบ้านจีนโบราณ (Siheyuan)',
         prompt: 'Traditional Chinese Courtyard House Masterplan (Siheyuan). Top-down orthographic view. Features symmetrical layout, grey tiled roofs with curved eaves, central courtyard with stone paving and small pond. Lush bamboo gardens surrounding the perimeter. High-resolution architectural rendering with cultural fidelity.'
       },
       {
         id: 'plan-pro-japanese',
         label: 'JAPANESE ZEN GARDEN',
         subtitle: 'Rocks & Sand',
         thSubtitle: 'แปลนสวนเซนญี่ปุ่น',
         prompt: 'Exquisite Japanese Zen Garden Landscape Plan. Top-down view. Features raked white sand (Karesansui) in wave patterns, large dark natural stones arranged artistically, patches of vibrant moss, and stepping stones. Wooden walkway (Engawa) visible. Soft, serene lighting, photorealistic textures.'
       },
       {
         id: 'plan-pro-modern-interior',
         label: 'MODERN INTERIOR LAYOUT',
         subtitle: 'Furnished Flat',
         thSubtitle: 'แปลนห้องชุดโมเดิร์น (พร้อมเฟอร์ฯ)',
         prompt: 'Modern 2D Floor Plan with High-End Furniture. Professional interior design presentation. Top-down view. Distinct room zones: Living room with L-shaped beige sofa, kitchen with marble island, bedroom with king bed and textured rugs. Flooring: Light oak wood. Soft drop shadows for depth. Clean, architectural style, commercial brochure quality.'
       },
       {
         id: 'plan-pro-watercolor-site',
         label: 'WATERCOLOR SITE PLAN',
         subtitle: 'Artistic Presentation',
         thSubtitle: 'ผังบริเวณ (สีน้ำ)',
         prompt: 'Artistic Watercolor Landscape Site Plan. Top-down view. Hand-painted aesthetic with translucent watercolor textures. Soft green washes for grass, loose blue strokes for water features, ink line overlays for structures. Elegant, presentation-quality architectural illustration.'
       }
    ]
  }
];
