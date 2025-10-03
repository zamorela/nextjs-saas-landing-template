import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { faqData } from "@/data/faq";
import { transformDataForLocalization } from "@/utils/localization";
import { LocalizedEntity } from "@/types/common";

const getFaq = async (locale: string) => {
  const transformedData = transformDataForLocalization(
    faqData as unknown as LocalizedEntity[],
    locale
  );
  return Promise.resolve(transformedData);
};

export const useGetFaq = () => {
  const { locale } = useParams();
  const currentLocale = (locale as string) || "en";

  return useQuery({
    queryKey: ["getFaq", currentLocale],
    queryFn: () => getFaq(currentLocale),
    retry: false,
  });
};
