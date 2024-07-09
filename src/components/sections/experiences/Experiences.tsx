import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/section-header/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { Timeline } from "@/components/sections/experiences/timeline/Timeline";
import { TimelineItem } from "@/components/sections/experiences/timeline/TimelineItem";
import { TimelinePeriod } from "@/components/sections/experiences/timeline/TimelinePeriod";
import { useTranslations } from "next-intl";
import { DocumentIcon } from "@/components/icons/DocumentIcon";
import style from "@/styles/experiences.module.scss";
import Link from "next/link";

export const Experience = ({ locale }: { locale: string }): JSX.Element => {
  const t = useTranslations("experiences");
  return (
    <FadeIn threshold={0.05} className={style.experiencesContainer}>
      <section
        id={"experiences"}
        className={"flex flex-col items-center pt-4 md:pt-8 xl:pt-10"}
      >
        <SectionHeaderContainer className="px-4">
          <SectionTitle text={t("title")} className="text-primary-gradient" />
          <SectionSubtitle text={t("subTitle")} />
        </SectionHeaderContainer>
        <Timeline className="px-4">
          <TimelineItem
            date={t("card1date")}
            title={t("card1title")}
            description={t("card1description")}
          />
          <TimelineItem
            date={t("card2date")}
            title={t("card2title")}
            description={t("card2description")}
          />
          <TimelinePeriod period="2021" />
          <TimelineItem
            date={t("card3date")}
            title={t("card3title")}
            description={t("card3description")}
          />
          <TimelineItem
            date={t("card4date")}
            title={t("card4title")}
            description={t("card4description")}
          />
          <TimelinePeriod period="2022" />

          <TimelineItem
            date={t("card5date")}
            title={t("card5title")}
            description={t("card5description")}
          />
          <TimelinePeriod period="2023" />
          <TimelineItem
            date={t("card6date")}
            title={t("card6title")}
            description={t("card6description")}
          />
          <TimelinePeriod period={t("present")} />
          <TimelineItem
            date={t("card7date")}
            title={t("card7title")}
            description={t("card7description")}
          />
        </Timeline>
        <Link
          href={`/${locale}/resume`}
          target="_blank"
          className={`w-full ${style.resumeContainer}`}
          title={t("resume.title")}
        >
          <FadeIn
            threshold={0.25}
            className="w-full flex flex-col gap-3 justify-center items-center bg-primary-600 dark:bg-slate-950/90 py-12"
          >
            <DocumentIcon
              width="40"
              height="40"
              className="text-title-dark font-bold"
            />
            <p className="text-title-dark capitalize font-bold text-lg">
              {t("resume.text")}
            </p>
          </FadeIn>
        </Link>
      </section>
    </FadeIn>
  );
};
