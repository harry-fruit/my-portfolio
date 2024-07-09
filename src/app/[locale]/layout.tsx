import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
