"use client";

import Link from "next/link";
import style from "@/styles/navbar/navbar.module.scss";
import { MenuButton } from "./MenuButton";
import { useState } from "react";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";

type Props = {
  locale: string;
};

export const Navbar = ({ locale }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const t = useTranslations("navbar");

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`${style.navbar} ${isActive ? style.active : ""}`}>
      <header className={`${style.header}`}>
        <ProjectIcon width="40" height="40" className="text-white" />
        <MenuButton isActive={isActive} onClick={toggleMenu} />
      </header>
      <div className={`${style.content} ${isActive ? style.active : ""}`}>
        <section className={style.navigation}>
          <ul>
            <li>
              <Link href={"#about"} onClick={toggleMenu}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href={"#experiences"} onClick={toggleMenu}>
                {t("experiences")}
              </Link>
            </li>
            <li>
              <Link href={"#projects"} onClick={toggleMenu}>
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/resume`} target="_blank">
                {t("resume")}
              </Link>
            </li>
          </ul>
        </section>
        <section className={style.getInTouch}>
          <h2>{t("sayHello")}</h2>
          <ul>
            <li>
              <Link href="mailto:isaqueduarte17@gmail.com">E-Mail</Link>
            </li>
          </ul>
        </section>
        <section className={style.accessibility}>
          <h2>Accessibility</h2>
          <ul>
            <li>
              <ThemeToggle/>
            </li>
          </ul>
        </section>
      </div>
      <section className={`${style.socials}`}>
        <ul>
          <li>
            <Link
              title={t("links.githubTitle")}
              href={"https://github.com/harry-fruit"}
              target="_blank"
            >
              GH
            </Link>
          </li>
          <li>
            <Link
              title={t("links.linkedInTitle")}
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