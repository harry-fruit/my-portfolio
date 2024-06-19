import Image from "next/image";
import style from "@/styles/about.module.scss";
import { useTranslations } from "next-intl";
import { LineSplit } from "@/components/shared/LineSplit";
import { FadeIn } from "@/components/shared/FadeIn";

export const About: React.FC = (): JSX.Element => {
  const t = useTranslations("about");
  return (
    <FadeIn>
      <section
        id={"about"}
        className={`w-full min-h-screen py-12 px-2 md:px-6 md:py-4 md:min-h-[80vh] lg:min-h-[55vh] lg:py-28 lg:px-20 xl:px-36 xl:py-44 2xl:min-h-[80vh] 2xl:px-64 2xl:py-52 ${style.aboutContainer}`}
      >
        <div
          id="header-wrapper"
          className={`${style.header} flex flex-col justify-center items-center relative`}
        >
          <h2 title={t("title")} className="text-3xl w-full text-center md:text-start font-bold text-gray-800 dark:text-gray-50 text-primary-gradient apply-dark">
            {t("title")}
          </h2>
          <h4
            className={
              "text-xl py-4 text-center md:text-start font-semibold text-gray-600 dark:text-gray-300"
            }
            title={t("subTitle")}
          >
            {t("subTitle")}
          </h4>
          <LineSplit className={"absolute bottom-0 md:left-0"} />
        </div>
        <div
          id="text-wrapper"
          className={`${style.txt} flex flex-col justify-center gap-2 md:mt-4`}
        >
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            {t("firstParagraph")}
          </p>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            {t("secondParagraph")}
          </p>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            {t("thirdParagraph")}
          </p>
        </div>
        <div
          id="imageWrapper"
          className={`w-full h-full relative ${style.picture} flex flex-col items-center justify-center`}
        >
          <Image
            src="/myself2.jpg"
            alt="Picture from Isaque Duarte"
            height={300}
            width={300}
            className="rounded-full object-cover w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]"
          />
        </div>
      </section>
    </FadeIn>
  );
};
