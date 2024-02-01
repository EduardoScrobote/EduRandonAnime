"use client";

import useGetRandomAnime from "./hooks/useGetRandomAnime";

function HomePage() {
  const { data, isLoading, refetch } = useGetRandomAnime();

  const bgImg = data?.data.images.jpg.image_url;

  return (
    <div className="w-full h-screen flex bg-gradient-to-tr from-black via-slate-800 to-black">
      <div className="w-[70%] h-screen flex flex-col">
        <div className={`w-full h-[50%] bg-[url(${bgImg})] text-white`}>
          img+name+button(next / prev)
          <button onClick={() => refetch}>Hey clica</button>
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
