import style from "@/styles/button.module.scss";
import { RightArrow } from "@/components/icons/RightArrow";

type Props = {
    text: string;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
};

export const Button = ({ text, type="button", disabled }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${style.btn} flex justify-center items-center gap-4 uppercase`}
    >
      {text}
      <RightArrow className="block" width="30" height="30" />
    </button>
  );
};
