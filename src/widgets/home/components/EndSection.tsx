"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/Button";
import { WaitingListModal } from "@/shared/components/WaitingListModal";
import { useWaitingListModal } from "@/shared/hooks/useWaitingListModal";

import banner from "@/assets/image/Group 2136138272.png";

export const EndSection = () => {
  const { locale } = useParams();
  const t = useTranslations("Home.EndSection");
  const { isOpen, closeModal } = useWaitingListModal();
  return (
    <section
      id="contacts"
      className="relative w-full h-[723px] max-[500px]:h-[300px] flex flex-col items-center justify-center"
    >
      <div className="z-10 flex flex-col items-center">
        <h2 className="text-[120px] font-bold text-center leading-[100%] text-[#1C1C28] -tracking-[0.04rem] mb-4 max-[500px]:mb-5 max-[500px]:text-[82px] max-[500px]:leading-[73px]">
YOUR APP
        </h2>
        <p className="max-w-2xl mx-auto text-base text-center mb-[45px] text-[#1C1C28] max-[500px]:hidden">
          {t("description")}
        </p>
        <Link
          href={`${
            locale === "ru"
              ? process.env.NEXT_PUBLIC_YANDEX_FORM_RU
              : process.env.NEXT_PUBLIC_YANDEX_FORM_EN
          }`}
          target="_blank"
        >
          <Button className="bg-[#1C1C28!important] opacity-80 text-[18px] leading-[24px] font-semibold p-[20px_24px] rounded-[16px] max-w-[339px] w-full max-[500px]:bg-[#FF6B6B!important] max-[500px]:opacity-100 max-[500px]:max-w-[303px] max-[500px]:text-[16px]">
            {t("requestDemoBtn")}
          </Button>
        </Link>
        <p className="hidden max-[500px]:inline-block -tracking-[0.04rem] text-xs text-center mt-2 text-[#1C1C28]">
          {t("description")}
        </p>
      </div>
      <Image
        quality={30}
        placeholder="blur"
        src={banner}
        alt="banner"
        className="rounded-3xl top-0 absolute w-full h-full object-contain max-[500px]:object-cover"
      />
      <WaitingListModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};
