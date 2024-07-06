import Link from "next/link";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { LineSplit } from "@/components/shared/LineSplit";
import { useTranslations } from "next-intl";

// TODO: Translate titles
export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer
      id="footer"
      className="w-full py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center bg-primary-700 dark:bg-slate-950/90"
    >
      <div
        id="social-media"
        className="flex flex-row items-center justify-center gap-5 md:gap-10 xl:gap-8"
      >
        <Link
          href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
          title="My LinkedIn Profile" 
          target="_blank"
        >
          <LinkedinIcon
            width="40"
            height="40"
            className="text-gray-200 hover:text-gray-50"
          />
        </Link>
        <Link
          href={"https://github.com/harry-fruit"}
          title="My Github Profile"
          target="_blank"
        >
          <GithubIcon width="40" height="40" className="text-gray-200" />
        </Link>
        <Link href={t("whatsappLink")} title="Whatsapp" target="_blank">
          <WhatsappIcon width="40" height="40" className="text-gray-200" />
        </Link>
      </div>
      <LineSplit
        alignCenter
        className="bg-primary-500/70 dark:bg-primary-500/60 w-2/6 mb-2 mt-4 lg:mt-6 lg:mb-4"
      />
      <p className="text-center px-8 text-gray-200 font-medium">
        {t("copyright")}
      </p>
    </footer>
  );
};
