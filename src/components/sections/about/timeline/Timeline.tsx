import style from "@/styles/experiences.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Timeline: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <div className="w-full sm:w-3/4 py-8 lg:py-6">
      <ul className={`${style.timeline} ${style.timelineCentered}`}>
        {children}
      </ul>
    </div>
  );
};
