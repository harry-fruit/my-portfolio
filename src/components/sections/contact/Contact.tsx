import { Form } from "@/components/sections/contact/form/Form";
import { FadeIn } from "@/components/shared/FadeIn";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div
      id="contact"
      className="bg-primary-100/25 dark:bg-slate-950/20 py-4 px-4 w-full min-h-screen flex flex-col items-center justify-center"
    >
      <FadeIn
        duration={2000}
        threshold={0.9}
        className="w-full lg:w-5/6 xl:w-4/5 2xl:w-5/6 flex flex-col items-center justify-center gap-10 md:gap-32 lg:gap-40 xl:gap-24"
      >
        <div
          id="contact-header"
          className="w-full flex flex-col items-center justify-center gap-1"
        >
          <div>
            <h1 className="text-center">
              <span className="text-primary-gradient">{t("title")}</span> 📫
            </h1>
          </div>
          <h3 className="text-center">{t("subTitle")}</h3>
        </div>
        <Form />
      </FadeIn>
    </div>
  );
};
