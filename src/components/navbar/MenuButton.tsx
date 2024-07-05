"use client";

import style from "@/styles/navbar/menu-button.module.scss";

type Props = {
    isActive?: boolean;
    onClick?: () => void;
}

export const MenuButton = ({ isActive, onClick }: Props) => {
  return (
    <div className={`${style.menuButtonContainer} ${isActive ? style.active : ""}`} onClick={onClick}>
        <span className={style.bar}/>
        <span className={style.bar}/>
    </div>
  );
};