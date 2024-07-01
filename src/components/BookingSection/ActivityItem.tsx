import React, { useEffect, useState } from "react";
import { useModal } from "../../context/ModalContext";
import ActivityModal from "../ActivitySection/ActivityModal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Activities,
  DestinationData,
  activities,
  destinationData
} from "../../store/destinationAtom";
import { updateData } from "../../indexeddb/indexedDB";
import ConfirmModal from "../common/ConfirmModal";

type PropsData = {
  data: {
    id: string;
    date: string;
    memo: string;
  };
};

type DateInfo = {
  yearMonth: string;
  day: number;
  dayOfWeek: string;
};

const ActivityItem = ({ data: { id, date, memo } }: PropsData) => {
  const [dateInfo, setDateInfo] = useState<DateInfo>();
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const { openModal } = useModal();
  const [data, setData] = useRecoilState<DestinationData>(destinationData);
  const activityData = useRecoilValue<Activities[]>(activities);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const yearMonth = `${date.getFullYear()}.${date.getMonth() + 1}`;
    const day = date.getDate();
    const daysOfWeek = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    ];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return {
      yearMonth,
      day,
      dayOfWeek
    };
  }

  const handleUpdateActivity = () => {
    openModal("액티비티/투어", <ActivityModal id={id} />);
  };

  const handleConfirm = () => {
    const filterData = activityData.filter((data) => data.id !== id);

    const parseData = {
      ...data,
      activities: filterData
    };

    setData(parseData);
    updateData(data.id as number, parseData);
  };

  const handleDeleteActivity = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();

    setConfirmModalOpen(true);
  };

  useEffect(() => {
    const dateInfo = formatDate(date);
    setDateInfo(dateInfo);
  }, [date]);
  return (
    <>
      <div
        className="bg-white w-full rounded-3xl p-4 mt-[28px] flex items-center justify-between cursor-pointer relative"
        onClick={() => handleUpdateActivity()}
      >
        <div className="w-[60px] flex flex-col items-center justify-center">
          <span className="text-sm text-cool-gray">{dateInfo?.yearMonth}</span>
          <span className="text-3xl text-cool-gray-dart font-bold">
            {dateInfo?.day}
          </span>
          <span className="text-sm text-cool-gray">{dateInfo?.dayOfWeek}</span>
        </div>
        <div className="w-[calc(100%-84px)] pl-4 pr-2">
          <p>{memo}</p>
        </div>
        <div className=" w-[30px] flex items-center justify-center">
          <div className="absolute top-[25px] right-[30px]">
            <img
              src="/images/close.svg"
              alt="close"
              className="w-[15px] h-[15px] cursor-pointer"
              onClick={(event) => handleDeleteActivity(event)}
            />
          </div>
        </div>
      </div>
      {isConfirmModalOpen && (
        <ConfirmModal
          type="confirm"
          imageType="delete"
          message="삭제하시겠습니까?"
          onConfirm={handleConfirm}
          onCancel={() => setConfirmModalOpen(false)}
        />
      )}
    </>
  );
};

export default ActivityItem;
