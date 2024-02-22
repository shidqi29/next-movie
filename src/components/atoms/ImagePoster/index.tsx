import { getImageUrl } from "@/utils";
import Image from "next/image";
import React from "react";

type ImagePosterProps = {
  poster_path: string;
  title: string;
};

export const ImagePoster = ({ poster_path, title }: ImagePosterProps) => {
  return (
    <Image
      src={getImageUrl(poster_path, "w500")}
      alt={`Poster of ${title}`}
      className="aspect-[4/6] h-full w-full rounded-lg duration-500 hover:brightness-75"
      title={title}
      width={1280}
      height={720}
    />
  );
};
