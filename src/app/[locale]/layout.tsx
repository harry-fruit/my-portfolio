import "@/styles/globals.scss";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Isaque Duarte | Portfolio",
  description: "My Portfolio",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-900/95">
        <Toaster position="bottom-center" />
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
