import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/section-header/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { CardItem } from "@/components/CardItem";
import { ResponsiveSlideGrid } from "../ResponsiveSlideGrid";

export const Projects: React.FC = (): JSX.Element => {
  return (
    <FadeIn>
      <section
        id={"projects"}
        className={
          "flex flex-col items-center py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16"
        }
      >
        <SectionHeaderContainer>
          <SectionTitle text="My projects" />
          <SectionSubtitle text="A few of my projects as professional and student" />
        </SectionHeaderContainer>
        <div id="container" className="w-full h-screen">
          <ResponsiveSlideGrid>
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </ResponsiveSlideGrid>
        </div>
      </section>
    </FadeIn>
  );
};
