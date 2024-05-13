import React from "react";
import { useTab } from "../../context/TabContext";
import ActivityModal from "./ActivityModal";
import { useSideModal } from "../../context/SideModalContext";

//임시데이터
const activityList = [
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  },
  {
    startDate: "05/14(월)",
    memo: "메모데이터입니다.데이터길이는 세줄을 넘어가지 않습니다.데이터를 구현합니다."
  }
];

const Activity = () => {
  const { setActiveTab } = useTab();
  const { openModal } = useSideModal();

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold">액티비티/투어</span>
        <button
          onClick={() => openModal("액티비티/투어", <ActivityModal />, true)}
        >
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="h-[400px] bg-white w-full  rounded-3xl p-10">
        <div className="overflow-hidden h-[90%] max-h-[440px] relative">
          {activityList.map((item, index) => (
            <div className="flex gap-8 mb-[33px]" key={index}>
              <span className="text-cool-gray font-extrabold">
                {item.startDate}
              </span>
              <div className="line-clamp-3">{item.memo}</div>
            </div>
          ))}

          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white indent-[-9999px]">
            더보기 페이드아웃
          </div>
        </div>
        <div className="text-zinc-500	font-bold text-sm text-center mt-[10px] flex items-center gap-2 justify-center ">
          <button type="button" onClick={() => setActiveTab("book")}>
            더보기
          </button>
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

export default Activity;
