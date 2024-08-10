import style from "@/styles/components/layouts/portfolio-layout.module.scss";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export default async function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}
