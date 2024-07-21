"use client";

import style from "@/styles/header.module.scss";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { MenuButton } from "@/components/navbar/MenuButton";
import { Navbar } from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";

export const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [isOnIntro, setIsOnIntro] = useState(true);

  useEffect(() => {
    const intro = document.getElementById("introduction");

    if (!intro) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        setIsOnIntro(false);
        return;
      }

      setIsOnIntro(true);

    }, { threshold: 0 });

    observer.observe(intro);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header id="header" className={`${style.header} ${isOnIntro ? style.onIntro : ""} ${navbarActive ? style.navbarActive : ""}`}>  
      <div className={style.headerIconsWrapper}>
        <ProjectIcon width="40" height="40" className="text-white" />
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
