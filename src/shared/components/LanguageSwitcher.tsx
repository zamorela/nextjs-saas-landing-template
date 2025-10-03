"use client";
import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { BaseComponentProps } from "@/types/common";

type SupportedLocale = "en" | "ru";

interface LanguageSwitcherProps extends BaseComponentProps {}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const [, startTransition] = useTransition();
  const locale = useLocale() as SupportedLocale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: SupportedLocale) => {
    startTransition(() => {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    });
  };

  return (
    <div
      className={`${className} text-[15px]/normal font-medium cursor-pointer
        text-[#9C9CAE]
        hover:text-[#1C1C28]
        transition-colors
        duration-300`}
      onClick={() => switchLocale(locale === "en" ? "ru" : "en")}
    >
      {locale === "en" ? "English" : "Русский"}
    </div>
  );
};
