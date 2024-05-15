import React from "react";
import {
  getDate,
  getDay,
  getDiff,
  getMonth,
  getYear
} from "../../Util/calcDate";

type AccoBookItemProps = {
  st: string;
  end: string;
  accommodation: string;
  text: string;
};

const AccoBookItem = ({ st, end, accommodation, text }: AccoBookItemProps) => {
  return (
    <div>
      <div className="bg-white w-full h-full rounded-3xl p-5 mt-8 flex gap-7 items-center">
        <div className="w-[80px] flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
            <span className="text-sm text-cool-gray">{`${getYear(st)}.${getMonth(st)}`}</span>
            <span className="text-3xl text-cool-gray-dart font-bold">
              {getDate(st)}
            </span>
            <span className="text-sm text-cool-gray">{getDay(st)}</span>
          </div>
          <span className="text-sky-500 text-xs">
            ({getDiff({ startDate: st, endDate: end })}박)
          </span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-cool-gray">{`${getYear(end)}.${getMonth(end)}`}</span>
            <span className="text-3xl text-cool-gray-dart font-bold">
              {getDate(end)}
            </span>
            <span className="text-sm text-cool-gray">{getDay(st)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 ">
            <img
              className="w-[20px] h-[20px]"
              src="/images/baggage.svg"
              alt="baggage"
            />
            <span className="text-base font-bold">{accommodation}</span>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AccoBookItem;
