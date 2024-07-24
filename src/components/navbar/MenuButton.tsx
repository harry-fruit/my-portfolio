"use client";

import style from "@/styles/components/navbar/menu-button.module.scss";
import { useTranslations } from "next-intl";

type Props = {
  isActive?: boolean;
  onClick?: () => void;
};

export const MenuButton = ({ isActive, onClick }: Props) => {
  const t = useTranslations("navbar.menuButton");
  
  return (
    <div
      title={isActive ? t("close") : t("open")}
      className={`${style.menuButtonContainer} ${isActive ? style.active : ""}`}
      onClick={onClick}
    >
      <span className={style.bar} />
      <span className={style.bar} />
    </div>
  );
};
