"use client";
import { useLayoutEffect, useRef } from "react";

import { useTranslations } from "next-intl";

import { Accordion, AccordionItem } from "@/shared/ui/Accordion";
import { useGetFaq } from "@/widgets/faq/api/get-faq.";

export const FaqSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("Home.FaqSection");
  const { data } = useGetFaq();

  useLayoutEffect(() => {
    let cleanup: (() => void) | undefined;

    const initAnimation = async () => {
      const { default: gsap } = await import("gsap");
      const { SplitText } = await import("gsap/SplitText");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger, SplitText);

      const ctx = gsap.context(() => {
        const split = new SplitText(".split", { type: "words" });

        gsap.from(split.words, {
          y: 100,
          autoAlpha: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "+=400",
            scrub: 1,
          },
        });

        return () => {
          split.revert();
        };
      }, sectionRef);

      cleanup = () => ctx.revert();
    };

    initAnimation();

    return () => cleanup?.();
  }, []);
  
  return (
    <section
      id="faq"
      ref={sectionRef}
      className="container pt-[140px] pb-[160px] max-[500px]:pt-20 max-[500px]:pb-10 flex flex-col items-center"
    >
      <div>
        <h2 className="split text-center text-2xl text-[#FF6B6B] font-bold leading-7 -trakcing-[0.03rem] uppercase max-[500px]:leading-5">
          {t("tag")}
        </h2>
        <h3 className="split text-[#1C1C28] text-5xl font-bold text-center leading-12 -trakcing-[0.03rem] mt-2.5 max-[500px]:text-[32px] max-[500px]:leading-9">
          {t("title")}
        </h3>
      </div>
      <Accordion
        data={data as AccordionItem[]}
        className="max-w-[1020px] pt-[65px] max-[500px]:pt-10"
      />
    </section>
  );
};
