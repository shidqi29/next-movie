import { MovieCard } from "@/components/molecules";
import { axiosInstance } from "@/lib/axios";
import { Movie, MovieResponse } from "@/types";

export default function Home({ data }: { data: MovieResponse }) {

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.results.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
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
