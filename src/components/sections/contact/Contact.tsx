import { Form } from "@/components/sections/contact/form/Form";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="py-4 px-4 w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-20 md:w-4/5 xl:w-3/5 2xl:w-3/6"
    >
      <div id="contact-header" className="w-full flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl text-center font-bold">Send me a message</h1>
        <h3 className="text-lg text-center">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h3>
      </div>
      <Form />
    </div>
  );
};
