
import React from 'react';
import ImageUploader from './components/ImageUploader';
import GeneratedImage from './components/GeneratedImage';
import { AppStatus, UploadedImage, GenerationResult, Preset } from './types';
import { generateImageFromReference, enhancePrompt as enhancePromptService, analyzePlanGeometry } from './services/geminiService';
import { Wand2, Sparkles, Zap, Cpu, Settings2, ImagePlus, Globe, Key, Brush, Undo, Redo, RefreshCw, PenTool, Image as ImageIcon, Loader2, RotateCcw, ChevronDown, ChevronRight, AlertTriangle, Palette, LogIn, ExternalLink, X, LogOut } from 'lucide-react';
import { TRANSLATIONS, EXTERIOR_PRESETS, INTERIOR_PRESETS, PLAN_PRESETS } from './constants';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

// --- TYPE DECLARATIONS ---
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY?: string;
    }
  }
}

// Helper to safely get API key from environment without crashing
const getEnvApiKey = (): string | undefined => {
  try {
    return process.env.API_KEY;
  } catch (e) {
    return undefined;
  }
};

const MainApp: React.FC = () => {
  // --- APP STATE ---
  const [status, setStatus] = React.useState<AppStatus>(AppStatus.IDLE);
  const [selectedImage, setSelectedImage] = React.useState<UploadedImage | null>(null);
  const [styleImage, setStyleImage] = React.useState<UploadedImage | null>(null);
  const [result, setResult] = React.useState<GenerationResult | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [tab, setTab] = React.useState<'EXTERIOR' | 'INTERIOR' | 'PLAN'>('EXTERIOR');
  const [prompt, setPrompt] = React.useState('');
  const [selectedPresetId, setSelectedPresetId] = React.useState<string | null>(null);
  const [isEnhancing, setIsEnhancing] = React.useState(false);
  const [additionalPrompt, setAdditionalPrompt] = React.useState('');
  const [expandedGroupId, setExpandedGroupId] = React.useState<string | null>(null);
  
  // Initialize from localStorage
  const [manualApiKey, setManualApiKey] = React.useState(() => localStorage.getItem('gemini_api_key') || '');
  const [showApiKeyInput, setShowApiKeyInput] = React.useState(false);
  
  // Google AI Studio Integration State
  const [isAistudioAvailable, setIsAistudioAvailable] = React.useState(false);
  const [isGoogleConnected, setIsGoogleConnected] = React.useState(false);

  const [model, setModel] = React.useState('gemini-2.5-flash-image'); 
  const [tier, setTier] = React.useState<'FREE' | 'PRO'>('FREE');
  const [language, setLanguage] = React.useState<'EN' | 'TH'>('TH');
  const [activePresets, setActivePresets] = React.useState<Preset[]>(EXTERIOR_PRESETS);
  
  const [artStyle, setArtStyle] = React.useState<string>('stylePhoto');
  const [isStyleExpanded, setIsStyleExpanded] = React.useState(false);
  
  const [isMaskMode, setIsMaskMode] = React.useState(false);
  const [maskData, setMaskData] = React.useState<string | null>(null);
  const [brushSize, setBrushSize] = React.useState(20);
  const [brushColor, setBrushColor] = React.useState('#ef4444');
  const [triggerUndo, setTriggerUndo] = React.useState(0);

  const [resetKey, setResetKey] = React.useState(0);
  const [resultHistory, setResultHistory] = React.useState<GenerationResult[]>([]);
  const [redoStack, setRedoStack] = React.useState<GenerationResult[]>([]);

  // Settings UI State
  const [showSettingsPanel, setShowSettingsPanel] = React.useState(false);

  const { logout, userProfile } = useAuth();

  // Check for AI Studio environment on mount
  React.useEffect(() => {
    const checkAiStudio = async () => {
        if (window.aistudio) {
            setIsAistudioAvailable(true);
            try {
                const hasKey = await window.aistudio.hasSelectedApiKey();
                setIsGoogleConnected(hasKey);
            } catch (e) {
                console.error("Failed to check API key status", e);
            }
        }
    };
    checkAiStudio();
  }, []);

  // Update presets when tab changes
  React.useEffect(() => {
    setSelectedPresetId(null);
    setExpandedGroupId(null);
    if (tab === 'EXTERIOR') setActivePresets(EXTERIOR_PRESETS);
    else if (tab === 'INTERIOR') setActivePresets(INTERIOR_PRESETS);
    else if (tab === 'PLAN') {
      setActivePresets(PLAN_PRESETS);
      setExpandedGroupId('plan-group-quick');
    }
  }, [tab]);

  // Sync Tier with Model
  React.useEffect(() => {
     if (tier === 'FREE') {
        setModel('gemini-2.5-flash-image');
     } else {
        // Default to optimized pro when switching to Pro
        setModel('gemini-3-pro-optimized'); 
     }
  }, [tier]);

  const t = TRANSLATIONS[language];
  const envKey = getEnvApiKey();
  // Connection is valid if we have a manual key OR we are connected via Google AI Studio (which injects envKey) OR envKey is present from build
  const isProUnlocked = !!manualApiKey || isGoogleConnected || !!envKey;

  // --- HELPER TO FIND PRESET PROMPT ---
  const findPresetPrompt = (presets: Preset[], id: string): string | null => {
    for (const p of presets) {
        if (p.id === id) return p.prompt;
        if (p.children) {
            const found = findPresetPrompt(p.children, id);
            if (found) return found;
        }
    }
    return null;
  };

  // --- HANDLERS ---
  
  const handleConnectGoogle = async () => {
      if (window.aistudio) {
          try {
              await window.aistudio.openSelectKey();
              // Re-check after dialog closes
              const hasKey = await window.aistudio.hasSelectedApiKey();
              setIsGoogleConnected(hasKey);
              if (hasKey) {
                  // Slight delay to allow env var propagation if needed, though usually instant in this context
                  setStatus(AppStatus.IDLE); 
              }
          } catch (e) {
              console.error("Failed to open key selector", e);
          }
      }
  };

  const handleSaveApiKey = () => {
    if (manualApiKey) {
        localStorage.setItem('gemini_api_key', manualApiKey);
    } else {
        localStorage.removeItem('gemini_api_key');
    }
    alert(t.keySaved);
    setShowApiKeyInput(false); 
  };

  const handleEnhancePrompt = async () => {
    // If prompt is empty but preset selected, use preset prompt
    let textToEnhance = prompt.trim();
    if (!textToEnhance && selectedPresetId) {
        const presetPrompt = findPresetPrompt(activePresets, selectedPresetId);
        if (presetPrompt) textToEnhance = presetPrompt;
    }

    if (!textToEnhance) return alert(t.enterPrompt);
    const keyToUse = manualApiKey || envKey;

    if (!keyToUse && !window.aistudio) {
        return alert(t.enterKey);
    }
    
    // If we rely on window.aistudio but no key selected yet
    if (!keyToUse && window.aistudio && !isGoogleConnected) {
        await handleConnectGoogle();
        // If still not connected after trying
        if (!(await window.aistudio.hasSelectedApiKey())) return;
    }

    setIsEnhancing(true);
    try {
        const enhanced = await enhancePromptService(textToEnhance, keyToUse);
        setPrompt(enhanced);
    } catch (e) { console.error(e); } finally { setIsEnhancing(false); }
  };

  const handlePresetClick = (preset: Preset) => {
      if (preset.children) {
          setExpandedGroupId(expandedGroupId === preset.id ? null : preset.id);
      } else {
          if (selectedPresetId === preset.id) {
             setSelectedPresetId(null);
          } else {
             setSelectedPresetId(preset.id);
             // Note: We deliberately DO NOT setPrompt(preset.prompt) here to keep UI clean
          }
      }
  };

  const handleGenerate = async () => {
    setStatus(AppStatus.LOADING);
    setError(null);

    let keyToUse = manualApiKey || envKey;
    
    // Auto-connect flow if no key is present
    if (!keyToUse) {
        if (window.aistudio) {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            if (!hasKey) {
                 try { 
                     await window.aistudio.openSelectKey(); 
                     // Check again
                     const nowHasKey = await window.aistudio.hasSelectedApiKey();
                     if (nowHasKey) {
                         setIsGoogleConnected(true);
                         // Key should now be available in process.env.API_KEY for the next call
                     } else {
                         setStatus(AppStatus.IDLE);
                         return; // User cancelled
                     }
                 } catch (e) {
                     console.error(e);
                     setStatus(AppStatus.IDLE);
                     return;
                 }
            } else {
                setIsGoogleConnected(true);
            }
        } else {
             // For FREE tier, we might allow basic generation if we had a backend proxy, 
             // but here we strictly require a key for Client-Side API calls.
             // However, if the user explicitly selected FREE tier, maybe we prompt them less aggressively?
             // For now, assume key is needed for all Gemini calls from browser.
             alert(t.enterKey);
             setStatus(AppStatus.IDLE);
             return;
        }
    }
    
    let sourceImageToUse: UploadedImage | null = selectedImage;
    if (result?.imageUrl && (additionalPrompt.trim() || maskData)) {
       sourceImageToUse = { base64: result.imageUrl, mimeType: 'image/png' };
    }

    if (!sourceImageToUse) {
        alert("Please upload an image first.");
        setStatus(AppStatus.IDLE);
        return;
    }

    let planContext = "";
    if (tab === 'PLAN' && !result && !maskData) {
        try {
            planContext = await analyzePlanGeometry(sourceImageToUse.base64, sourceImageToUse.mimeType, keyToUse);
        } catch (e) {
            console.warn("Plan analysis skipped", e);
        }
    }
    
    let finalPrompt = "";
    if (planContext) {
        finalPrompt += `[CONTEXT: ${planContext}] `;
    }

    // Determine effective user prompt
    let effectiveUserPrompt = prompt.trim();
    
    // If no custom prompt is typed, try to get from selected preset
    if (!effectiveUserPrompt && selectedPresetId) {
        const presetPrompt = findPresetPrompt(activePresets, selectedPresetId);
        if (presetPrompt) {
            effectiveUserPrompt = presetPrompt;
        }
    }

    if (effectiveUserPrompt) {
        if (finalPrompt) finalPrompt += " ";
        finalPrompt += effectiveUserPrompt;
    }

    if (additionalPrompt.trim()) {
      finalPrompt += ` \nRefinement Note: ${additionalPrompt}`;
    }
    
    let stylePrompt = "";
    switch (artStyle) {
          case 'styleOil': stylePrompt = "Style: Oil Painting on Canvas, textured brushwork, artistic masterpiece."; break;
          case 'stylePencil': stylePrompt = "Style: Graphite Pencil Sketch on paper, monochrome, hand-drawn, hatching details."; break;
          case 'styleMarker': stylePrompt = "Style: Architectural Marker Rendering, alcohol marker style, vibrant colors, hand-drawn."; break;
          case 'styleColorPencil': stylePrompt = "Style: Colored Pencil Drawing, soft shading, artistic hand-drawn texture."; break;
          case 'styleAnime': stylePrompt = "Style: Anime Art, vibrant colors, detailed background, Makoto Shinkai style, high resolution."; break;
          case 'stylePhoto': default: stylePrompt = ""; break;
    }
    if (stylePrompt) {
        finalPrompt += ` \n${stylePrompt}`;
    }

    if (!finalPrompt.trim()) {
        alert(t.enterPrompt);
        setStatus(AppStatus.IDLE);
        return;
    }
    
    let selectedModel = model;
    let targetResolution: '1K' | '2K' | '4K' = '1K';
    
    // We consider Google Connected as "Pro" or "Valid Key" owner
    const hasValidKey = !!manualApiKey || isGoogleConnected || !!envKey;
    
    // Enforce Tier Logic
    if (tier === 'FREE') {
        selectedModel = 'gemini-2.5-flash-image';
        targetResolution = '1K';
    } else {
        // PRO TIER
        if (!hasValidKey) {
            // Fallback if they selected Pro but have no key
             if (selectedModel === 'gemini-3-pro-image-preview' || selectedModel === 'gemini-3-pro-ultra-4k') {
                 selectedModel = 'gemini-2.5-flash-image'; 
                 targetResolution = '1K';
            }
        }
    
        if (selectedModel === 'gemini-3-pro-ultra-4k') {
            selectedModel = 'gemini-3-pro-image-preview';
            targetResolution = '4K';
        } else if (selectedModel === 'gemini-3-pro-image-preview') {
             targetResolution = '2K';
        } else if (selectedModel === 'gemini-3-pro-optimized') {
            selectedModel = 'gemini-2.5-flash-image';
            targetResolution = '1K';
        }
    }

    try {
      const genResult = await generateImageFromReference(
        sourceImageToUse.base64,
        sourceImageToUse.mimeType,
        finalPrompt,
        selectedModel,
        styleImage,
        maskData,
        keyToUse,
        targetResolution
      );
      
      // Update History Logic: Store result, clear Redo stack on new generation
      if (result) {
          setResultHistory(prev => [...prev, result]);
          setRedoStack([]); // Clear redo stack because we branched off
      }
      
      setResult(genResult);
      setStatus(AppStatus.SUCCESS);
      setIsMaskMode(false);
      setMaskData(null);
    } catch (e: any) {
      console.error(e);
      setError(e.message || t.unexpectedError);
      setStatus(AppStatus.ERROR);
      if (e.message && (e.message.includes('403') || e.message.includes('Permission'))) {
         if (window.aistudio && !manualApiKey) {
            if (confirm("Permission Denied. Select new Key?")) {
                handleConnectGoogle();
            }
         }
      }
    }
  };

  const handleNewProject = () => {
    setResetKey(p => p + 1);
    setPrompt('');
    setSelectedPresetId(null);
    setExpandedGroupId(null);
    setAdditionalPrompt('');
    setResult(null);
    setStatus(AppStatus.IDLE);
    setError(null);
    setIsMaskMode(false);
    setMaskData(null);
    setStyleImage(null);
    setSelectedImage(null);
    setIsEnhancing(false);
    setTab('EXTERIOR');
    setBrushSize(20);
    setTriggerUndo(0);
    setResultHistory([]);
    setRedoStack([]);
    setArtStyle('stylePhoto');
  };

  const handleResetResult = () => {
     setResult(null);
     setStatus(AppStatus.IDLE);
     setError(null);
     setIsMaskMode(false);
     setMaskData(null);
  }
  
  const handleUndoResult = () => {
      if (resultHistory.length > 0) {
          const previous = resultHistory[resultHistory.length - 1];
          const newHistory = resultHistory.slice(0, -1);
          
          if (result) {
             setRedoStack(prev => [result, ...prev]);
          }
          
          setResult(previous);
          setResultHistory(newHistory);
      }
  };

  const handleRedoResult = () => {
      if (redoStack.length > 0) {
          const next = redoStack[0];
          const newRedo = redoStack.slice(1);
          
          if (result) {
              setResultHistory(prev => [...prev, result]);
          }
          
          setResult(next);
          setRedoStack(newRedo);
      }
  };

  const getPromptPlaceholder = () => {
    return t.promptPlaceholder;
  };

  const isProModelSelected = model.includes('gemini-3-pro') && !model.includes('optimized');

  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-300 font-roboto overflow-hidden">

      <aside className="w-[340px] flex-shrink-0 flex flex-col border-r border-white/10 bg-[#0c1421] z-20 shadow-2xl h-full">
        <div className="p-5 border-b border-white/10 flex-shrink-0 bg-[#0c1421]/95 backdrop-blur z-10 flex flex-col gap-4">
          
          {/* HEADER & TIER SELECTOR */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3">
               <div className="bg-gradient-to-tr from-blue-500 to-cyan-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
                 <Sparkles className="w-5 h-5 text-white" />
               </div>
               <div>
                 <h1 className="text-2xl font-bold text-white tracking-tight leading-none flex items-baseline gap-1">
                   RENDER AI <span className="text-[10px] font-normal text-cyan-400/80">v2.2 Pro</span>
                 </h1>
               </div>
             </div>

             {/* TIER TOGGLE BUTTONS */}
             <div className="flex bg-zinc-950/50 p-1 rounded-lg border border-white/5">
                 <button 
                   onClick={() => setTier('FREE')}
                   className={`flex-1 py-1.5 text-[10px] font-bold rounded-md transition-all flex items-center justify-center gap-1.5 ${tier === 'FREE' ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                 >
                    <Zap size={10} className={tier === 'FREE' ? 'text-yellow-400' : ''} /> Standard (Free)
                 </button>
                 <button 
                   onClick={() => setTier('PRO')}
                   className={`flex-1 py-1.5 text-[10px] font-bold rounded-md transition-all flex items-center justify-center gap-1.5 ${tier === 'PRO' ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
                 >
                    <Sparkles size={10} className={tier === 'PRO' ? 'text-blue-200' : ''} /> Pro (2K)
                 </button>
             </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          <div className="flex p-1 bg-black/20 rounded-lg border border-white/5">
            {['EXTERIOR', 'INTERIOR', 'PLAN'].map((tabName) => (
              <button key={tabName} onClick={() => setTab(tabName as any)} className={`flex-1 py-2 text-[10px] font-bold rounded-md transition-all ${tab === tabName ? 'bg-blue-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'}`}>
                {t[tabName.toLowerCase() as keyof typeof t] || tabName}
              </button>
            ))}
          </div>

           <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-zinc-400 flex items-center gap-2"><PenTool size={12} /> {t.promptLabel}</label>
              <button onClick={handleEnhancePrompt} disabled={isEnhancing || (!prompt.trim() && !selectedPresetId)} className="flex items-center gap-1 text-[10px] bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 px-2 py-1 rounded transition-colors disabled:opacity-50">
                {isEnhancing ? <Loader2 size={10} className="animate-spin" /> : <Wand2 size={10} />}
                {isEnhancing ? t.enhancing : t.enhanceButton}
              </button>
            </div>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder={getPromptPlaceholder()} className={`w-full h-20 bg-black/20 border rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-600 focus:ring-1 focus:ring-cyan-500 outline-none resize-none transition-colors ${isMaskMode || maskData ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/10'}`} />
          </div>

           <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 flex items-center gap-2"><Sparkles size={12} /> {t.refineLabel}</label>
            <textarea value={additionalPrompt} onChange={(e) => setAdditionalPrompt(e.target.value)} placeholder={t.refinePlaceholder} className="w-full h-16 bg-black/20 border border-white/10 rounded-lg p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:ring-1 focus:ring-cyan-500 outline-none resize-none" />
          </div>

          <div className="space-y-2">
             <label className="text-xs font-bold text-zinc-400 flex items-center gap-2"><ImageIcon size={12} /> {t.styleReference} <span className="text-zinc-600 text-[10px] ml-auto">{t.optional}</span></label>
             <ImageUploader key={`style-${resetKey}`} onImageSelect={setStyleImage} selectedImage={styleImage} compact />
          </div>

          <div className="bg-black/20 border border-white/10 rounded-lg p-3 space-y-3">
             <div className="flex items-center justify-between cursor-pointer group" onClick={() => setIsStyleExpanded(!isStyleExpanded)}>
                <label className="text-xs font-bold text-zinc-400 flex items-center gap-2 cursor-pointer group-hover:text-white transition-colors"><Palette size={12} /> {t.imageStyle}</label>
                <ChevronDown size={14} className={`text-zinc-500 transition-transform duration-300 ${isStyleExpanded ? 'rotate-180' : ''}`} />
             </div>
             {isStyleExpanded && (
               <div className="grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 pt-1">
                  {[
                      { id: 'stylePhoto', icon: <ImageIcon size={12}/> },
                      { id: 'styleAnime', icon: <Sparkles size={12}/> },
                      { id: 'styleOil', icon: <Brush size={12}/> },
                      { id: 'stylePencil', icon: <PenTool size={12}/> },
                      { id: 'styleMarker', icon: <PenTool size={12}/> },
                      { id: 'styleColorPencil', icon: <PenTool size={12}/> }
                  ].map((style) => (
                      <button key={style.id} onClick={() => setArtStyle(style.id)} className={`flex items-center justify-center gap-2 py-2 px-2 rounded-lg text-[10px] font-bold transition-all border ${artStyle === style.id ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-zinc-800 border-white/5 text-zinc-400 hover:bg-zinc-700 hover:text-white'} ${style.id === 'stylePhoto' ? 'col-span-2' : ''}`}>
                         {style.icon} {t[style.id as keyof typeof t]}
                      </button>
                  ))}
               </div>
             )}
          </div>

          <div className="space-y-2">
             <label className="text-xs font-bold text-zinc-400 flex items-center gap-2"><Zap size={12} /> {t.quickPrompts}</label>
             <div className="flex flex-col space-y-2">
                {activePresets.map((preset) => {
                  const isGrid = preset.id === 'int-materials-group' || preset.id === 'int-styles-group' || preset.id === 'plan-group-modes' || preset.id === 'plan-group-quick' || preset.id === 'plan-group-pro-styles' || preset.id === 'plan-materials-group';
                  return (
                  <div key={preset.id} className="flex flex-col">
                      <button onClick={() => handlePresetClick(preset)} className={`group relative w-full h-10 rounded-lg overflow-hidden transition-all duration-300 flex items-center text-left px-3 border ${selectedPresetId === preset.id || expandedGroupId === preset.id ? 'bg-blue-500/20 border-blue-500/50 ring-1 ring-blue-500/50' : 'bg-black/20 hover:bg-black/40 border-white/5 hover:border-blue-500/30'}`}>
                        <div className="flex items-center justify-between w-full gap-2">
                           <span className={`text-xs font-bold truncate ${selectedPresetId === preset.id || expandedGroupId === preset.id ? 'text-blue-300' : 'text-zinc-300 group-hover:text-white'}`}>{preset.label}</span>
                           <div className="flex items-center gap-2 min-w-0 shrink-0">
                               <span className={`text-[10px] font-medium truncate text-right ${selectedPresetId === preset.id || expandedGroupId === preset.id ? 'text-blue-400/70' : 'text-zinc-500 group-hover:text-blue-400'}`}>{language === 'TH' ? preset.thSubtitle : preset.subtitle}</span>
                               {preset.children && (<span className={`opacity-70 ${selectedPresetId === preset.id || expandedGroupId === preset.id ? 'text-blue-300' : 'text-zinc-400'}`}>{expandedGroupId === preset.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</span>)}
                           </div>
                        </div>
                        {selectedPresetId === preset.id && !preset.children && (<div className="absolute right-2 top-1/2 -translate-y-1/2"><div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div></div>)}
                      </button>
                      {preset.children && expandedGroupId === preset.id && (
                          <div className={`mt-2 ${isGrid ? 'grid grid-cols-2 gap-2 p-1' : 'ml-2 space-y-2 pl-2 border-l border-white/10'}`}>
                             {preset.children.map(child => (
                                 <button key={child.id} onClick={() => { if (selectedPresetId === child.id) { setSelectedPresetId(null); } else { setSelectedPresetId(child.id); } }} className={`group relative w-full rounded-lg overflow-hidden transition-all duration-300 flex items-center text-left border ${selectedPresetId === child.id ? 'bg-blue-500/10 border-blue-500/50' : 'bg-black/10 hover:bg-black/30 border-white/5 hover:border-blue-500/30'} ${isGrid ? 'justify-center py-2 h-auto flex-col gap-0.5' : 'h-9 px-3'}`}>
                                    {isGrid ? (
                                        <div className={`flex flex-col w-full items-center text-center`}><span className={`font-bold truncate text-[10px] ${selectedPresetId === child.id ? 'text-blue-300' : 'text-zinc-400 group-hover:text-white'}`}>{child.label}</span></div>
                                    ) : (
                                        <div className={`flex flex-row items-center justify-between w-full`}><span className={`text-[11px] font-bold truncate ${selectedPresetId === child.id ? 'text-blue-300' : 'text-zinc-400 group-hover:text-white'}`}>{child.label}</span><span className={`text-[10px] truncate text-right ${selectedPresetId === child.id ? 'text-blue-400/70' : 'text-zinc-600 group-hover:text-blue-400'}`}>{language === 'TH' ? child.thSubtitle : child.subtitle}</span></div>
                                    )}
                                    {selectedPresetId === child.id && !isGrid && (<div className="absolute right-2 top-1/2 -translate-y-1/2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div></div>)}
                                  </button>
                             ))}
                          </div>
                      )}
                  </div>
                )})}
             </div>
          </div>
        </div>

        <div className="p-5 border-t border-white/10 bg-[#0c1421] z-20 flex-shrink-0">
             <button onClick={handleGenerate} disabled={status === AppStatus.LOADING} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {status === AppStatus.LOADING ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>{t.rendering}</> : <><Wand2 className="w-4 h-4" /> {t.generate}</>}
            </button>
        </div>
      </aside>

      <main className="flex-1 relative bg-zinc-950 overflow-hidden flex flex-col">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(24,24,27,0.8),_rgba(9,9,11,1))] pointer-events-none"></div>
          
          <div className="w-full py-4 px-6 z-[100] flex items-center justify-between relative bg-transparent shrink-0">
             {/* LEFT SIDE: New Project */}
             <button onClick={handleNewProject} className="flex items-center gap-2 bg-zinc-800 border border-zinc-600 text-zinc-100 hover:text-white hover:bg-zinc-700 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-xl hover:shadow-cyan-500/30 group ring-1 ring-white/10" title={t.startNew}>
                 <RotateCcw size={14} className="text-zinc-400 group-hover:text-cyan-400 transition-colors" /> {t.newProject}
              </button>
             
             {/* RIGHT SIDE: Language & AI Settings (Moved here) */}
             <div className="flex items-center gap-3 relative">
                 <button onClick={() => setLanguage(l => l === 'EN' ? 'TH' : 'EN')} className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-700/50 text-zinc-400 hover:text-white px-3 py-2 rounded-full text-[10px] font-bold transition-all">
                    <Globe size={12} /> {language}
                 </button>

                 <div className="relative">
                    <button 
                       onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                       className={`flex items-center gap-2 px-3 py-2 rounded-full text-[10px] font-bold transition-all border ${showSettingsPanel ? 'bg-zinc-800 border-zinc-600 text-white' : 'bg-zinc-900/50 border-zinc-700/50 text-zinc-400 hover:text-white'}`}
                    >
                        <Settings2 size={12} /> {t.aiSettings} {isProUnlocked ? <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> : null}
                    </button>

                    {/* TOP RIGHT FLOATING PANEL */}
                    {showSettingsPanel && (
                        <div className="absolute right-0 top-full mt-2 w-[280px] bg-[#0c1421] border border-white/10 rounded-xl shadow-2xl p-4 z-50 animate-in slide-in-from-top-2 fade-in">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Advanced Settings</h3>
                                <button onClick={() => setShowSettingsPanel(false)} className="text-zinc-500 hover:text-white"><X size={14}/></button>
                            </div>

                            {/* USER PROFILE INFO */}
                            <div className="mb-4 bg-zinc-900 rounded p-2 border border-white/5">
                                <div className="text-xs font-bold text-white">{userProfile?.email}</div>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-[10px] text-zinc-500 uppercase">{userProfile?.role}</span>
                                    <button onClick={() => logout()} className="text-[10px] text-red-400 hover:text-red-300 flex items-center gap-1">
                                        <LogOut size={10} /> Logout
                                    </button>
                                </div>
                            </div>

                            {/* MODEL SELECTOR */}
                             <div className="flex flex-col rounded-lg border border-white/5 bg-black/20 overflow-hidden mb-4">
                                <div className="relative border-b border-white/5 group">
                                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600 group-hover:text-zinc-400 transition-colors"><Cpu size={12} /></div>
                                    <select value={model} onChange={(e) => setModel(e.target.value)} className="w-full bg-transparent text-zinc-300 text-[10px] pl-8 pr-6 py-2 appearance-none focus:bg-white/5 outline-none cursor-pointer font-medium hover:text-white transition-colors">
                                      <option value="gemini-3-pro-optimized" className="bg-[#0c1421]">Gemini 3.0 Pro (Optimized)</option>
                                      <option value="gemini-3-pro-image-preview" className="bg-[#0c1421]">Gemini 3.0 Pro (2K)</option>
                                      <option value="gemini-3-pro-ultra-4k" className="bg-[#0c1421]">Gemini 3.0 Pro (4K)</option>
                                      <option value="gemini-2.5-flash-image" className="bg-[#0c1421]">Gemini 2.5 Flash</option>
                                    </select>
                                     <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-700"><ChevronDown size={10} /></div>
                                </div>
                                {!isProUnlocked && isProModelSelected && (
                                    <div className="bg-yellow-500/10 px-2 py-1 flex items-start gap-1.5 border-b border-white/5">
                                        <AlertTriangle size={10} className="text-yellow-500 mt-0.5 shrink-0"/>
                                        <p className="text-[9px] text-yellow-200/80 leading-tight">{t.needKeyWarning}</p>
                                    </div>
                                )}
                            </div>
                            
                            {/* CONNECTION & API KEY */}
                            {userProfile?.role === 'ADMIN' && (
                                <div className="flex flex-col gap-2">
                                <a 
                                    href="https://aistudio.google.com/app/apikey" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded border border-white/5 transition-colors group"
                                >
                                    <span className="text-[10px] font-bold text-zinc-400 group-hover:text-white flex items-center gap-1.5">
                                    <Key size={10} /> {t.getKey}
                                    </span>
                                    <ExternalLink size={10} className="text-zinc-600 group-hover:text-zinc-400" />
                                </a>

                                {isAistudioAvailable && (
                                        <div>
                                            {isGoogleConnected ? (
                                                <div className="flex items-center justify-between px-3 py-2 bg-green-500/10 border border-green-500/20 rounded">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                                                        <span className="text-[10px] font-bold text-green-400">Google Connected</span>
                                                    </div>
                                                    <button onClick={handleConnectGoogle} className="text-[9px] text-zinc-500 hover:text-white underline">Change</button>
                                                </div>
                                            ) : (
                                                <button onClick={handleConnectGoogle} className="w-full flex items-center justify-center gap-1.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white py-2 rounded text-[10px] font-bold transition-colors shadow-lg shadow-blue-900/20">
                                                    <LogIn size={10} /> Connect Google Account
                                                </button>
                                            )}
                                        </div>
                                )}

                                <div className="bg-zinc-900/30 rounded border border-white/5 overflow-hidden">
                                    <button
                                        onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                                        className={`w-full flex items-center justify-between px-3 py-2 transition-all ${showApiKeyInput ? 'bg-zinc-800' : 'hover:bg-zinc-800/50'}`}
                                    >
                                        <span className="text-[10px] font-bold text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5">
                                            <Settings2 size={10} /> {manualApiKey ? 'Custom Key Active' : 'Enter Manual Key'}
                                        </span>
                                        <div className={`transition-transform duration-200 ${showApiKeyInput ? 'rotate-180' : ''}`}>
                                            <ChevronDown size={10} className="text-zinc-600" />
                                        </div>
                                    </button>
                                    
                                    {showApiKeyInput && (
                                        <div className="p-2 bg-black/40 flex flex-col gap-2 border-t border-white/5 animate-in slide-in-from-top-1">
                                            <input
                                                type="password"
                                                value={manualApiKey}
                                                onChange={(e) => setManualApiKey(e.target.value)}
                                                placeholder={t.apiKeyPlaceholder}
                                                className="w-full bg-zinc-900 text-white text-[10px] px-2 py-1.5 rounded border border-white/10 focus:border-cyan-500 outline-none placeholder-zinc-600"
                                            />
                                            <button
                                                onClick={handleSaveApiKey}
                                                className="w-full py-1.5 text-[10px] font-bold rounded bg-cyan-700 hover:bg-cyan-600 text-white transition-colors"
                                            >
                                                {t.saveKey}
                                            </button>
                                        </div>
                                    )}
                                </div>
                                </div>
                            )}
                        </div>
                    )}
                 </div>
             </div>
          </div>

          <div className="flex-1 relative w-full overflow-hidden flex items-center justify-center p-4">
             {!selectedImage ? (
                <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl px-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="text-center mb-8 space-y-2">
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zinc-700/50 shadow-xl shadow-cyan-500/10">
                           <ImagePlus size={32} className="text-cyan-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">{t.uploadToBegin}</h2>
                        <p className="text-zinc-500 text-sm">Upload a sketch, photo, or floor plan to transform.</p>
                    </div>
                    <div className="w-full">
                       <ImageUploader key={`main-${resetKey}`} onImageSelect={setSelectedImage} selectedImage={selectedImage} />
                    </div>
                </div>
             ) : (
                <GeneratedImage 
                  status={status} result={result} error={error} onReset={handleResetResult} selectedImage={selectedImage}
                  isMaskMode={isMaskMode} brushSize={brushSize} brushColor={brushColor} onMaskChange={setMaskData} triggerUndo={triggerUndo}
                  labels={{ readyToRender: t.readyToRender, uploadToBegin: t.uploadToBegin, aiProcessing: t.aiProcessing, generationFailed: t.generationFailed, somethingWrong: t.somethingWrong }}
                  onUndo={handleUndoResult}
                  onRedo={handleRedoResult}
                  canUndo={resultHistory.length > 0}
                  canRedo={redoStack.length > 0}
                />
             )}
          </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AuthWrapper />
        </AuthProvider>
    );
};

// Component to handle conditional rendering based on auth state
const AuthWrapper: React.FC = () => {
    const { currentUser, userProfile, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#09090b]">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
        );
    }

    if (!currentUser) {
        return <Login />;
    }

    if (userProfile?.role === 'ADMIN') {
        // Admin can choose to view dashboard or main app
        // For simplicity, we default to Dashboard, but usually an Admin wants to use the app too.
        // Let's render the Main App, but with a button to switch to Dashboard?
        // Or better, let's render dashboard if the URL hash says #admin, or just toggle state.
        // Given the requirement, let's keep it simple: Admins see Dashboard first.
        return <AdminView />;
    }

    return <MainApp />;
};

const AdminView: React.FC = () => {
    const [viewMode, setViewMode] = React.useState<'DASHBOARD' | 'APP'>('DASHBOARD');

    if (viewMode === 'APP') {
        return (
            <div className="relative">
                <button 
                    onClick={() => setViewMode('DASHBOARD')}
                    className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                >
                    Back to Admin Dashboard
                </button>
                <MainApp />
            </div>
        );
    }

    return (
        <div>
             <AdminDashboard />
             <div className="fixed bottom-6 right-6">
                 <button 
                    onClick={() => setViewMode('APP')}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-2 font-bold"
                 >
                    <Wand2 size={16} /> Open Render App
                 </button>
             </div>
        </div>
    );
}

export default App;
