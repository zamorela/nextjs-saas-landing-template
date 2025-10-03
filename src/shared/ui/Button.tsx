import classNames from "classnames";
import { forwardRef, ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "outline"
  | "gray";
export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonShape = "rounded" | "pill" | "square";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      shape = "rounded",
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    };

    const baseClasses = [
      "inline-flex",
      "items-center",
      "justify-center",
      "font-medium",
      "transition-all",
      "duration-300",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-offset-2",
      "disabled:opacity-50",
      "disabled:cursor-not-allowed",
    ];

    const variantClasses = {
      primary: ["bg-[#FF6B6B]", "text-white", "hover:bg-[#FF5252]"],
      secondary: [
        "bg-[#7A5AF7]",
        "text-white",
        "hover:bg-[#6B4CE6]",
        "focus:ring-[#7A5AF7]/50",
      ],
      dark: [
        "bg-[#1C1C28]",
        "text-white",
        "hover:bg-[#2A2A36]",
        "focus:ring-[#1C1C28]/50",
        "opacity-80",
        "hover:opacity-90",
      ],
      outline: [
        "bg-transparent",
        "text-[#1C1C28]",
        "border",
        "border-[#1C1C28]",
        "hover:bg-[#1C1C28]",
        "hover:text-white",
        "focus:ring-[#1C1C28]/50",
      ],
      gray: [
        "bg-[#323038]",
        "text-white",
        "hover:bg-[#3A3742]",
        "focus:ring-[#323038]/50",
      ],
    };

    const sizeClasses = {
      sm: ["text-[14px]", "leading-[18px]", "p-[12px_20px]"],
      md: ["text-[16px]", "leading-[21px]", "p-[16px_24px]"],
      lg: ["text-[18px]", "leading-[24px]", "p-[20px_24px]"],
      xl: ["text-[20px]", "leading-[26px]", "p-[24px_32px]"],
    };

    const shapeClasses = {
      rounded: ["rounded-[16px]"],
      pill: ["rounded-[176px]"],
      square: ["rounded-[6px]"],
    };

    const widthClasses = {
      full: ["w-full"],
      auto: [],
    };

    const buttonClasses = classNames(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      shapeClasses[shape],
      widthClasses[fullWidth ? "full" : "auto"],
      {
        "cursor-wait": loading,
        "gap-2": leftIcon ?? rightIcon,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled ?? loading}
        onClick={handleClick}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
