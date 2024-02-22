import React from "react";

import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";
import { HeadMetaData } from "@/components/layouts";

export default function UpcomingPage({ data }: { data: MovieResponse }) {
  return (
    <>
      <HeadMetaData title="Upcoming Movies" />
      <MovieList data={data.results} title="Upcoming" />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axiosInstance.get("/movie/upcoming");

  return {
    props: {
      data,
    },
  };
}
