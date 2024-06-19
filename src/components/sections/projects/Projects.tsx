import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/section-header/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardItem } from "@/components/sections/projects/CardItem";
import { ResponsiveSlideGrid } from "@/components/shared/ResponsiveSlideGrid";

export const Projects: React.FC = (): JSX.Element => {
  return (
    <FadeIn>
      <section
        id={"projects"}
        className={
          "flex flex-col items-center py-6 md:py-10 lg:pb-36 lg:pt-20"
        }
      >
        <SectionHeaderContainer>
          <SectionTitle text="Meus Projetos" className="text-primary-gradient dark:text-slate-50" />
          <SectionSubtitle text="Alguns dos meus projetos pessoais e profissionais" />
        </SectionHeaderContainer>
        <div id="container" className="w-full h-full lg:w-[70%] xl:w-[85%] 2xl:w-[70%]">
          <ResponsiveSlideGrid>
            <CardItem
              title="Project 1"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
            />
            <CardItem
              title="Project 2"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
            />
            <CardItem
              title="Project 3"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
            />
            <CardItem
              title="Project 4"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
            />
            <CardItem
              title="Project 5"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
            />
            <CardItem
              title="Project 6"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
            />
          </ResponsiveSlideGrid>
        </div>
      </section>
    </FadeIn>
  );
};
