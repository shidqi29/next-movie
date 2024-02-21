import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

import { SearchInput } from "@/components/molecules";
import Image from "next/image";

export const Navbar = () => {
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

  return (
    <header className="bg-primary text-accent sticky top-0 z-10 w-full">
      <nav className="flex items-center justify-between px-10">
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
      </nav>
    </header>
  );
};
