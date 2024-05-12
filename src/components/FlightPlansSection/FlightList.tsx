import React from "react";

// 임시데이터 ! 데이터값이 어떻게 내려올지 몰라 임시데이터 대체합니다.

const FLIGHT_DATA = [{ type: "출국" }, { type: "귀국" }];

const FlightList = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      {FLIGHT_DATA.map((flight, index) => (
        <>
          <div
            className={`h-1/2 ${index === FLIGHT_DATA.length - 1 ? "" : "border-b-2 border-slate-100"}`}
            key={index}
          >
            <span className="font-extrabold text-l inline-block mb-3">
              {flight.type} 상세일정
            </span>
            <div className="flex flex-col h-[calc(100%-50px)]">
              <div className="flex pl-4">
                <div className="flex flex-col text-sm w-[90px]">
                  <span className="font-bold">21:30</span>
                  <span className="text-cool-gray font-bold border-r-2 border-cool-light">
                    05/13(월)
                  </span>
                </div>
                <div className="before-dot">
                  <span className="font-extrabold">서울출발</span>
                </div>
              </div>

              {/* 환승데이터! 환승을 추가할때마다 이부분을 추가하면 됩니다. 조건문 분기처리 필요 */}
              <div className="flex-1 flex">
                <div className="w-[106px] border-r-2 border-cool-light relative flex flex-col justify-center pl-4">
                  <div className="flex flex-col text-sm">
                    <span className="font-bold ">21:30</span>
                    <span className="text-cool-gray font-bold ">05/13(월)</span>
                  </div>
                </div>
                <div className="flex-1 flex justify-center flex-col">
                  <div className="mb-[20px]">
                    <div className="flex items-center ml-[24px]">
                      <img
                        src="/images/plane-blue.svg"
                        alt="arrow"
                        className="w-[20px] h-[20px]"
                      />
                      <div className="flex gap-2">
                        <span className="text-xs">에어부산 bx412</span>
                        <span className="text-xs text-fuchsia-500">
                          4시간 40분
                        </span>
                      </div>
                    </div>
                    <div className="before-dot">
                      <span className="font-extrabold">홍콩도착</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex pl-4">
                <div className="flex flex-col text-sm w-[90px]">
                  <span className="font-bold  border-r-2 border-cool-light">
                    21:30
                  </span>
                  <span className="text-cool-gray font-bold ">05/13(월)</span>
                </div>
                <div className="relative">
                  <div className="flex items-center absolute w-[300px] top-[-20px] left-[23px]">
                    <img
                      src="/images/plane-blue.svg"
                      alt="arrow"
                      className="w-[20px] h-[20px]"
                    />
                    <div className="flex gap-2 ">
                      <span className="text-xs">에어부산 bx412</span>
                      <span className="text-xs text-fuchsia-500">
                        4시간 40분
                      </span>
                    </div>
                  </div>
                  <div className="before-dot">
                    <span className="font-extrabold ">도쿄도착</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FlightList;
