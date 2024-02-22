import React from "react";

import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";
import { HeadMetaData } from "@/components/layouts";

export default function PopularPage({ data }: { data: MovieResponse }) {
  return (
    <>
      <HeadMetaData title="Popular Movies" />
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
