import type { Metadata } from "next";
import "@/styles/globals.scss";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Isaque Duarte | Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className="flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-900/95">
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
