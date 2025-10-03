"use client";
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

import { motion, AnimatePresence } from "framer-motion";

import { WaitingListForm } from "@/widgets/waitingList/components/WaitingListForm";
import { WaitingListSuccessModal } from "@/shared/components/WaitingListSuccessModal";
import { CloseButton } from "@/shared/ui/CloseButton";

interface WaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitingListModal: React.FC<WaitingListModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = isOpen ? "hidden" : "unset";
    if (!isOpen) {
      setIsSuccess(false);
      setUserName("");
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleFormSuccess = useCallback((name: string) => {
    setUserName(name);
    setIsSuccess(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsSuccess(false);
    setUserName("");
    onClose();
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[9998] bg-black"
          />

          <motion.div
            onClick={handleClose}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[9999] min-[500px]:flex min-[500px]:items-center min-[500px]:justify-center min-[500px]:h-full max-[499px]:hidden"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[512px] mx-4 bg-white rounded-[24px] p-8 shadow-2xl"
            >
              <CloseButton
                onClick={handleClose}
                className="absolute top-4 right-4"
              />

              {isSuccess ? (
                <WaitingListSuccessModal
                  userName={userName}
                  onClose={handleClose}
                />
              ) : (
                <WaitingListForm onSuccess={handleFormSuccess} />
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%", transition: { type: "tween", duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`bg-white overflow-y-hidden fixed bottom-0 left-0 right-0 w-full ${
              isSuccess
                ? "h-[calc(100vh-50%)] max-[400px]:h-[calc(100vh-40%)] max-[376px]:h-[calc(100vh-30%)]"
                : "max-[376px]:h-[calc(100vh-5%)] h-[calc(100vh-15%)]"
            } z-[9999] rounded-t-[24px] min-[500px]:hidden shadow-2xl max-h-[90vh] flex flex-col`}
          >
            <div className="w-12 h-1 rounded-full mx-auto mb-8 mt-2" />

            <div className="p-6 pt-2 flex-1 flex flex-col max-[500px]:p-4 pb-6">
              <CloseButton
                onClick={handleClose}
                className="absolute top-4 right-4"
              />
              {isSuccess ? (
                <WaitingListSuccessModal
                  userName={userName}
                  onClose={handleClose}
                />
              ) : (
                <WaitingListForm onSuccess={handleFormSuccess} />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
