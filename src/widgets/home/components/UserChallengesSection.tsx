"use client";
import { useLayoutEffect, useRef, useState } from "react";
    
import { useTranslations } from "next-intl";

import { UserChallengeCard } from "@/shared/components/UserChallengeCard";

const challenges = [
  {
    id: 1,
    key: "anna_levina",
    date: "12 марта 2025",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    key: "dmitriy_sidorov",
    date: "28 марта 2025",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    key: "marina_krivtsova",
    date: "5 апреля 2025",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    key: "igor_bekbulatov",
    date: "17 апреля 2025",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    key: "kamila_alaeva",
    date: "24 мая 2025",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    key: "timur_mamaev",
    date: "8 марта 2025",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    key: "elvira_nasrullaeva",
    date: "16 марта 2025",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    key: "ruslan_ibragimov",
    date: "2 апреля 2025",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    key: "zhanna_kerimova",
    date: "11 апреля 2025",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    key: "adam_yunusov",
    date: "20 мая 2025",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
  },
];

export const UserChallengesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("Home.UserChallengesSection");
  const tReviews = useTranslations("Reviews");
  const [visibleCards, setVisibleCards] = useState<number>(challenges.length);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(6);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(10);
      } else {
        setVisibleCards(challenges.length);
      }
    };

    handleResize();

    const controller = new AbortController();
    window.addEventListener("resize", handleResize, {
      signal: controller.signal,
      passive: true
    });

    return () => controller.abort();
  }, []);

  useLayoutEffect(() => {
    let cleanup: (() => void) | undefined;

    const initAnimation = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { SplitText } = await import("gsap/SplitText");
      
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

        return () => split.revert();
      }, sectionRef);

      cleanup = () => ctx.revert();
    };

    initAnimation();

    return () => cleanup?.();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative container pt-20 pb-[140px] max-[500px]:pb-20 flex flex-col items-center"
    >
      <div className="z-10">
        <h2 className="split text-center text-2xl text-[#FF6B6B] font-bold leading-7 -trakcing-[0.03rem] uppercase max-[500px]:leading-5">
          {t("tag")}
        </h2>
        <h3 className="split text-[#1C1C28] text-5xl font-bold text-center leading-12 -trakcing-[0.03rem] mt-2.5 max-[500px]:text-[32px] max-[500px]:leading-9">
          {t("title")}
        </h3>
      </div>
      <div className="z-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 max-[700px]:pb-0 gap-6 space-y-6 pt-[65px]">
        {challenges.slice(0, visibleCards).map((card) => (
          <UserChallengeCard
            key={card.id}
            name={tReviews(`${card.key}.name`)}
            role={tReviews(`${card.key}.role`)}
            text={tReviews(`${card.key}.text`)}
          />
        ))}
      </div>
    </section>
  );
};
