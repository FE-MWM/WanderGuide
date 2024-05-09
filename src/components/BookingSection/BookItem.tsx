import React from "react";

const BookItem = () => {
  return (
    <div>
      <div className="bg-white w-full h-full rounded-3xl p-5 mt-8 flex gap-7 items-center">
        <div className="w-[80px] flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
            <span className="text-sm text-cool-gray">2024.05</span>
            <span className="text-3xl text-cool-gray-dart font-bold">05</span>
            <span className="text-sm text-cool-gray">월요일</span>
          </div>
          {/* 액티비티/투어의 경우 이부분이 생략됩니다. 종료데이터가 없으면 안보이도록 처리 */}
          {/* <span className="text-sky-500 text-xs">(4박)</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-cool-gray">2024.05</span>
            <span className="text-3xl text-cool-gray-dart font-bold">09</span>
            <span className="text-sm text-cool-gray">목요일</span>
          </div> */}
        </div>
        <div className="flex flex-col gap-5">
          {/* 액티비티/투어의 경우 이부분이 생략됩니다.*/}
          {/* <div className="flex items-center gap-3 ">
            <img
              className="w-[20px] h-[20px]"
              src="/images/baggage.svg"
              alt="write"
            />
            <span className="text-base font-bold">숙소 이름 데이터</span>
          </div> */}
          <p>메모내용이 들어갑니다.</p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
