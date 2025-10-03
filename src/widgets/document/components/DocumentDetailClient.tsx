"use client";
import { useParams } from "next/navigation";
import { useGetDocumentDetail } from "@/widgets/document/api/get-document-detail";
import { getLocalizedField } from "@/utils/localization";

interface DocumentDetailClientProps {
  slug: string;
}

export const DocumentDetailClient = ({ slug }: DocumentDetailClientProps) => {
  const { locale } = useParams();
  const currentLocale = (locale as string) ?? 'en';
  const { data } = useGetDocumentDetail(slug);

  return (
    <section className="container flex flex-col items-center pt-[120px]">
      <h1 className="text-7xl font-bold max-[640px]:text-3xl max-[640px]:leading-[35px] text-center">
        {getLocalizedField((data ?? {}) as Record<string, unknown>, 'title', currentLocale)}
      </h1>
      <div
        className="mt-14 max-w-[800px] space-y-10 text-lg leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: getLocalizedField((data ?? {}) as Record<string, unknown>, 'content', currentLocale),
        }}
      />
    </section>
  );
};
