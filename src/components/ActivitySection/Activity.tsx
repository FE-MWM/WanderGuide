import React from "react";
import { useTab } from "../../context/TabContext";
import ActivityModal from "./ActivityModal";
import { useModal } from "../../context/ModalContext";
import {
  Activities,
  DestinationData,
  activities,
  destinationData
} from "../../store/destinationAtom";
import { useRecoilValue } from "recoil";
import NoWriteData from "../common/NoWriteData";
import { formatDay, formatMonthDay } from "../../Util/dateFormatter";
import NoSettingData from "../common/NoSettingData";

const Activity = () => {
  const { setActiveTab } = useTab();
  const { openModal } = useModal();
  const activityData = useRecoilValue<Activities[]>(activities);
  const planDate = useRecoilValue<DestinationData>(destinationData);
  const hasPlan = planDate.planInfo.destination.length > 0;
  const hasActivity = activityData.length > 0;

  const addActivity = () => {
    openModal("액티비티/투어", <ActivityModal />);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold">액티비티 / 투어</span>
        {hasPlan && (
          <button onClick={() => addActivity()}>
            <img
              className="w-[24px] h-[24px]"
              src="/images/write.svg"
              alt="write"
            />
          </button>
        )}
      </div>
      <div
        className="h-[400px] bg-white w-full  rounded-3xl p-10 cursor-pointer"
        onClick={() => hasPlan && !hasActivity && addActivity()}
      >
        {activityData?.length > 0 ? (
          <>
            <div className="overflow-hidden h-[90%] max-h-[440px] relative">
              {activityData.map((item) => (
                <div className="flex gap-8 mb-[33px]" key={item.id}>
                  <span className="text-cool-gray font-extrabold">
                    {`${formatMonthDay(item.date)} (${formatDay(item.date)})`}
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
          </>
        ) : hasPlan ? (
          <NoWriteData title="액티비티/투어" />
        ) : (
          <NoSettingData />
        )}
      </div>
    </div>
  );
};

export default Activity;
