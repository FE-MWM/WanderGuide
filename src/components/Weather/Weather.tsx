import React from "react";

const Weather = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[53px] flex justify-between items-center pb-5">
        <div>
          <span className="text-[22px] font-semibold ">날씨</span>
          <span className="text-xs m-2">2024.04.15~2024.04.15</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[20px] h-[20px]"
            src="/images/refresh.svg"
            alt="refresh"
          />
          <span className="text-xs pl-1">2024.04.20 19:30</span>
        </div>
      </div>
      <div className="bg-white w-full h-[calc(100%-53px)] rounded-3xl"></div>
    </div>
  );
};

export default Weather;
