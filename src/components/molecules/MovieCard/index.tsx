import Image from "next/image";
import Link from "next/link";
import React from "react";

import { formattedDate, getImageUrl } from "@/utils";
import { Movie } from "@/types";

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
      <Image
        src={getImageUrl(poster_path, "w500")}
        alt={`Poster of ${title}`}
        className="aspect-[4/6] h-full w-full rounded-lg duration-500 hover:brightness-75"
        title={title}
        width={1280}
        height={720}
      />
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
