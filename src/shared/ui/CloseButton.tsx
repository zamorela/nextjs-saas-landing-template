"use client";
import React from "react";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md";
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className = "",
  variant = "light",
  size = "md",
}) => {
  const baseClasses = "flex items-center justify-center rounded-full transition-colors duration-200";
  
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8"
  };

  const variantClasses = {
    light: "bg-gray-100 hover:bg-gray-200",
    dark: "bg-black/10 hover:bg-black/20"
  };

  const iconSize = size === "sm" ? "12" : "16";
  const strokeColor = variant === "dark" ? "#FFF" : "#666";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label="Закрыть"
      type="button"
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}; 