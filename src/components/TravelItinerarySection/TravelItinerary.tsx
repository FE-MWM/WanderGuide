import React from "react";

const TravelItinerary = () => {
  return (
    <div className="w-full h-full flex justify-between mb-[30px]">
      <div className="text-4xl font-bold">도쿄 D-10</div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <img
            className="w-[24px] h-[24px] mr-2"
            src="/images/user.svg"
            alt="write"
          />
          <span className="text-sm">신애, 선주, 수정</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[24px] h-[24px] mr-2"
            src="/images/calendar.svg"
            alt="write"
          />
          <span className="text-sm">2024.05.13 ~ 2024.05.20</span>
        </div>
      </div>
    </div>
  );
};

export default TravelItinerary;
