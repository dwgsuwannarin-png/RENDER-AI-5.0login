import React, { useRef, useEffect } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { UploadedImage } from '../types';

interface ImageUploaderProps {
  onImageSelect: (data: UploadedImage | null) => void;
  selectedImage: UploadedImage | null;
  compact?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, selectedImage, compact = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clear the internal file input when external state is reset (e.g. New Project)
  useEffect(() => {
    if (!selectedImage && fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  }, [selectedImage]);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WEBP)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      onImageSelect({
        base64,
        mimeType: file.type,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };
  
  // Explicitly clear value on click to allow re-selecting the same file if needed
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).value = '';
  };

  const handleRemove = () => {
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      {/* Input moved outside conditional rendering to ensure it persists and can be reset */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileInput}
        onClick={handleInputClick}
      />
      
      {!selectedImage ? (
        <div
          className={`
            relative w-full rounded-xl border border-dashed transition-all duration-300 ease-in-out flex flex-col items-center justify-center cursor-pointer group
            ${compact 
              ? 'h-32 bg-zinc-900 border-zinc-700 hover:border-zinc-500' 
              : 'h-64 border-2 border-orange-500/60 bg-orange-500/5 hover:bg-orange-500/10 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] shadow-[0_0_15px_rgba(249,115,22,0.05)]'
            }
          `}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className={`p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300 ${compact ? 'bg-zinc-800' : 'bg-orange-500/10'}`}>
            <Upload className={`
              ${compact ? 'w-4 h-4 text-zinc-400 group-hover:text-indigo-400' : 'w-10 h-10 text-orange-500 group-hover:text-orange-400'} 
              transition-colors
            `} />
          </div>
          <p className={`${compact ? 'text-zinc-500 text-xs' : 'text-orange-200/80 text-sm font-medium'} text-center px-4`}>
            {compact ? "Click to upload image" : "Click or drag Main Image here"}
          </p>
        </div>
      ) : (
        <div className={`
          relative w-full rounded-xl overflow-hidden bg-zinc-900 group shadow-lg
          ${compact ? 'h-32 border border-zinc-700' : 'h-64 border-2 border-orange-500/50 shadow-orange-500/10'}
        `}>
          <img 
            src={selectedImage.base64} 
            alt="Source" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="bg-red-500/90 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-sm transform hover:scale-110 transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className={`absolute bottom-2 right-2 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1 backdrop-blur-md ${compact ? 'bg-black/70 text-zinc-300' : 'bg-orange-500/90 text-white shadow-lg'}`}>
            <ImageIcon className="w-3 h-3" /> {compact ? 'Image Loaded' : 'Main Image Ready'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;