"use client";

import { Input } from "@/components/shared/Input";
import { TextArea } from "@/components/shared/TextArea";
import { useForm } from "@formspree/react";
import { Button } from "@/components/sections/contact/form/Button";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjnneyo");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          name="email"
          state={state}
          placeholder={"Insert your e-mail"}
          required
        />
        <TextArea
          id="message"
          name="message"
          state={state}
          placeholder={"Write your message here"}
          required
        />
        <Button type={"submit"} text={"Submit"} disabled={state.submitting} />
      </form>
    </div>
  );
};
