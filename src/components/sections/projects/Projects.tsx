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
          "flex flex-col items-center py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16"
        }
      >
        <SectionHeaderContainer>
          <SectionTitle text="My projects" />
          <SectionSubtitle text="A few of my projects as professional and student" />
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
              // className="bg-green-600"
            />
            <CardItem
              title="Project 4"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
              // className="bg-green-600"
            />
            <CardItem
              title="Project 5"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
              // className="bg-green-600"
            />
            <CardItem
              title="Project 6"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure, quo provident vero explicabo ratione, veniam, accusamus molestias perspiciatis perferendis recusandae impedit ipsum eveniet amet quaerat fugit dolor. Dignissimos, laborum."
              imgOptions={{ src: "/beach.jpg", alt: "project" }}
              // className="bg-green-600"
            />
          </ResponsiveSlideGrid>
        </div>
      </section>
    </FadeIn>
  );
};
