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
  };
};

const useGetRandomAnime = (): UseQueryResult<AnimeDTO, unknown> => {
  return useQuery("anime", () => APIGet<AnimeDTO>("/random/anime"));
};

export default useGetRandomAnime;
