"use client";

import style from "@/styles/contact/form.module.scss";
import { Input } from "@/components/shared/Input";
import { TextArea } from "@/components/shared/TextArea";
import { useForm } from "@formspree/react";
import { Button } from "@/components/sections/contact/form/Button";

export const Form = () => {
  const [state, handleSubmit] = useForm("mbjnneyo");

  if (state.succeeded) {
    return <p>Thanks for your message. I will get in touch as soon as possible! :&#41;</p>;
  }

  return (
    <div id="contact-form" className="w-full">
      <form onSubmit={handleSubmit} className={`w-full ${style.form}`}>
        <Input
          id="name"
          type="text"
          name="name"
          state={state}
          placeholder={"Enter your name"}
          className={`w-full ${style.inputName}`}
          required
        />
        <Input
          id="email"
          type="email"
          name="email"
          state={state}
          placeholder={"Enter your email"}
          className={`w-full ${style.inputEmail}`}
          required
        />
        <TextArea
          id="message"
          name="message"
          state={state}
          placeholder={"Write your message here"}
          className={`w-full ${style.inputMessage}`}
          required
        />
        <Button
          type={"submit"}
          text={"Submit"}
          disabled={state.submitting}
          className={`w-full mt-4 lg:mt-16 xl:mt-10 xl:w-[50%] 2xl:w-[35%] ${style.inputButton}`}
        />
      </form>
    </div>
  );
};
