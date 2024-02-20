import React from "react";
import { Poppins } from "next/font/google";

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
      <main
        className={`${poppins.className} relative mx-auto flex min-h-screen flex-col px-4 md:px-8`}
      >
        {children}
      </main>
    </>
  );
};
