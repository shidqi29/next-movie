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
        <button
          type="submit"
          className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center justify-center p-2"
        >
          <PiMagnifyingGlass size={24} className="text-primary" />
        </button>
        <input
          type="search"
          name="search"
          required
          aria-required
          aria-label="Search"
          placeholder={placeholder}
          className="w-full rounded-full bg-background py-1 pl-10 pr-4 text-text outline-none placeholder:text-sm placeholder:italic placeholder:text-slate-600 focus:text-text focus:placeholder:text-text"
          onChange={onChange}
          value={value}
        />
      </div>
    </form>
  );
};
