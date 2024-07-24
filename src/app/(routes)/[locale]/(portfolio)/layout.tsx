import "@/styles/globals.scss";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export default async function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
