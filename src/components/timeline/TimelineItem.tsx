import style from "@/styles/experiences.module.scss";
import { FadeIn } from "@/components/FadeIn";

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
        <div className={`${style.timelineInfo} text-gray-600`}>
          <span>{date}</span>
        </div>
        <div className={style.timelineMarker}></div>
        <div className={style.timelineContent}>
          <h3
            className={`${style.timelineTitle} text-lg font-semibold text-gray-600`}
          >
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </li>
    </FadeIn>
  );
};
