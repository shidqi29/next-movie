import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchInput = ({
  placeholder,
  value,
  onChange,
  onSubmit,
}: SearchInputProps) => {
  return (
    <form className="flex" onSubmit={onSubmit}>
      <div className="relative flex">
        <input
          type="search"
          name="search"
          required
          aria-required
          aria-label="Search"
          placeholder={placeholder}
          className="w-full rounded-lg border-2 border-slate-500 bg-slate-800 py-2 pl-4 pr-10 text-slate-200 outline-none placeholder:text-slate-400 focus:text-slate-300 focus:placeholder:text-slate-300"
          onChange={onChange}
          value={value}
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center p-2"
        >
          <PiMagnifyingGlass size={24} className="text-slate-400" />
        </button>
      </div>
    </form>
  );
};
