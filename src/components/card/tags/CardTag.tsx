import style from "@/styles/card/tags.module.scss";

type Props = {
  text: string;
  type:
    | "python"
    | "javascript"
    | "typescript"
    | "react"
    | "nextjs"
    | "sass"
    | "sql"
    | "tailwind"
    | "new"
    | "default";
};

export const CardTag = ({ text, type }: Props) => {
  return <li className={`${style[type]} ${style.tag}`}>{text}</li>;
};
