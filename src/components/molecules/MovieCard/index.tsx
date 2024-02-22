import Link from "next/link";
import React from "react";

import { formattedDate } from "@/utils";
import { Movie } from "@/types";
import { ImagePoster } from "@/components/atoms";

export interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { id, title, poster_path, release_date } = movie;

  return (
    <Link
      href={`/movie/${id}`}
      className="group flex w-full flex-col transition-all duration-300 ease-in-out"
    >
      <ImagePoster poster_path={poster_path} title={title} />
      <div className="px-1 py-2">
        <h3
          className="-mb-1 truncate font-bold text-text group-hover:text-primary"
          title={title}
        >
          {title}
        </h3>
        <span className="text-sm font-medium tracking-tight text-text">
          {formattedDate(release_date)}
        </span>
      </div>
    </Link>
  );
};
