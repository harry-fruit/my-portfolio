import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("about");
  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("subTitle")}</h2>
      <p>{t("firstParagraph")}</p>
      <p>{t("secondParagraph")}</p>
      <p>{t("thirdParagraph")}</p>
    </>
  );
}
