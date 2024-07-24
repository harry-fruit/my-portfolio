import style from "@/styles/components/button.module.scss";
import { RightArrow } from "@/components/icons/RightArrow";

type Props = {
    text: string;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    className?: string;
};

export const Button = ({ text, type="button", disabled, className="" }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${style.btn} flex justify-center items-center gap-4 uppercase ${className}`}
    >
      {text}
      <RightArrow className="block" width="30" height="30" />
    </button>
  );
};
