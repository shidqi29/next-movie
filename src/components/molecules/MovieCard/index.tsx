import Image from "next/image";
import Link from "next/link";
import React from "react";

import { formattedDate, getImageUrl } from "@/utils";
import { Movie } from "@/types";

export interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { id, title, backdrop_path, release_date } = movie;

  return (
    <Link
      href={`/movie/${id}`}
      className="group flex w-full flex-col transition duration-300 ease-in-out hover:scale-105"
    >
      <Image
        src={getImageUrl(backdrop_path, "w500")}
        alt={`Poster of ${title}`}
        className="aspect-[14/8] h-full w-full rounded-lg object-cover duration-500 hover:brightness-75"
        title={title}
        width={1280}
        height={720}
      />
      <div className="px-1 py-2">
        <h3
          className="text-text group-hover:text-primary -mb-1 truncate font-bold"
          title={title}
        >
          {title}
        </h3>
        <span className="text-text text-sm font-medium tracking-tight">
          {formattedDate(release_date)}
        </span>
      </div>
    </Link>
  );
};
