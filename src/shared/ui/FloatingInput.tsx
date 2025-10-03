"use client";
import React, { useState, useEffect, useRef } from "react";

interface FloatingInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string | boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric" | "decimal" | "search";
  maxLength?: number;
  minLength?: number;
  suffix?: string;
  smallLabel?: string;
}

export const FloatingInput = ({
  value = "",
  onChange,
  onClick,
  label = " ",
  placeholder,
  type = "text",
  disabled,
  error,
  className,
  labelClassName,
  inputClassName,
  inputMode = "text",
  maxLength,
  minLength,
  suffix,
  smallLabel,
  ...args
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(!!value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget !== null) return;
    setIsFocused(false);
    setHasText(!!e.target.value);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".input-container")) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    setHasText(!!value);
  }, [value]);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleContainerClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={`flex flex-col gap-[4px] relative w-full input-container ${className}`}
      onClick={handleContainerClick}
    >
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          value={value}
          onClick={onClick}
          inputMode={inputMode}
          onChange={(e) => {
            setHasText(!!e.target.value);
            onChange && onChange(e);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          className={`peer outline-none text-black font-medium w-full text-[20px] leading-[24px] -tracking-[0.03rem] rounded-2xl py-[24px] pl-[15px] pr-[16px] border-[1px] transition-all duration-200 ${
            disabled 
              ? "bg-[#F5F5F5] border-[#F5F5F5] cursor-not-allowed" 
              : "bg-white"
          } ${
            !!error && !isFocused 
              ? "border-[#FB2D2D]" 
              : isFocused || hasText
                ? "border-[#7A5AF7]" 
                : "border-[#E0E0E0] hover:border-[#BDBDBD]"
          } ${inputClassName}`}
          placeholder={placeholder}
          {...args}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[20px] leading-[24px] -tracking-[0.03rem]">
            {suffix}
          </span>
        )}
      </div>
      <label
        className={`absolute left-4 font-medium transition-all duration-200 ease-in-out cursor-text pointer-events-none select-none
          ${
            isFocused || hasText
              ? `text-[14px] leading-[16.94px] top-[8px] -translate-y-0 text-[#9A9A9A] bg-white px-1 ml-[-4px]`
              : `text-[18px] leading-[22px] -tracking-[0.03rem] top-[25px] text-[#9A9A9A]`
          } ${labelClassName}`}
      >
        {isFocused || hasText ? smallLabel : label}
      </label>
      {error && !isFocused && (
        <div className="absolute left-[16px] bottom-[7px] text-[14px] font-medium -tracking-[0.03rem] leading-[16.94px] text-[#FB2D2D]">
          {error}
        </div>
      )}
    </div>
  );
};
