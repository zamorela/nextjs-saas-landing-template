"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { ROUTES } from "@/assets/helpers/routes";
import { TelegramIcon } from "@/assets/icon/TelegramIcon";
import { InstagramIcon } from "@/assets/icon/InstagramIcon";

export const Footer = () => {
  const { locale } = useParams();
  const t = useTranslations("Footer");

  const text =
    locale === "ru"
      ? process.env.NEXT_PUBLIC_SUPPORT_LINK_RU_TEXT
      : process.env.NEXT_PUBLIC_SUPPORT_LINK_EN_TEXT;

  return (
    <footer className="mx-auto container flex flex-col gap-7 max-[700px]:gap-5 justify-between items-center mt-[160px] max-[640px]:mt-16 pb-8 max-[500px]:pb-[80px]">
      <div className="flex justify-between w-full items-start max-[500px]:flex-col max-[500px]:gap-4">
        <Link href="/" className="text-2xl font-bold">
          Your App
        </Link>
        <div className="self-center flex flex-col-reverse items-end max-[500px]:items-center gap-4">
          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="font-medium"
          >
            your-email@example.com
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={`${
                locale === "en"
                  ? process.env.NEXT_PUBLIC_TELEGRAM_EN_CHANNEL
                  : process.env.NEXT_PUBLIC_TELEGRAM_RU_CHANNEL
              }`}
              target="_blank"
              aria-label={"Telegram Channel"}
            >
              <TelegramIcon />
            </Link>
            <Link
              className="relative"
              href={
                locale === "ru"
                  ? `${process.env.NEXT_PUBLIC_INSTAGRAM_RU}`
                  : `${process.env.NEXT_PUBLIC_INSTAGRAM_EN}`
              }
              target="_blank"
              aria-label={"Instagram Channel"}
            >
              {locale === "ru" && (
                <span className="absolute -top-2 -right-1.5">*</span>
              )}
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-[#9C9CAE] w-full flex flex-col justify-between  items-center gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 md:flex-row items-center">
          <li className="hover:text-[#1C1C28] transition-colors duration-300 text-[15px]/normal font-medium">
            <Link href={`/${locale}${ROUTES.DOCUMENTS}`}>{t("documents")}</Link>
          </li>
          <li className="hover:text-[#1C1C28] transition-colors duration-300 text-[15px]/normal font-medium">
            <a
              href={`${process.env.NEXT_PUBLIC_SUPPORT_LINK}${text}`}
              target="_blank"
            >
              {t("support")}
            </a>
          </li>
        </ul>
        <div className="max-[800px]:hidden flex items-center justify-between text-[15px]/normal font-medium tracking-tight">
          <p>
            {t("all-rights-reserved")} Your App © {new Date().getFullYear()}
          </p>
        </div>
        <LanguageSwitcher />
        <div className="hidden max-[800px]:flex items-center justify-between text-sm font-medium tracking-tight ">
          <p>
            {t("all-rights-reserved")} Your App © {new Date().getFullYear()}
          </p>
        </div>
      </div>
      {locale === "ru" && (
        <div className="font-normal text-[14px] leading-[15px] text-[#9C9CAE] max-[728px]:text-[10px] text-center max-[530px]:leading-[12.1px]">
          {t("meta-disclaimer")}
        </div>
      )}
    </footer>
  );
};
