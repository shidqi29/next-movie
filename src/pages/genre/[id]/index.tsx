import { useRouter } from "next/router";
import React from "react";

import { HeadMetaData } from "@/components/layouts";
import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse, genresMovie } from "@/types";

export default function GenreIdPage({
  data,
  genre,
}: {
  data: MovieResponse;
  genre: genresMovie;
}) {
  const router = useRouter();

  const { id } = router.query;

  const getGenreName = genre?.genres?.find((g) => g.id === Number(id))?.name;

  return (
    <>
      <HeadMetaData title={getGenreName} />
      <MovieList data={data.results} title={`Movie Genre: ${getGenreName}`} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { data } = await axiosInstance.get(`/discover/movie`, {
    params: {
      with_genres: id,
    },
  });
  const { data: genre } = await axiosInstance.get(`/genre/movie/list`);

  return {
    props: {
      data,
      genre,
    },
  };
}
