"use client";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import useGetRandomAnime from "./hooks/useGetRandomAnime";
import Description from "@/components/Description";
import MoreInfo from "@/components/MoreInfo";

function HomePage() {
  const { data, isLoading, refetch } = useGetRandomAnime();

  const bgImg = data?.data.images.jpg.large_image_url;

  return (
    <div className="w-full h-screen flex bg-gradient-to-tr from-black via-slate-800 to-black">
      <div className="w-[70%] h-screen flex flex-col">
        <div className="flex flex-row w-[100%] p-8 justify-center h-screen bg-no-repeat bg-contain bg-center">
          <button className="text-white" type="button" onClick={() => refetch}>
            <div
              onClick={() => refetch}
              className="hover:bg-slate-500 rounded-full w-16 h-16 flex justify-center items-center"
            >
              <FaLongArrowAltLeft />
            </div>
          </button>
          {isLoading ? (
            <div className="w-[80%] bg-no-repeat bg-center bg-loading"></div>
          ) : (
            <div
              style={{ backgroundImage: `url("${bgImg}")` }}
              className="w-[80%] bg-contain bg-no-repeat bg-center"
            ></div>
          )}
          <button
            className="text-white m-12"
            type="button"
            onClick={() => refetch()}
          >
            <div
              onClick={() => refetch()}
              className="hover:bg-slate-500 rounded-full w-16 h-16 flex justify-center items-center"
            >
              <FaLongArrowAltRight />
            </div>
          </button>
        </div>
        <div className="w-full h-[50%] flex">
          <div className="flex flex-col w-[50%]">
            <div className="flex flex-row gap-4 m-8">
              <MoreInfo title="Rating" info={data?.data.score} />
              <MoreInfo title="Release Date" info={data?.data.aired.string} />
            </div>
            <div className="flex flex-row gap-4 m-8">
              <MoreInfo title="Episodes" info={data?.data.episodes} />
              <MoreInfo title="Source" info={data?.data.source} />
            </div>
          </div>
          <div className="w-[50%] border-2 items-center justify-center flex mb-8 border-slate-300">
            {!data?.data.trailer.embed_url ? (
              <p className="text-white">No data avaliable</p>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={data?.data.trailer.embed_url}
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen">
        <Description title={data?.data.title} desc={data?.data.synopsis} />
      </div>
    </div>
  );
}

export default HomePage;
