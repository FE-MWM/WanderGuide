import React from "react";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import AccoBookItem from "./AccoBookItem";

const AccommodationList = () => {
  const planData = useRecoilValue<DestinationData>(destinationData);
  const accommodations = planData.accommodation;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold">숙소</span>
        <button type="button" aria-label="write">
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="mb-[40px]">
        {accommodations.map((ele, idx) => {
          return (
            <AccoBookItem
              key={idx}
              st={ele.startDate}
              end={ele.endDate}
              text={ele.text}
              accommodation={ele.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccommodationList;
