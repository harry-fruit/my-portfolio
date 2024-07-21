import style from "@/styles/introduction.module.scss";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { ChevronDown } from "@/components/icons/ChevronDown";
import { useTranslations } from "next-intl";

export const LearnMoreButton: React.FC = (): JSX.Element => {
  const t = useTranslations("introduction");
  return (
    <a
      id="learn-more"
      href="#about"
      title={t("learnMore")}
      className="w-full absolute bottom-10 flex flex-col"
    >
      <div
        id="wrapper"
        className="w-full h-full relative flex flex-col items-center justify-center"
      >
        <ProjectIcon
          width={"50px"}
          height={"50px"}
          className={`${style.learnMoreHoverEffect} learn-more-hover-effect z-[2] text-white`}
        />
        <div
          id="textWrapper"
          className="opacity-0 flex flex-col items-center justify-center absolute"
        >
          <p className="text-md uppercase text-white">{t("learnMore")}</p>
          <ChevronDown width="35px" height="35px" className="text-white" />
        </div>
      </div>
    </a>
  );
};
