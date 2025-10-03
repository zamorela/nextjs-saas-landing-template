"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/shared/ui/Button";
import { useParams } from "next/navigation";
import { CloseButton } from "@/shared/ui/CloseButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; href: string }>;
  onNavClick: (href: string) => void;
  onOpenWaitingListModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  onNavClick,
  onOpenWaitingListModal,
}) => {
  const t = useTranslations("Header");
  const [isMounted, setIsMounted] = useState(false);
  const { locale } = useParams();

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      // Handle resize if needed
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[9998] bg-black"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { type: "tween", duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`bg-white overflow-hidden fixed bottom-0 left-0 right-0 w-full max-[376px]:h-[calc(100vh-10%)] h-[calc(100vh-30%)] z-[9999] rounded-t-[24px] shadow-2xl`}
          >
            <div className="w-12 h-1 rounded-full mx-auto mb-8 mt-2" />

            <div className="p-6 pt-2 h-full flex flex-col">
              <CloseButton
                onClick={onClose}
                className="absolute top-4 right-4"
              />
              <nav className="">
                <ul className="flex flex-col gap-8">
                  {navItems.map(({ label, href }) => (
                    <li key={href}>
                      <button
                        onClick={() => onNavClick(`/${locale}${href}`)}
                        className="w-full text-left text-[28px] font-medium text-[#1C1C28] leading-6"
                      >
                        {t(label)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="py-6 space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="group"
                  onClick={onOpenWaitingListModal}
                >
                  {t("joinWaitingListBtn")}
                </Button>
                <Button
                  variant="dark"
                  size="lg"
                  fullWidth
                  className="group"
                  onClick={() =>
                    window.open(
                      `${
                        locale === "ru"
                          ? process.env.NEXT_PUBLIC_YANDEX_FORM_RU
                          : process.env.NEXT_PUBLIC_YANDEX_FORM_EN
                      }`,
                      "_blank"
                    )
                  }
                >
                  {t("requestDemoBtn")}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
