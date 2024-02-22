import { useRouter } from "next/router";
import React from "react";

import { MovieList } from "@/components/organisms";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";
import { HeadMetaData } from "@/components/layouts";

export default function SearchPage({ data }: { data: MovieResponse }) {
  const router = useRouter();

  const { query } = router.query;

  return (
    <>
      <HeadMetaData title={`Search: ${query}`} />
      <MovieList data={data?.results || []} title={`Search Result: ${query}`} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const query = context.query.query;
  const { data } = await axiosInstance.get(`/search/movie?query=${query}`);

  return {
    props: {
      data,
    },
  };
}
