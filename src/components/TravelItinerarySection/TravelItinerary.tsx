import React from "react";

const TravelItinerary = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="text-5xl font-bold">도쿄 D-10</div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <img
            className="w-[30px] h-[30px] mr-2"
            src="/images/user.svg"
            alt="write"
          />
          <span>신애, 선주, 수정</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[30px] h-[30px] mr-2"
            src="/images/calendar.svg"
            alt="write"
          />
          <span>2024.05.13 ~ 2024.05.20</span>
        </div>
      </div>
    </div>
  );
};

export default TravelItinerary;
