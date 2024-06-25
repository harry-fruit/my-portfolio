import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/section-header/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { Card } from "@/components/card/Card";
import { ResponsiveSlideGrid } from "@/components/shared/ResponsiveSlideGrid";
import { useTranslations } from "next-intl";
import { CardTagsContainer } from "@/components/card/tags/CardTagsContainer";
import { CardTag } from "@/components/card/tags/CardTag";
import { CardImage } from "@/components/card/CardImage";

export const Projects: React.FC = (): JSX.Element => {
  const t = useTranslations("projects");
  return (
    <FadeIn threshold={0.25}>
      <section
        id={"projects"}
        className={"flex flex-col items-center py-6 md:py-8 lg:pb-36 lg:pt-20"}
      >
        <SectionHeaderContainer>
          <SectionTitle
            text={t("title")}
            className="text-primary-gradient dark:text-slate-50"
          />
          <SectionSubtitle text={t("subTitle")} />
        </SectionHeaderContainer>
        <div
          id="container"
          className="w-full h-full lg:w-[85%] xl:w-[95%] 2xl:w-[85%] 3xl:w-[70%]"
        >
          <ResponsiveSlideGrid>
            <Card title="Project 1">
              <CardTagsContainer>
                <CardTag text="Python" type="python" />
                <CardTag text="SQL" type="sql" />
                <CardTag text="Tailwind" type="tailwind" />
                <CardTag text="Tailwind" type="tailwind" />
              </CardTagsContainer>
              <CardImage src="/beach.jpg" alt="project" />
            </Card>
            <Card title="Project 2">
              <CardTagsContainer>
                <CardTag text="Python" type="python" />
                <CardTag text="SQL" type="sql" />
                <CardTag text="Tailwind" type="tailwind" />
                <CardTag text="Tailwind" type="tailwind" />
              </CardTagsContainer>
              <CardImage src="/beach.jpg" alt="project" />
            </Card>
            <Card title="Project 3">
              <CardTagsContainer>
                <CardTag text="Python" type="python" />
                <CardTag text="SQL" type="sql" />
                <CardTag text="Tailwind" type="tailwind" />
                <CardTag text="Tailwind" type="tailwind" />
              </CardTagsContainer>
              <CardImage src="/beach.jpg" alt="project" />
            </Card>
            <Card title="Project 4">
              <CardTagsContainer>
                <CardTag text="Python" type="python" />
                <CardTag text="SQL" type="sql" />
                <CardTag text="Tailwind" type="tailwind" />
                <CardTag text="Tailwind" type="tailwind" />
              </CardTagsContainer>
              <CardImage src="/beach.jpg" alt="project" />
            </Card>
            <Card title="Project 5">
              <CardTagsContainer>
                <CardTag text="Python" type="python" />
                <CardTag text="SQL" type="sql" />
                <CardTag text="Tailwind" type="tailwind" />
                <CardTag text="Tailwind" type="tailwind" />
              </CardTagsContainer>
              <CardImage src="/beach.jpg" alt="project" />
            </Card>
          </ResponsiveSlideGrid>
        </div>
      </section>
    </FadeIn>
  );
};
