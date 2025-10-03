import React from "react";
import { BaseComponentProps } from "@/types/common";

interface CheckboxProps extends BaseComponentProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  text?: React.ReactNode;
  disabled?: boolean;
  centered?: boolean;
}

export const Checkbox = ({
  checked,
  setChecked,
  className,
  disabled,
  text,
  centered = true,
}: CheckboxProps) => {
  return (
    <label
      className={`inline-flex ${
        centered ? "items-center" : "items-start"
      } gap-[8px] ${className} ${
        disabled ? "opacity-50 cursor-default" : "cursor-pointer"
      }`}
    >
      <input
        disabled={disabled}
        type={"checkbox"}
        className="hidden"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span
        className={`min-w-[24px] min-h-[24px] ${
          centered ? "max-[538px]:mt-[8px]" : "mt-[8px]"
        } rounded-[8px] border-[1px] border-solid transition-all duration-200 ease-in-out block relative ${
          checked ? "border-[#FB2D2D] bg-[#FB2D2D]/5" : "border-[#00000014] bg-transparent"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-200 ease-in-out ${
            checked ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M1 6L5.8 11L17 1"
            stroke="#FB2D2D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: "20",
              strokeDashoffset: checked ? "0" : "20",
              transition: "stroke-dashoffset 0.3s ease-in-out",
            }}
          />
        </svg>
      </span>
      <span className="text-black leading-[21px]">{text}</span>
    </label>
  );
};
