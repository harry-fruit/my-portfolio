"use client";

import style from "@/styles/navbar/navbar.module.scss";
import { MenuButton } from "./MenuButton";
import { useState } from "react";
import { ProjectIcon } from "../icons/ProjectIcon";
import Link from "next/link";


type Props = {
  locale: string;
};

export const Navbar = ({ locale }:Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`${style.navbar} ${isActive ? style.active : ""}`}>
      <header className={style.header}>
        <ProjectIcon width="40" height="40" className="text-white" />
        <MenuButton
          isActive={isActive}
          onClick={toggleMenu}
        />
      </header>
      <div className={`${style.content} ${isActive ? style.active : ""}`}>
        <section className={style.navigation}>
          <ul>
            <li>
              <Link href={"#about"} onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href={"#experiences"} onClick={toggleMenu}>Experiences</Link>
            </li>
            <li>
              <Link href={"#projects"} onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link href={`/${locale}/resume`} target="_blank">My résumé</Link>
            </li>
          </ul>
        </section>
        <section className={style.getInTouch}>
          <h2>Say Hello</h2>
          <ul>
            <li>
              <Link href="mailto:isaqueduarte17@gmail.com">E-Mail</Link>
            </li>
          </ul>
        </section>
      </div>
      <section className={style.socials}>
        <ul>
          <li>
            <Link title={"My Github"} href={"https://github.com/harry-fruit"} target="_blank">GH</Link>
          </li>
          <li>
            <Link
              title={"My LinkedIn"}
              href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
              target="_blank"
            >
              LN
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
