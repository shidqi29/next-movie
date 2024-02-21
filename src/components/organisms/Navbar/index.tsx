import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { PiFire, PiPlayCircle } from "react-icons/pi";
import { BsMegaphone } from "react-icons/bs";

import { SearchInput } from "@/components/molecules";
import { useStickyNav } from "@/hooks";

export const Navbar = () => {
  const { sticky, stickyRef } = useStickyNav();

  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const [query, setQuery] = useState(params.get("query") || "");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") return; // prevent submitting the form with empty query
    if (query !== "") {
      params.set("query", query);
      router.push(`/search?${params.toString()}`);
    } else {
      params.delete("query");
    }
  };

  const navLink = [
    {
      label: "Now Playing",
      href: "/now-playing",
      icon: <PiPlayCircle />,
    },
    {
      label: "Popular",
      href: "/popular",
      icon: <PiFire />,
    },
    {
      label: "Upcoming",
      href: "/upcoming",
      icon: <BsMegaphone />,
    },
  ];

  return (
    <header className="bg-primary w-full">
      <div className="flex items-center justify-between px-10">
        <Link href="/" className="h-24 w-52">
          <Image
            src="https://21cineplex.com//theme/v5/assets/img/logo.png"
            alt="Cinema XXI"
            width={1280}
            height={720}
            className="w-full"
          />
        </Link>
        <SearchInput
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={handleSearch}
          value={query}
        />
      </div>
      <nav
        ref={stickyRef}
        className={`bg-background text-primary ${sticky && "fixed top-0"} z-10 w-full`}
      >
        <ul
          className={`flex items-center gap-x-4 px-12 py-5 h-${sticky ? stickyRef.current?.clientHeight : 0}`}
        >
          {navLink.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-accent flex items-center gap-x-1 transition-all"
              >
                <span className="text-2xl font-semibold">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
