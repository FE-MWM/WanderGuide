import React from "react";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";

const TravelItinerary = () => {
  const {
    planInfo: { title, member, startDate, endDate }
  } = useRecoilValue<DestinationData>(destinationData);

  return (
    <div className="w-full h-full flex justify-between mb-[30px]">
      <div className="text-4xl font-bold">{`${title} D-10`}</div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <img
            className="w-[24px] h-[24px] mr-2"
            src="/images/user.svg"
            alt="write"
          />
          <span className="text-sm">{member}</span>
        </div>
        <div className="flex items-center">
          <img
            className="w-[24px] h-[24px] mr-2"
            src="/images/calendar.svg"
            alt="write"
          />
          <span className="text-sm">{`${startDate.replace("-", ".")} ~ ${endDate.replace("-", ".")}`}</span>
        </div>
      </div>
    </div>
  );
};

export default TravelItinerary;
