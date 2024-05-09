import React from "react";
import BookItem from "./BookItem";

const TourList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold">액티비티/투어</span>
        <button type="button" aria-label="write">
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="mb-[40px]">
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
    </div>
  );
};

export default TourList;
