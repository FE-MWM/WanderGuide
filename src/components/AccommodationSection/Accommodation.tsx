import React from "react";
import { useTab } from "../../context/TabContext";
import { useModal } from "../../context/ModalContext";
import AddAccommodationProvider from "../../provider/AddAccommodationProvider";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import { useRecoilValue } from "recoil";
import NoWriteData from "../common/NoWriteData";
import { getDiff } from "../../Util/calcDate";
import { formatMonthDay } from "../../Util/dateFormatter";

//  임시데이터

const Accommodation = () => {
  const { setActiveTab } = useTab();
  const { openModal } = useModal();
  const planDate = useRecoilValue<DestinationData>(destinationData);

  const accommodations = planDate.accommodation;

  const AddAccommodation = () => {
    openModal("숙소", <AddAccommodationProvider />);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-[53px] flex items-center justify-between pb-5">
        <span className="text-[22px] font-semibold">숙소</span>
        <button
          type="button"
          aria-label="modify accommodation"
          onClick={() => AddAccommodation()}
        >
          <img
            className="w-[24px] h-[24px]"
            src="/images/write.svg"
            alt="write"
          />
        </button>
      </div>
      <div className="h-[400px] bg-white w-full rounded-3xl p-10">
        {planDate?.accommodation.length > 0 ? (
          <>
            <div className="overflow-hidden h-[90%] max-h-[400px] relative">
              {accommodations.map((item, index) => {
                const diff = getDiff({
                  startDate: item.startDate,
                  endDate: item.endDate
                });
                return (
                  <div
                    key={index}
                    className={`flex flex-col mb-[40px] pb-[40px] ${index === accommodations.length - 1 ? "" : "border-b-2 border-slate-100"}`}
                  >
                    <div className="flex items-center gap-2 mb-[20px]">
                      <span className="text-cool-gray font-extrabold">
                        {formatMonthDay(item.startDate)} ~{" "}
                        {formatMonthDay(item.endDate)}
                      </span>
                      <span className="text-sky-500">({diff}박)</span>
                    </div>
                    <div className="flex items-center gap-3 mb-[10px]">
                      <img
                        className="w-[20px] h-[20px]"
                        src="/images/baggage.svg"
                        alt="baggage"
                      />
                      <span className="text-base font-bold">{item.title}</span>
                    </div>
                    <span className="text-sm line-clamp-1 text-cool-gray">
                      {item.text}
                    </span>
                  </div>
                );
              })}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white indent-[-9999px]">
                더보기 페이드아웃
              </div>
            </div>
            <div className="text-zinc-500 font-bold text-sm text-center mt-[10px] flex items-center gap-2 justify-center">
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
        ) : (
          <NoWriteData title="숙소" />
        )}
      </div>
    </div>
  );
};

export default Accommodation;
