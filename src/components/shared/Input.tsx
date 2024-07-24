import style from "@/styles/components/input.module.scss";
import { ValidationError } from "@formspree/react";
import {
  FieldValues,
  SubmissionError,
  SubmissionSuccess,
} from "@formspree/core";

type StateProps = {
  errors: SubmissionError<FieldValues> | null;
  result: SubmissionSuccess | null;
  submitting: boolean;
  succeeded: boolean;
};

type Props = {
  id: string;
  type: "text" | "email";
  required?: boolean;
  className?: string;
  name: string;
  state: StateProps;
  placeholder: string;
};

export const Input = ({
  type = "text",
  required = false,
  className = "",
  name,
  state,
  placeholder,
}: Props) => {
  return (
    <div className={`${style.formControl} ${className}`}>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className={`${style.input} ${style.inputAlt}`}
        name={name}
      />
      <ValidationError prefix={type} field={name} errors={state.errors} />
      <span className={`${style.inputBorder} ${style.inputBorderAlt}`}></span>
    </div>
  );
};
