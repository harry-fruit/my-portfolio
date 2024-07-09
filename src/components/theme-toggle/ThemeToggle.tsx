"use client";

import style from "@/styles/theme-toggle.module.scss";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("navbar");
  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <label htmlFor="theme" className={style.theme}>
      <span className={style.themeToggleWrap}>
        <input
          id="theme"
          className={style.themeToggle}
          type="checkbox"
          role="switch"
          name="theme"
          value={theme}
          checked={theme == "dark"}
          onChange={toggle}
          title={
            theme === "dark"
              ? t("accessibility.theme.light")
              : t("accessibility.theme.dark")
          }
        />
        <span className={style.themeFill}></span>
        <span className={style.themeIcon}>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
          <span className={style.themeIconPart}></span>
        </span>
      </span>
    </label>
  );
};
