import React from "react";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/organisms";

type AppShellProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// digunakan sebagai layout untuk semua halaman yang membungkus _app.tsx
export const AppShell = ({ children }: AppShellProps) => {
  return (
    <>
      <Navbar />
      <main
        className={`${poppins.className} relative mx-auto flex min-h-screen flex-col bg-slate-900 px-4 py-6 text-slate-200 md:px-8`}
      >
        {children}
      </main>
    </>
  );
};
