import React from "react";
import WeatherList from "./WeatherList";

const Weather = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-[53px] items-center justify-between pb-5">
        <div>
          <span className="text-[22px] font-semibold ">날씨</span>
          <span className="m-2 text-xs">2024.04.15~2024.04.15</span>
        </div>
        <div className="flex items-center">
          <img
            className="h-[20px] w-[20px]"
            src="/images/refresh.svg"
            alt="refresh"
          />
          <span className="pl-1 text-xs">2024.04.20 19:30</span>
        </div>
      </div>
      <div className=" w-full rounded-3xl bg-white p-5 h-full">
        <WeatherList />
      </div>
    </div>
  );
};

export default Weather;
