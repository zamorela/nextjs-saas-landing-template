"use client";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/assets/helpers/routes";
import { ArrowIcon } from "@/assets/icon/ArrowIcon";
import { useGetDocuments } from "@/widgets/document/api/get-documents";
import { getLocalizedField } from "@/utils/localization";

export const DocumentsPageClient = () => {
  const tSEO = useTranslations("SEO.DocumentsPage");
  const { locale } = useParams();
  const currentLocale = (locale as string) || 'en';
  const { data } = useGetDocuments();

  return (
    <section className="container flex flex-col items-center pt-[120px]">
      <h1 className="text-7xl font-bold max-[640px]:text-3xl max-[640px]:leading-[35px] text-center">
        {tSEO("h1")}
      </h1>
      <ul className="max-[640px]: max-w-[800px] w-full pt-14">
        {data?.map((item) => (
          <li key={item.title}>
            <Link
              href={`${ROUTES.DOCUMENTS}/${item.slug}`}
              className="group flex justify-between items-center text-2xl leading-6 font-semibold py-8 cursor-pointer border-b-[1px] border-[#C4C4CE] hover:border-[#1c1c28] transition-colors duration-300"
            >
              {getLocalizedField(item as unknown as Record<string, unknown>, 'title', currentLocale)}
              <ArrowIcon classNamePath="fill-[#C4C4CE] group-hover:fill-[#1c1c28] transition-colors duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}; 