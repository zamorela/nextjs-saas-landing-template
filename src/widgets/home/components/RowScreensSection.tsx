"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import Iphone1 from "@/assets/image/iPhone 16 Plus Dark (14).png";
import Iphone2 from "@/assets/image/iPhone 16 Plus Dark (16).png";
import Iphone3 from "@/assets/image/iPhone 16 Plus Dark (12).png";
import Iphone4 from "@/assets/image/iPhone 16 Plus Dark (13).png";
import Iphone5 from "@/assets/image/iPhone 16 Plus Dark (15).png";

// Decorative images removed for universal template

const mobileImages = [
  { src: Iphone3, className: "iphone0" },
  { src: Iphone1, className: "iphone1" },
  { src: Iphone4, className: "iphone2" },
];

const desktopImages = [
  { src: Iphone2, className: "iphone0" },
  { src: Iphone3, className: "iphone1" },
  { src: Iphone1, className: "iphone2" },
  { src: Iphone4, className: "iphone3" },
  { src: Iphone5, className: "iphone4" },
];

export const RowScreensSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initAnimation = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const isMobile =
          typeof window !== "undefined" && window.innerWidth <= 500;
        if (isMobile) {
          gsap.to([".iphone0", ".iphone2"], {
            y: 0,
            opacity: 1,
            startAt: { y: 120 },
            duration: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=200",
              scrub: 1,
            },
          });

          gsap.to(".iphone1", {
            y: 0,
            opacity: 1,
            startAt: { y: 60 },
            duration: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=200",
              scrub: 1,
            },
          });
        } else {
          gsap.to([".iphone0", ".iphone4"], {
            y: 0,
            opacity: 1,
            startAt: { y: 248 },
            duration: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=200",
              scrub: 1,
            },
          });

          gsap.to([".iphone1", ".iphone3"], {
            y: 0,
            opacity: 1,
            startAt: { y: 120 },
            duration: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=200",
              scrub: 1,
            },
          });

          gsap.to(".iphone2", {
            y: 0,
            opacity: 1,
            startAt: { y: 0 },
            duration: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "+=200",
              scrub: 1,
            },
          });
        }

        // Decorative animations removed for universal template
      }, sectionRef);

      cleanup = () => ctx.revert();
    };

    initAnimation();

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-24 overflow-hidden pb-[255px] max-[780px]:pb-[100px]"
    >
      <div className="flex justify-center items-end gap-6 sm:gap-10 md:hidden">
        {mobileImages.map((item, i) => (
          <div key={i} className={`z-10 flex-shrink-0 ${item.className}`}>
            <Image
              src={item.src}
              placeholder="blur"
              quality={60}
              alt={`iPhone ${i + 1}`}
              width={255}
              height={500}
              className="rounded-3xl max-[640px]:rounded-2xl max-[640px]:w-36 max-[640px]:h-[300px]"
            />
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-center items-end gap-6 sm:gap-10">
        {desktopImages.map((item, i) => (
          <div key={i} className={`z-10 flex-shrink-0 ${item.className}`}>
            <Image
              src={item.src}
              placeholder="blur"
              quality={60}
              alt={`iPhone ${i + 1}`}
              width={255}
              height={500}
              className="rounded-3xl max-[640px]:rounded-2xl max-[640px]:w-36 max-[640px]:h-[300px]"
            />
          </div>
        ))}
      </div>
      {/* Decorative elements removed for universal template */}
    </section>
  );
};
