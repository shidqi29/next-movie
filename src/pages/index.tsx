import { MovieList } from "@/components/organisms/MovieList";
import { axiosInstance } from "@/lib/axios";

export default function Home({ nowPlayingData, popularData }: any) {
  return (
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
