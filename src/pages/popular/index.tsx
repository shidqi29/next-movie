import React from "react";

import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";

export default function PopularPage({ data }: { data: MovieResponse }) {
  return (
    <>
      <MovieList data={data.results} title="Popular" />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axiosInstance.get("/movie/popular");

  return {
    props: {
      data,
    },
  };
}
