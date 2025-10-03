"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const UserChallengesSection = dynamic(() => import("@/widgets/home").then((mod) => mod.UserChallengesSection), { ssr: false });
const FaqSection = dynamic(() => import("@/widgets/home").then((mod) => mod.FaqSection), { ssr: false });
const EndSection = dynamic(() => import("@/widgets/home").then((mod) => mod.EndSection), { ssr: false });

export function ClientSections() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <UserChallengesSection />
      <FaqSection />
      <EndSection />
    </>
  );
}
