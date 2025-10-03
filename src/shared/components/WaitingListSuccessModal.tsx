"use client";
import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/Button";

interface WaitingListSuccessModalProps {
  userName: string;
  onClose?: () => void;
  onOpenTelegram?: () => void;
}

export const WaitingListSuccessModal: React.FC<
  WaitingListSuccessModalProps
> = ({ userName, onClose, onOpenTelegram }) => {
  const t = useTranslations("WaitingListSuccess");

  const handleOpenTelegram = () => {
    window.open(
      process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL,
      "_blank"
    );
    onOpenTelegram?.();
    onClose?.();
  };

  const handleBotLinkClick = () => {
    window.open(process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL);
  };

  return (
    <div className="max-w-full h-full flex flex-col items-center max-[500px]:items-center flex-1 text-center">
      <div className="mb-6 max-[500px]:mb-4">
        <h2 className="max-[900px]:text-left text-[40px] max-[500px]:text-[28px] font-bold leading-[100%] -tracking-[0.03rem] text-[#1C1C28] max-[500px]:leading-[34px]">
          {t("title", { name: userName })}🎉 🥳
        </h2>
      </div>

      <div className="mb-6">
        <p className="text-[16px] leading-[100%] font-medium max-[600px]:font-normal max-[600px]:text-left mb-4">
          {t("description")}{" "}
          <button
            onClick={handleBotLinkClick}
            className="text-[#FF6B6B] hover:text-[#FF5252] font-medium underline-offset-4 hover:underline cursor-pointer"
          >
            {t("botLink")}
          </button>
        </p>
        <p className="text-[16px] leading-[100%] font-medium max-[600px]:font-normal max-[600px]:text-left">
          {t("instruction")}
        </p>
      </div>

      <div className="w-full">
        <Button
          onClick={handleOpenTelegram}
          variant="primary"
          size="lg"
          fullWidth
          className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold"
        >
          {t("openTelegramBtn")}
        </Button>
      </div>
    </div>
  );
};
