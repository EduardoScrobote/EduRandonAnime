import React from "react";

type MoreInfoProp = {
  title?: string;
  info?: string;
};

function MoreInfo({ title, info }: MoreInfoProp) {
  return (
    <div className="w-64 h-32 flex flex-col p-6 rounded-md text-white bg-[#363846]">
      <p className="text-xl">{title}</p>
      <p className="mt-2">{!info ? "No data avaliable" : info}</p>
    </div>
  );
}

export default MoreInfo;
