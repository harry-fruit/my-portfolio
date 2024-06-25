import style from "@/styles/card/tags.module.scss";

export type CardTagProps = {
  text: string;
  type:
    | "python"
    | "javascript"
    | "typescript"
    | "react"
    | "nextjs"
    | "sass"
    | "css"
    | "html"
    | "sql"
    | "tailwind"
    | "new"
    | "default";
};

export const CardTag = ({ text, type }: CardTagProps) => {
  return <li className={`${style[type]} ${style.tag}`}>{text}</li>;
};
