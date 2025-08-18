import React, { useState, useEffect } from "react";

interface BackgroundPageProps {
  backgroundImage: string;
  children: React.ReactNode;
  gradientOverlay?: {
    primary?: string;
    secondary?: string;
  };
}

export function BackgroundPage({ 
  backgroundImage, 
  children, 
  gradientOverlay = {
    primary: "bg-gradient-to-r from-black/80 via-black/60 to-black/40",
    secondary: "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
  }
}: BackgroundPageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // Still set to true to show fallback
    };
    
    img.src = backgroundImage;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [backgroundImage]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fallback background while loading */}
      <div 
        className="fixed -z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{
          top: '-100px',
          bottom: '-100px',
          left: '-50px',
          right: '-50px',
        }}
      />
      
      {/* Full-screen background with extended coverage */}
      <div 
        className={`fixed bg-cover bg-center bg-no-repeat -z-10 transition-opacity duration-500 ${
          imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          top: '-100px',
          bottom: '-100px',
          left: '-50px',
          right: '-50px',
        }}
      >
        {/* Gradient overlays for text readability */}
        <div className={`absolute inset-0 ${gradientOverlay.primary}`}></div>
        <div className={`absolute inset-0 ${gradientOverlay.secondary}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 pb-12">
        {children}
      </div>
    </div>
  );
}