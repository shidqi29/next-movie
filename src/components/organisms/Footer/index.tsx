import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-20 bg-primary py-8 text-background">
      <p className="text-center">
        Made with ❤ by{" "}
        <Link
          href="https://github.com/shidqi29"
          target="_blank"
          rel="noreferrer"
          className="font-semibold transition-all hover:text-accent hover:underline"
        >
          Shidqi Amirul Haq
        </Link>
      </p>
    </footer>
  );
};
