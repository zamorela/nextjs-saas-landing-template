"use client";
import { useEffect } from "react";

interface PreloadResource {
  href: string;
  as: string;
  type?: string;
  crossOrigin?: string;
}

interface CriticalResourcePreloaderProps {
  resources: PreloadResource[];
}

export const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({ 
  resources 
}) => {
  useEffect(() => {
    resources.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      resources.forEach(({ href }) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, [resources]);

  return null;
}; 