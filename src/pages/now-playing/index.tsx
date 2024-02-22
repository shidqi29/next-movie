import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";
import React from "react";

export default function NowPlayingPage({ data }: { data: MovieResponse }) {
  return (
    <>
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
