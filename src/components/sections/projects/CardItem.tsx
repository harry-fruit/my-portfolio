import style from "@/styles/project-card.module.scss";
import Image from "next/image";
import { RightArrow } from "@/components/icons/RightArrow";

type ImgOptions = {
  src: string;
  alt: string;
};

type Props = {
  className?: string;
  title: string;
  description: string;
  imgOptions: ImgOptions;
};

export const CardItem: React.FC<Props> = ({
  className,
  title,
  description,
  imgOptions,
}: Props) => {
  return (
    <div
      id="card-container"
      className={`w-[100vw] h-[600px] lg:w-[450px] relative flex flex-col items-center justify-center ${className}`}
    >
      <div
        id="card"
        className={`bg-slate-100 dark:bg-slate-800 w-[325px] h-[525px] border absolute rounded-xl overflow-hidden p-5 flex flex-col items-center justify-between ${style.card}`}
      >
        <div
          id="card-img"
          className="w-full h-1/2 flex flex-col items-center justify-center relative"
        >
          <Image
            src={imgOptions.src}
            alt={imgOptions.alt}
            className="rounded-xl object-cover"
            fill
          />
        </div>
        <div
          id="card-info"
          className="w-full h-1/2 grid grid-rows-[20%,75%] gap-[2%] mt-2"
        >
          <div
            id="card-header"
            className="w-full flex justify-between items-center "
          >
            <div id="card-title">
              <h2 className={`${style.cardTitle}`}>{title}</h2>
            </div>
            <div className={`p-2 rounded-full ${style.button}`}>
              <RightArrow width="20" height="20" className="text-gray-50" />
            </div>
          </div>
          <div id="card-description" className="text-base ">
            <p className="">{description}</p>
          </div>
        </div>
      </div>
      <div
        id="animated-card"
        className={`w-[325px] h-[525px] bg-primary-600 dark:bg-slate-700 absolute rounded-xl ${style.animatedCard}`}
      ></div>
      <div
        id="animated-card-2"
        className={`w-[325px] h-[525px] bg-primary-700 dark:bg-slate-950 absolute rounded-xl ${style.animatedCard}`}
      ></div>
    </div>
  );
};
