import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/section-header/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { Timeline } from "@/components/sections/about/timeline/Timeline";
import { TimelineItem } from "@/components/sections/about/timeline/TimelineItem";
import { TimelinePeriod } from "@/components/sections/about/timeline/TimelinePeriod";

export const Experience: React.FC = (): JSX.Element => {
  return (
    <section
      id={"experience"}
      className={
        "flex flex-col items-center py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-2 md:px-6 lg:px-20 xl:px-36 2xl:px-52"
      }
    >
      <FadeIn>
        <SectionHeaderContainer>
          <SectionTitle text="My experiences" />
          <SectionSubtitle text="A few of my experiences as professional and student" />
        </SectionHeaderContainer>
      </FadeIn>
      <Timeline>
        <TimelineItem date="February 12, 2022" title="Event Title" description="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque." />
        <TimelineItem date="February 23, 2022" title="Event Title" description="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque." />
        <TimelinePeriod period="March 2022" />
        <TimelineItem date="March 02, 2022" title="Event Title" description="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque." />
        <TimelineItem date="March 28, 2022" title="Event Title" description="Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque." />
      </Timeline>
    </section>
  );
};
