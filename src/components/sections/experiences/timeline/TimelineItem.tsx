import style from "@/styles/experiences.module.scss";
import { FadeIn } from "@/components/shared/FadeIn";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const TimelineItem: React.FC<Props> = ({
  title,
  description,
  date,
}: Props): JSX.Element => {
  return (
    <FadeIn className={style.timelineItem}>
      <li>
        <div className={`${style.timelineInfo}`}>
          <span>{date}</span>
        </div>
        <div className={style.timelineMarker}></div>
        <div className={style.timelineContent}>
          <h3 className={`${style.timelineTitle}`}>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    </FadeIn>
  );
};
