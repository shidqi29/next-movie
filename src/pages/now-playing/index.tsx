import React from "react";

import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";
import { HeadMetaData } from "@/components/layouts";

export default function NowPlayingPage({ data }: { data: MovieResponse }) {
  return (
    <>
      <HeadMetaData title="Now Playing Movies" />
      <MovieList data={data.results} title="Now Playing" />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axiosInstance.get("/movie/now_playing");

  return {
    props: {
      data,
    },
  };
}
