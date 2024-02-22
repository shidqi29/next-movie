import React from "react";
import { Poppins } from "next/font/google";
import { Footer, Navbar } from "@/components/organisms";

type AppShellProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// digunakan sebagai layout untuk semua halaman yang membungkus _app.tsx
export const AppShell = ({ children }: AppShellProps) => {
  return (
    <>
      <Navbar />
      <main
        className={`${poppins.className} container relative mx-auto flex min-h-screen flex-col bg-background px-4 text-text md:px-8`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
