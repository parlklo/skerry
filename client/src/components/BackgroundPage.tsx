import React from "react";

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
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-screen background with extended coverage */}
      <div 
        className="fixed bg-cover bg-center bg-no-repeat -z-10"
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