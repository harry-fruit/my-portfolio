import { ValidationError } from "@formspree/react";
import {
  FieldValues,
  SubmissionError,
  SubmissionSuccess,
} from "@formspree/core";
import style from "@/styles/input.module.scss";

type StateProps = {
  errors: SubmissionError<FieldValues> | null;
  result: SubmissionSuccess | null;
  submitting: boolean;
  succeeded: boolean;
};
type Props = {
id: string;
  required?: boolean;
  className?: string;
  name: string;
  state: StateProps;
  placeholder: string;
};

export const TextArea = ({
  required = false,
  className = "",
  name,
  state,
  placeholder,
}: Props) => {
  return (
    <div className={`${style.formControl} ${className}`}>
      <textarea
        required={required}
        placeholder={placeholder}
        className={`${style.input} ${style.inputAlt} text-slate-800 dark:text-slate-50`}
        name={name}
        
      />
      <ValidationError prefix={"Message"} field={name} errors={state.errors} />
      <span className={`${style.inputBorder} ${style.inputBorderAlt}`}></span>
    </div>
  );
};
