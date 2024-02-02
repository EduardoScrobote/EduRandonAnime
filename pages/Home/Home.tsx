"use client";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import useGetRandomAnime from "./hooks/useGetRandomAnime";

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
          <div className="bg-yellow-400 w-[50%]">+info</div>
          <div className="bg-purple-400 w-[50%]">+promovideo</div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-blue-200">Description</div>
    </div>
  );
}

export default HomePage;

{
  /* <div style={{ backgroundImage: `url("${bgImg}")` }}>
img+name+button(next / prev)
<button onClick={() => refetch}>Hey clica</button>
</div> */
}
