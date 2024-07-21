import { ReactNode} from "react";

type ResumeLayoutProps = { children: ReactNode };

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center md:py-8 md:px-8">
      {children}
    </main>
  );
}
