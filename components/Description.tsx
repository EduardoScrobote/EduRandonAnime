import React from "react";

type AnimeDescription = {
  title?: string;
  desc?: string | null;
};

function Description({ title, desc }: AnimeDescription) {
  return (
    <div className="w-[100%] text-center h-screen flex flex-col items-center text-white">
      <div className="w-[65%] mt-32">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-16">{!desc ? "No data avaliable" : desc}</p>
      </div>
    </div>
  );
}

export default Description;
