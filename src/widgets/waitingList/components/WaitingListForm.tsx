"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/shared/ui/Button";
import { Checkbox } from "@/shared/ui/Checkbox";
import { FloatingInput } from "@/shared/ui/FloatingInput";
import { ROUTES } from "@/assets/helpers/routes";
import {
  useCreateWaitingListSubscription,
  WaitingListSubscriptionData,
} from "@/widgets/waitingList/api/create-waiting-subscription";

interface FormData {
  name: string;
  email: string;
  contact: string;
  subscribe: boolean;
}

interface WaitingListFormProps {
  onClose?: () => void;
  onSuccess?: (name: string) => void;
}

export const WaitingListForm: React.FC<WaitingListFormProps> = ({
  onClose,
  onSuccess,
}) => {
  const t = useTranslations("WaitingListForm");
  const { locale } = useParams();
  const { mutate: createSubscription, isPending } =
    useCreateWaitingListSubscription();

  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
    watch,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const watchedFields = watch();

  const isFormComplete =
    watchedFields.name &&
    watchedFields.email &&
    watchedFields.contact &&
    watchedFields.subscribe &&
    isValid;

  const onSubmit = (data: FormData) => {
    const subscriptionData: WaitingListSubscriptionData = {
      name: data.name,
      email: data.email,
      contact: data.contact,
      subscribe: data.subscribe,
    };

    createSubscription(subscriptionData);

    reset();

    if (onSuccess) {
      onSuccess(data.name);
    } else {
      onClose?.();
    }
  };

  return (
    <div className="max-w-full h-full flex flex-col items-center max-[500px]:items-start flex-1">
      <h2 className="max-w-[300px] text-center text-[40px] max-[900px]:text-left font-bold leading-[100%] -tracking-[0.03rem] text-[#1C1C28] mb-6 max-[500px]:mb-5 max-[500px]:text-[28px] max-[500px]:leading-[34px]">
        {t("title")}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="space-y-2 flex-1">
          <Controller
            name="name"
            control={control}
            rules={{
              required: t("errors.nameRequired"),
              minLength: {
                value: 2,
                message: t("errors.nameMinLength"),
              },
              maxLength: {
                value: 20,
                message: t("errors.nameMaxLength"),
              },
            }}
            render={({ field: { onChange, value } }) => (
              <FloatingInput
                value={value || ""}
                onChange={onChange}
                smallLabel={t("nameLabel")}
                label={t("namePlaceholder")}
                type="text"
                error={errors.name?.message ?? false}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: t("errors.emailRequired"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("errors.emailInvalid"),
              },
            }}
            render={({ field: { onChange, value } }) => (
              <FloatingInput  
                value={value || ""}
                onChange={onChange}
                smallLabel={t("emailLabel")}
                label={t("emailPlaceholder")}
                type="email"
                inputMode="email"
                error={errors.email?.message ?? false}
              />
            )}
          />

          <Controller
            name="contact"
            control={control}
            rules={{
              required: t("errors.phoneRequired"),
              minLength: { value: 5, message: t("errors.phoneMinLength") },
            }}
            render={({ field: { onChange, value } }) => (
              <FloatingInput
                value={value || ""}
                onChange={onChange}
                smallLabel={t("phoneLabel")}
                label={t("phonePlaceholder")}
                error={errors.contact?.message ?? false}
              />
            )}
          />

          <Controller
            name="subscribe"
            control={control}
            rules={{
              required: t("errors.subscribeRequired"),
            }}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                checked={value || false}
                setChecked={onChange}
                text={
                  <span className="text-[14px] text-[#1C1C28] leading-tight">
                    {t("agreeToUpdates")}
                  </span>
                }
                centered
              />
            )}
          />
        </div>

        <div className="mt-auto pt-6">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isPending}
            disabled={!isFormComplete || isPending}
            className="mb-4"
          >
            {isPending ? t("submitting") : t("submitButton")}
          </Button>

          <p className="text-[14px] text-[#8E8E93] text-center leading-tight">
            {t("agreement")}{" "}
            <Link
              href={`/${locale}${ROUTES.DOCUMENTS}`}
              className="text-[#FF6B6B]"
              target="_blank"
            >
              {t("documents")}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
