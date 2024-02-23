import { HeadMetaData } from "@/components/layouts";
import { MovieList } from "@/components/organisms/MovieList";
import { axiosInstance } from "@/lib/axios";
import { MovieResponse } from "@/types";

type HomeProps = {
  nowPlayingData: MovieResponse;
  popularData: MovieResponse;
};

export default function Home({ nowPlayingData, popularData }: HomeProps) {
  return (
    <>
      <HeadMetaData />
      <div className="flex flex-col gap-y-5">
        <MovieList
          data={nowPlayingData.results.slice(0, 8)}
          title="Now Playing"
          linkHref="/now-playing"
          label="See All"
        />
        <MovieList
          data={popularData.results.slice(0, 8)}
          title="Popular"
          linkHref="/popular"
          label="See All"
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data: nowPlayingData } =
    await axiosInstance.get("/movie/now_playing");
  const { data: popularData } = await axiosInstance.get("/movie/popular");
  return {
    props: {
      nowPlayingData,
      popularData,
    },
  };
}
