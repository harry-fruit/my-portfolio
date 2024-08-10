"use client";

import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Button } from "../contact/form/Button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import style from "@/styles/portfolio/landing/intro.module.scss";
import WordCloud from "react-wordcloud";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const words = [
  { text: "Full-stack", value: 100 },
  { text: "React", value: 8 },
  { text: "TypeScript", value: 30 },
  { text: "HTML", value: 5 },
  { text: "CSS", value: 5 },
  { text: "Node.js", value: 7 },
  { text: "Go", value: 6 },
  { text: "Docker", value: 6 },
  { text: "AWS", value: 5 },
  { text: "Azure", value: 5 },
  { text: "Python", value: 30 },
  { text: "Langchain", value: 6 },
  { text: "Tailwind", value: 6 },
  { text: "Next.js", value: 8 },
  { text: "Pandas", value: 6 },
  { text: "SQL Server", value: 20 },
  { text: "MongoDB", value: 6 },
];

export function Intro() {
  const t = useTranslations("introduction");

  return (
    <section id="introduction" className={style.container}>
      <div className={style.wrapper}>
        <div className={style.apresentation}>
          <h1>Isaque Duarte</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className={style.wordCloud}>
          <WordCloud
            words={words}
            options={{
              enableTooltip: false,
              rotations: 2,
              rotationAngles: [-90, 0],
              fontSizes: [40, 80],
              colors: ["#b248f0"],
              padding: 5,
            }}
          />
        </div>
        <div className={style.btns}>
          <Button
            text={t("btns.resume")}
            className={style.btn}
            href="/resume"
          />
          <Button
            text={t("btns.about")}
            styleType="outline"
            className={style.btn}
            href="/about"
          />
        </div>
        <div className={style.links}>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
            title={t("links.linkedInTitle")}
          >
            <LinkedinIcon />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/harry-fruit"}
            title={t("links.githubTitle")}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
