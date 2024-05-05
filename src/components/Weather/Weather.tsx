import React from "react";

const Weather = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[46px] flex justify-between items-center">
        <div>
          <span className="text-lg font-bold ">날씨</span>
          <span className="text-sm m-2">2024.04.15~2024.04.15</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[20px] h-[20px]"
            src="/images/refresh.svg"
            alt="refresh"
          />
          <span className="text-sm pl-1">2024.04.20 19:30</span>
        </div>
      </div>
      <div className="bg-white w-full h-[calc(100%-46px)]"></div>
    </div>
  );
};

export default Weather;
