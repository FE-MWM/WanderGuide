import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";

const TravelItinerary = () => {
  const planDate = useRecoilValue<DestinationData>(destinationData);
  const [daysLeft, setDaysLeft] = useState<number>();

  const calculateDDay = () => {
    const today = formatDate();

    const startDate = new Date(today);
    const endDate = new Date(planDate.planInfo.startDate);

    const difference = endDate.getTime() - startDate.getTime();
    const remainingDays = Math.ceil(difference / (1000 * 3600 * 24));
    const leftDay = Math.max(0, remainingDays);
    setDaysLeft(leftDay);
  };

  const formatDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const paddedMonth = month.toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");

    return `${year}-${paddedMonth}-${paddedDay}`;
  };

  useEffect(() => {
    calculateDDay();
  }, [planDate]);

  return (
    <div className="w-full h-full flex justify-between mb-[30px] items-center">
      {planDate?.planInfo.destination ? (
        <div className="text-4xl font-bold">{`${planDate?.planInfo.destination} D-${daysLeft}`}</div>
      ) : (
        <div className="flex items-center">
          <img
            className=" w-[150px]"
            src="/images/wander-guide.svg"
            alt="logo"
          />
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <img
            className="w-[24px] h-[24px] mr-2"
            src="/images/user.svg"
            alt="write"
          />
          {planDate.planInfo.member ? (
            <span className="text-sm">{`${planDate?.planInfo.member}`}</span>
          ) : (
            <span className="text-sm text-cool-gray">누구와 함께</span>
          )}
        </div>
        <div className="flex items-center">
          <img
            className="w-[24px] h-[24px] mr-2"
            src="/images/calendar.svg"
            alt="write"
          />
          {planDate?.planInfo.startDate || planDate?.planInfo.endDate ? (
            <span className="text-sm">{`${planDate?.planInfo.startDate} ~ ${planDate?.planInfo.endDate}`}</span>
          ) : (
            <span className="text-sm text-cool-gray">언제</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelItinerary;
