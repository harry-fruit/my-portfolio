"use client";

import style from "@/styles/components/header.module.scss";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { MenuButton } from "@/components/navbar/MenuButton";
import { Navbar } from "@/components/navbar/Navbar";
import { useState } from "react";
import { Link } from "@/navigation";
import useHeader from "@/hooks/useHeader";

export const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const { isOnIntro } = useHeader();

  return (
    <header
      id="header"
      className={`${style.header} ${isOnIntro ? style.onIntro : ""} ${
        navbarActive ? style.navbarActive : ""
      }`}
    >
      <div className={style.headerIconsWrapper}>
        <Link href={"/"} className="text-white">
          <ProjectIcon width="40" height="40" className="text-white" />
        </Link>
        <MenuButton
          isActive={navbarActive}
          onClick={() => setNavbarActive(!navbarActive)}
        />
      </div>
      <div
        className={`${style.navbarWrapper} ${navbarActive ? style.active : ""}`}
      >
        <Navbar isActive={navbarActive} setIsActive={setNavbarActive} />
      </div>
    </header>
  );
};
