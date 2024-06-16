import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/section-header/SectionHeader";
import { FadeIn } from "@/components/FadeIn";

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
      </section>
    </FadeIn>
  );
};
