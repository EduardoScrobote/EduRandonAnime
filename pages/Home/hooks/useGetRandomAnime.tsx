import { APIGet } from "@/services/api";
import { UseQueryResult, useQuery } from "react-query";

type AnimeDTO = {
  data: {
    images: {
      jpg: {
        image_url: string;
        large_image_url: string;
        small_image_url: string;
      };
      wbp: {
        image_url: string;
        large_image_url: string;
        small_image_url: string;
      };
    };
    synopsis?: string | null;
    title: string;
    score: string;
    aired: {
      string: string;
    };
    episodes: string;
    rating: string;
    source: string;
    trailer: {
      url: string;
      embed_url: string;
    };
  };
};

const useGetRandomAnime = (): UseQueryResult<AnimeDTO, unknown> => {
  return useQuery("anime", () => APIGet<AnimeDTO>("/random/anime?sfw"));
};

export default useGetRandomAnime;
