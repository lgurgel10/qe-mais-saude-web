import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-qegold border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imageSrc || src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          contentVisibility: 'auto',
          containIntrinsicSize: width && height ? `${width}px ${height}px` : undefined
        }}
      />
    </div>
  );
} 