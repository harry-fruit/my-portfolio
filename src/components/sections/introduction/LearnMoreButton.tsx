import Image from "next/image";
import style from "@/styles/introduction.module.scss";

export const LearnMoreButton: React.FC = (): JSX.Element => {
  return (
    <div id="learn-more" className="w-full absolute bottom-10 flex flex-col">
      <div
        id="wrapper"
        className="w-full h-full relative flex flex-col items-center justify-center"
      >
        <Image
          width={35}
          height={35}
          src={"/business_management_icon_white.svg"}
          alt="logo"
          className={`${style.learnMoreHoverEffect} learn-more-hover-effect z-50`}
        />
        <div
          id="textWrapper"
          className="opacity-0 flex flex-col items-center justify-center absolute"
        >
          <p className="text-md uppercase">learn more</p>
          <Image
            width={35}
            height={35}
            src="/chevron-down.svg"
            alt="Learn More Button"
          />
        </div>
      </div>
    </div>
  );
};
