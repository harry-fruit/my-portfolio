import style from "@/styles/portfolio/about/about.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("about");
  return (
    <section className={style.about}>
      <div
        id="imageWrapper"
        className={`relative ${style.picture} flex flex-col items-center justify-center`}
      >
        <Image
          src="/myself2.jpg"
          alt="Picture from Isaque Duarte"
          height={300}
          width={300}
          className="rounded-full object-cover w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]"
        />
      </div>
      <div className={style.textsContainer}>
        <h1 title={t("title")} className="w-full text-center lg:text-start">
          <span className="text-primary-gradient">{t("title")}</span>{" "}
          <span className={style.wave}>👋</span>
        </h1>
        <h2>{t("subTitle")}</h2>
        <div className={style.paragraphs}>
          <p>{t("firstParagraph")}</p>
          <p>{t("secondParagraph")}</p>
          <p>{t("thirdParagraph")}</p>
        </div>
      </div>
    </section>
  );
}
