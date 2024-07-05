"use client";

import style from "@/styles/navbar/navbar.module.scss";
import { MenuButton } from "./MenuButton";
import { useState } from "react";
import { ProjectIcon } from "../icons/ProjectIcon";
import Link from "next/link";

export const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log(isActive);

  return (
    <nav className={`${style.navbar} ${isActive ? style.active : ""}`}>
      <header className={style.header}>
        <ProjectIcon width="40" height="40" className="text-white" />
        <MenuButton
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </header>
      <div className={`${style.content} ${isActive ? style.active : ""}`}>
        <section className={style.navigation}>
          <ul>
            <li>
              <Link href={"#about"}>About</Link>
            </li>
            <li>
              <Link href={"#experiences"}>Experiences</Link>
            </li>
            <li>
              <Link href={"#projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"#todo"}>My résumé</Link>
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
        <section className={style.socials}>
          <ul>
            <li>
              <Link href={"https://github.com/harry-fruit"}>GH</Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
              >
                LN
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};
