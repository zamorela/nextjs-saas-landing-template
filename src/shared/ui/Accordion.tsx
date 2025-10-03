"use client";
import { useParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { getLocalizedField } from "@/utils/localization";
import { BaseComponentProps } from "@/types/common";

export interface AccordionItem {
  id: number;
  question: string;
  answer: string;
  [key: string]: string | number;
}

interface AccordionProps extends BaseComponentProps {
  data?: AccordionItem[];
}

export const Accordion = ({ data, className }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const { locale } = useParams();
  const currentLocale = (locale as string) || 'en';

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndexes.includes(index)) {
          ref.style.maxHeight = `${ref.scrollHeight + 1}px`;
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndexes]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {data?.map((item: AccordionItem, index: number) => (
          <div key={index} className="relative w-full">
            <div
              onClick={() => toggleAccordion(index)}
              className="py-8 cursor-pointer border-b-[1px] border-[#D9D9D9] max-[500px]:py-4"
            >
              <div className="w-full flex justify-between items-center font-semibold text-2xl leading-[29px] -tracking-[0.04rem] max-[500px]:text-[18px] max-[500px]:leading-5">
                {getLocalizedField(item, 'question', currentLocale)}
                <div className="size-6">
                  <svg
                    className={`size-6 transition-transform ${
                      openIndexes.includes(index)
                        ? "rotate-[360deg]"
                        : "rotate-[180deg]"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M7 15L12 10L17 15"
                      stroke="#292556"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                ref={(el: HTMLDivElement | null) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className={`text-[18px] leading-[140%] -tracking-[0.02rem] max-h-0 overflow-hidden transition-all duration-[0.35s] ease-in-out max-[500px]:text-[15px] max-[500px]:leading-4 ${
                  openIndexes.includes(index) ? "mt-4 max-[500px]:mt-2" : "pt-0"
                }`}
              >
                {getLocalizedField(item, 'answer', currentLocale)}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
