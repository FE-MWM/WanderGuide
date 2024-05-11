import React from "react";

//  임시데이터

const accommodations = [
  {
    startDate: "05/14(월)",
    endDate: "05/18(목)",
    nights: "4박", // 계산으로 넣는다고 가정
    name: "숙소 이름 데이터1",
    memo: "메모데이터입니다.데이터길이는 한줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    endDate: "05/18(목)",
    nights: "4박", // 계산으로 넣는다고 가정
    name: "숙소 이름 데이터2",
    memo: "메모데이터입니다.데이터길이는 한줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    endDate: "05/18(목)",
    nights: "4박", // 계산으로 넣는다고 가정
    name: "숙소 이름 데이터3",
    memo: "메모데이터입니다.데이터길이는 한줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    endDate: "05/18(목)",
    nights: "4박", // 계산으로 넣는다고 가정
    name: "숙소 이름 데이터3",
    memo: "메모데이터입니다.데이터길이는 한줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    endDate: "05/18(목)",
    nights: "4박", // 계산으로 넣는다고 가정
    name: "숙소 이름 데이터3",
    memo: "메모데이터입니다.데이터길이는 한줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    endDate: "05/18(목)",
    nights: "4박", // 계산으로 넣는다고 가정
    name: "숙소 이름 데이터3",
    memo: "메모데이터입니다.데이터길이는 한줄을 넘어가지 않습니다.데이터를 구현합니다."
  }
];

const Accommodation = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold">숙소</span>
        <button type="button" aria-label="modify accommodation">
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="h-[400px] bg-white w-full rounded-3xl p-10">
        <div className="overflow-hidden h-[90%] max-h-[400px] relative">
          {accommodations.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col mb-[40px] pb-[40px] ${index === accommodations.length - 1 ? "" : "border-b-2 border-slate-100"}`}
            >
              <div className="flex items-center gap-2 mb-[20px]">
                <span className="text-cool-gray font-extrabold">
                  {item.startDate} ~ {item.endDate}
                </span>
                <span className="text-sky-500">({item.nights})</span>
              </div>
              <div className="flex items-center gap-3 mb-[10px]">
                <img
                  className="w-[20px] h-[20px]"
                  src="/images/baggage.svg"
                  alt="baggage"
                />
                <span className="text-base font-bold">{item.name}</span>
              </div>
              <span className="text-sm line-clamp-1">{item.memo}</span>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white indent-[-9999px]">
            더보기 페이드아웃
          </div>
        </div>
        <div className="text-zinc-500 font-bold text-sm text-center mt-[10px] flex items-center gap-2 justify-center">
          <button type="button">더보기</button>
          <img
            src="/images/arrow-right.svg"
            alt="more"
            className="w-[12px] h-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
