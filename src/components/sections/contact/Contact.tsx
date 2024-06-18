import { Form } from "@/components/sections/contact/form/Form";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center 0"
    >
      <div id="contact-header">
        <h1>Send me a message!</h1>
        <h3>
          Got a question or proposal, or just want to say hello? Go ahead.
        </h3>
      </div>
      <Form />
    </div>
  );
};
