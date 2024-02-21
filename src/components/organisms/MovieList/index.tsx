import React from "react";

import { MovieCard } from "@/components/molecules";
import { Movie } from "@/types";
import { Header } from "./header";

export type MovieListProps = {
  data: Movie[];
  title?: string;
  linkHref?: string;
  label?: string;
};

export const MovieList = ({ data, title, linkHref, label }: MovieListProps) => {
  return (
    <section className="flex w-full flex-col">
      <Header title={title} linkHref={linkHref} label={label} />
      <div className="grid grid-cols-4 gap-6">
        {data.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};
