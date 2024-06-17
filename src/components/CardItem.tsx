import style from "@/styles/project-card.module.scss";

import Image from "next/image";
import { RightArrow } from "@/components/icons/RightArrow";

export const CardItem: React.FC = (): JSX.Element => { 
  return (
    <div
      id="card-container"
      className="w-[100vw] h-[600px] lg:w-[450px] relative flex flex-col items-center justify-center "
    >
      <div
        id="card"
        className={`bg-slate-100 dark:bg-slate-900 w-[325px] h-[525px] border absolute rounded-3xl overflow-hidden p-5 flex flex-col items-center justify-between ${style.card}`}
      >
        <div
          id="card-img"
          className="w-full h-1/2 flex flex-col items-center justify-center relative"
        >
          <Image
            src="/beach.jpg"
            alt="project"
            className="rounded-3xl object-cover"
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
            <div id="card-title" className="text-2xl">Project name</div>
            <div className="bg-slate-800 p-2 rounded-full">
                <RightArrow width="20" height="20" className="text-gray-50"/>
            </div>
          </div>
          <div id="card-description" className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure,
            quo provident vero explicabo ratione, veniam, accusamus molestias
            perspiciatis perferendis recusandae impedit ipsum eveniet amet
            quaerat fugit dolor. Dignissimos, laborum.
          </div>
        </div>
      </div>
      <div id="animated-card" className={`w-[325px] h-[525px] dark:bg-slate-600 absolute rounded-3xl ${style.animatedCard}`}></div>
    </div>
  );
};
