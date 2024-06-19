import { Form } from "@/components/sections/contact/form/Form";
import { FadeIn } from "@/components/shared/FadeIn";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div
      id="contact"
      className="py-4 px-4 w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-20 md:w-4/5 xl:w-3/5 2xl:w-3/6"
    >
      <FadeIn duration={2000} threshold={0.9}>
        <div
          id="contact-header"
          className="w-full flex flex-col items-center justify-center gap-1"
        >
          <h1 className="text-4xl text-center font-bold text-primary-gradient apply-dark">
            {t("title")}
          </h1>
          <h3 className="text-lg text-center">
            {t("subTitle")}
          </h3>
        </div>
      </FadeIn>
      <Form />
    </div>
  );
};
