"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import QuickStartImage from "@/assets/image/Group 2136138277.png";
import StatisticsImage from "@/assets/image/iPhone 16 Plus Dark (9).png";
import WaysImage from "@/assets/image/Group 2136138278.png";
import ChatImage from "@/assets/image/iPhone 16 Plus Dark (11).png";
import AiAnalysis from "@/assets/image/Group 2136138279.png";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    key: "quick-start",
    image: QuickStartImage,
    cardClass: "",
    textClass:
      "max-w-[258px] flex flex-col items-start text-start max-[600px]:max-w-[300px]",
    titleClass: "",
    descClass: "",
    imageClass: "right-[-20px] bottom-[-10px] w-[330px] max-[500px]:w-[300px] max-[500px]:bottom-[-20px]",
  },
  {
    key: "statistics",
    image: StatisticsImage,
    cardClass: "flex flex-col max-[600px]:flex-row",
    textClass:
      "max-w-full flex flex-col text-center items-center max-[600px]:text-left max-[600px]:items-start max-[600px]:max-w-[100%]",
    titleClass: "text-center max-[600px]:text-left",
    descClass: "text-center max-[600px]:text-left",
    imageClass: "right-[105px] bottom-0 w-[400px] max-[600px]:w-[315px] max-[600px]:right-[139px]",
  },
  {
    key: "ways",
    image: WaysImage,
    cardClass: "",
    textClass:
      "max-w-[258px] flex flex-col items-start text-start max-[600px]:max-w-[260px]",
    titleClass: "",
    descClass: "",
    imageClass: "right-0 bottom-0 w-[290px] max-[600px]:w-[270px] max-[600px]:bottom-[-30px]", 
  },
  {
    key: "chat",
    image: ChatImage,
    cardClass: "",
    textClass:
      "max-w-[258px] flex flex-col items-start text-start max-[600px]:max-w-[260px]",
    titleClass: "",
    descClass: "",
    imageClass: "right-[40px] bottom-[25px] w-[200px] max-[600px]:w-[170px] right-[60px]",
  },
  {
    key: "ai-analysis",
    image: AiAnalysis,
    cardClass: "",
    textClass:
      "max-w-[258px] flex flex-col items-start text-start max-[600px]:max-w-[250px]",
    titleClass: "",
    descClass: "",
    imageClass: "right-0 bottom-0 w-[390px] max-[600px]:w-[350px]",
  },
];

export const FunctionalSection = () => {
  const t = useTranslations("Home.FunctionalSection");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current || !cardsRef.current)
      return;

    const cards = Array.from(cardsRef.current.children) as HTMLElement[];
    if (cards.length === 0) return;

    const gap = innerWidth > 768 ? 40 : 23;
    const totalWidth =
      cards.reduce((sum, el) => sum + el.offsetWidth, 0) +
      gap * (cards.length - 1);
    const containerWidth = cardsContainerRef.current.offsetWidth;
    const scrollDistance = totalWidth - containerWidth;
    if (scrollDistance <= 0) return;

    const scrollTween = gsap.to(cardsRef.current, {
      x: -scrollDistance - gap,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        pinSpacing: true,
      },
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="funt relative rounded-[88px] w-full bg-[#191A23] mt-[36px] pt-[44px] pb-[136px]
                 max-[780px]:pt-[24px] max-[500px]:pb-20 flex flex-col items-center
                 overflow-hidden max-[780px]:rounded-[27px]"
    >
      <div className="z-10 mb-[79px] max-[640px]:mb-[29px] max-w-4xl px-4">
        <h2
          className="mt-8 text-center text-2xl text-[#FF6B6B] font-bold leading-7
                       -tracking-[0.03rem] uppercase max-[500px]:leading-5"
        >
          {t("tag")}
        </h2>
        <h3
          className="z-20 text-white text-5xl font-bold text-center leading-[3rem]
                       -tracking-[0.03rem] mt-2.5 max-[500px]:text-[32px]
                       max-[500px]:leading-9"
        >
          {t("title")}
        </h3>
      </div>

      <div ref={cardsContainerRef} className="w-full px-4">
        <div ref={cardsRef} className="flex gap-10 max-[768px]:gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative flex min-w-[608px] max-w-[608px]
                      
                          h-[460px] bg-[#FAFAFA] rounded-[42px]
                          p-[24px_40px] max-[500px]:p-[44px_40px]
                          max-[500px]:h-[407px] max-[500px]:rounded-[42px]
                          overflow-hidden ${card.cardClass}`}
            >
              <div className={card.textClass}>
                <h4
                  className={`text-[32px] leading-[32px] font-bold mb-4
                               ${card.titleClass}`}
                >
                  {t(`cards.${card.key}.title`)}
                </h4>
                <p
                  className={`text-[20px] leading-[28px] -tracking-[0.04rem]
                             ${card.descClass}`}
                >
                  {t(`cards.${card.key}.description`)}
                </p>
              </div>
              {card.image && (
                <div className={`absolute ${card.imageClass}`}>
                  <Image
                    src={card.image}
                    alt={t(`cards.${card.key}.title`)}
                    className="object-contain"
                  />
                </div>
              )}
              {/* {typeof innerWidth !== "undefined" && innerWidth < 600 && (
                <div className={`absolute right-0 bottom-0 w-[70px]`}>
                  <Image src={staticImage} alt="" />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
