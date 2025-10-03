"use client";
import Link from "next/link";
import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";

import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/Button";
import { MenuIcon } from "@/assets/icon/MenuIcon";
import { ApplicationIcon } from "@/assets/icon/ApplicationIcon";
import { useWaitingListModal } from "@/shared/hooks/useWaitingListModal";
import { ROUTES } from "@/assets/helpers/routes";

const WaitingListModal = lazy(() =>
  import("@/shared/components/WaitingListModal").then((module) => ({
    default: module.WaitingListModal,
  }))
);
const MobileMenu = lazy(() =>
  import("@/widgets/header/components/MobileMenu").then((module) => ({
    default: module.MobileMenu,
  }))
);

const navItems = [
  { label: "nav.advantages", href: "#advantages" },
  { label: "nav.reviews", href: "#reviews" },
  { label: "nav.faq", href: "#faq" },
  { label: "nav.contacts", href: "#contacts" },
  { label: "nav.documents", href: `${ROUTES.DOCUMENTS}` },
];

export const Header = () => {
  const t = useTranslations("Header");
  const { locale } = useParams();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [currentHash, setCurrentHash] = useState<string>("");
  const [isInDarkSection, setIsInDarkSection] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [shouldRenderMobileMenu, setShouldRenderMobileMenu] =
    useState<boolean>(false);
  const { isOpen: isModalOpen, openModal, closeModal } = useWaitingListModal();
  const [shouldRenderModal, setShouldRenderModal] = useState<boolean>(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setShouldRenderMobileMenu(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRenderMobileMenu(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setShouldRenderModal(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRenderModal(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isModalOpen]);

  useEffect(() => {
    const checkDarkSection = () => {
      const functionalSection = document.getElementById("advantages");
      if (!functionalSection) {
        setIsInDarkSection(false);
        return;
      }

      const rect = functionalSection.getBoundingClientRect();
      const headerHeight = 80;

      const isHeaderInDarkSection =
        rect.top <= headerHeight && rect.bottom >= headerHeight;


      setIsInDarkSection(isHeaderInDarkSection);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY >= 72) {
        setIsVisible(false);
      } else if (currentScrollY - lastScrollY <= 10) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      checkDarkSection();
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    setCurrentHash(window.location.hash);
    checkDarkSection();

    const controller = new AbortController();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
      signal: controller.signal,
    });
    window.addEventListener("hashchange", handleHashChange, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    if (href.includes("#")) {
      setIsMobileMenuOpen(false);

      const anchor = href.split("#")[1];
      const currentPath = window.location.pathname;
      const homePath = `/${locale}`;

      if (currentPath === homePath || currentPath === `/${locale}/`) {
        setTimeout(() => {
          const element = document.querySelector(`#${anchor}`);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 200);
      } else {
        setTimeout(() => {
          router.push(href);
        }, 100);
      }
    } else {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        router.push(href);
      }, 100);
    }
  };

  const handleOpenWaitingListModal = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      openModal();
    }, 200);
  };

  return (
    <>
      <header
        className={`max-[900px]:hidden fixed w-full z-30 top-[38px] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[88px]"
        }`}
      >
        <div className="container flex justify-between items-center mx-auto">
          <Link
            href="/"
            className={`text-[28px] leading-[24px] font-bold transition-colors duration-300 ${
              isInDarkSection ? "text-white" : "text-[#1C1C28]"
            }`}
          >
            Zamorela
          </Link>
          <nav
            className={`text-base leading-[19px] flex items-center gap-[37px] p-[14px_81px] rounded-[90px] backdrop-blur-[12px] transition-colors duration-300 ${
              isInDarkSection ? "bg-white/10" : "bg-white/20"
            }`}
          >
            {navItems.slice(0, 3).map(({ label, href }) => (
              <Link
                key={href}
                href={`/${locale}${href}`}
                className={`relative cursor-pointer transition-colors duration-300 ${
                  isInDarkSection ? "text-white" : "text-[#1C1C28]"
                }`}
              >
                {t(label)}
                {currentHash === href && (
                  <div className="absolute top-[7.5px] size-1.5 -left-3 bg-[#FB2D2D] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <Link
            href={`${
              locale === "ru"
                ? process.env.NEXT_PUBLIC_YANDEX_FORM_RU
                : process.env.NEXT_PUBLIC_YANDEX_FORM_EN
            }`}
            target="_blank"
          >
            <Button className="group bg-black rounded-[16px] text-[18px] leading-[24px] p-[12px_24px!important]">
              {t("requestDemoBtn")}
            </Button>
          </Link>
        </div>
      </header>

      <nav className="hidden max-[900px]:block fixed bottom-4 w-full z-[9997]">
        <ul className="hidden max-[900px]:flex items-center justify-center gap-1">
          <li>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-[#FFFFFF] flex justify-between items-center w-[169px] p-[14px_21px] rounded-[176px] font-semibold text-base leading-[21px] -tracking-[0.04rem]"
            >
              {t("nav.menu")}
              <MenuIcon />
            </button>
          </li>
          <li>
            <button
              className="text-white bg-[#323038] flex justify-between items-center w-[169px] p-[14px_21px] rounded-[176px] font-semibold text-base leading-[21px] -tracking-[0.04rem]"
              onClick={openModal}
            >
              {t("nav.application")}
              <ApplicationIcon />
            </button>
          </li>
        </ul>
      </nav>

      <Suspense fallback={null}>
        {shouldRenderMobileMenu && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
            onNavClick={handleNavClick}
            onOpenWaitingListModal={handleOpenWaitingListModal}
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {shouldRenderModal && (
          <WaitingListModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </Suspense>
    </>
  );
};
