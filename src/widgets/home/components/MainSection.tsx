"use client";
// OptimizedImage import removed - no longer needed
import { WaitingListModal } from "@/shared/components/WaitingListModal";
import { useLayoutEffect, useRef } from "react";

import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/Button";
import { useWaitingListModal } from "@/shared/hooks/useWaitingListModal";


export const MainSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const t = useTranslations("Home.MainSection");
  const { isOpen, openModal, closeModal } = useWaitingListModal();

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    let cleanup: (() => void) | undefined;

    const initAnimation = async () => {
      const { default: gsap } = await import("gsap");
      const { SplitText } = await import("gsap/SplitText");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(SplitText, ScrollTrigger);

      if (!titleRef.current) return;
      const split = new SplitText(titleRef.current, { type: "chars" });

      const ctx = gsap.context(() => {
        gsap.from(split.chars, {
          yPercent: "random([-100, 100])",
          rotation: "random(-30, 30)",
          ease: "back.out",
          autoAlpha: 0,
          repeat: 0,
          yoyo: true,
          stagger: {
            amount: 0.6,
            from: "random",
          },
          duration: 1,
        });

      }, sectionRef);

      cleanup = () => {
        ctx.revert();
        split.revert();
      };
    };

    initAnimation();

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative container pt-[248px] max-[900px]:pt-[148px] max-[640px]:pt-[100px] flex flex-col items-center"
    >
      <h3
        ref={titleRef}
        className="hidden max-[900px]:block pb-20 text-center text-[40px] leading-10 text-[#1C1C28] font-bold"
      >
Your App
      </h3>
      <h1 className="z-10 max-w-2xl text-[56px] leading-[48px] font-bold max-[640px]:text-5xl max-[640px]:leading-[44px] max-[640px]:font-medium text-center tracking-tight mb-6 max-[640px]:mb-[21px]">
        {t("title")}
      </h1>
      <p className="z-10 max-[780px]:w-[200px] max-w-2xl mx-auto text-xl text-center max-[640px]:text-sm max-[640px]:leading-[20px] max-[640px]:-tracking-[0.04rem] mb-8 max-[640px]:mb-[55px]">
        {t("description")}
      </p>
      <Button
        variant="primary"
        size="lg"
        className="group w-[343px] max-[640px]:w-[303px] mb-2"
        onClick={openModal}
      >
        {t("requestDemoBtn")}
      </Button>
      <div className="text-sm -tracking-[0.03rem] leading-[18px] max-[640px]:text-sm text-[#9C9CAE]">
        {t("subTitle")}
      </div>
      <WaitingListModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};
