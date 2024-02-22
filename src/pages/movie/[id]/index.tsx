import React from "react";

import { axiosInstance } from "@/lib/axios";
import { Movie } from "@/types";
import { ImagePoster } from "@/components/atoms";
import { formattedCurrency, formattedDate, getDuration } from "@/utils";
import Link from "next/link";

export default function MovieDetail({ data }: { data: Movie }) {
  const details = [
    {
      title: "Release Date",
      value: formattedDate(data.release_date),
    },
    {
      title: "Director",
      value: data.credits.crew
        .filter((crew) => crew.job === "Director")
        .map((director) => director.name)
        .join(", "),
    },
    {
      title: "Revenue",
      value: data.revenue ? formattedCurrency(data.revenue) : "N/A",
    },
    {
      title: "Status",
      value: data.status,
    },
    {
      title: "Runtime",
      value: getDuration(data.runtime),
    },
    {
      title: "Budget",
      value: data.budget ? formattedCurrency(data.budget) : "N/A",
    },
    {
      title: "Production",
      value: data.production_companies
        .map((company) => company.name)
        .join(", "),
    },
  ];

  return (
    <>
      <article className="mt-10 grid grid-cols-[25%_1fr] gap-x-8">
        <ImagePoster poster_path={data.poster_path} title={data.title} />
        <section className="flex w-full flex-col">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <div className="mt-5 flex gap-2">
            {data.genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genre/${genre.id}`}
                className="rounded-full bg-primary px-3 py-1 text-sm text-background transition-all hover:bg-accent"
              >
                <span>{genre.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-2">
            <p>{data.overview}</p>
            <div className="mt-5">
              {details.map((detail) => (
                <div key={detail.title} className="grid grid-cols-[15%_1fr]">
                  <p>{detail.title}</p>
                  <p>{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { data } = await axiosInstance.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits",
    },
  });

  return {
    props: {
      data,
    },
  };
}
