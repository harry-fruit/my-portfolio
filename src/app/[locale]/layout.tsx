import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/styles/globals.scss";
import { Footer } from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
