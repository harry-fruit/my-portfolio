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

export const Experience: React.FC = (): JSX.Element => {
  const t = useTranslations("experiences");
  return (
    <section
      id={"experiences"}
      className={
        "bg-primary-100/25 dark:bg-slate-950/20 flex flex-col items-center py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-2 md:px-6 lg:px-20 xl:px-36 2xl:px-52"
      }
    >
      <FadeIn threshold={0.25}>
        <SectionHeaderContainer>
          <SectionTitle text={t("title")} className="text-primary-gradient" />
          <SectionSubtitle text={t("subTitle")} />
        </SectionHeaderContainer>
      </FadeIn>
      <Timeline>
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
    </section>
  );
};
