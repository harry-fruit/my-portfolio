import style from "@/styles/experiences.module.scss";
import { FadeIn } from "@/components/shared/FadeIn";

type Props = {
  period: string;
};

export const TimelinePeriod: React.FC<Props> = ({
  period,
}: Props): JSX.Element => {
  return (
    <FadeIn className={`${style.timelineItem} ${style.period}`}>
      <li>
        <div className={style.timelineInfo}></div>
        <div className={style.timelineMarker}></div>
        <div className={style.timelineContent}>
          <h2
            className={`${style.timelineTitle} text-2xl text-gray-800 dark:text-gray-50 font-bold`}
          >
            {period}
          </h2>
        </div>
      </li>
    </FadeIn>
  );
};
