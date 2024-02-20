import Link from "next/link";
import { PiFilmSlate } from "react-icons/pi";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

import { SearchInput } from "@/components/molecules";

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
    <header className="sticky top-0 z-10 w-full bg-gray-900 py-2 text-slate-200 shadow shadow-slate-500">
      <nav className="flex items-center justify-between px-10 py-4">
        <Link href="/" className="flex items-center gap-x-2">
          <PiFilmSlate size={28} />
          <span className="text-xl font-medium">Next Movie</span>
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
