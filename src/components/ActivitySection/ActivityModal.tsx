import { useForm } from "react-hook-form";
import { useModal } from "../../context/ModalContext";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Activities,
  DestinationData,
  activities,
  destinationData
} from "../../store/destinationAtom";
import { updateData } from "../../indexeddb/indexedDB";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import ConfirmModal from "../common/ConfirmModal";

type ActivityFormValues = {
  date: string;
  memo: string;
};

type PropsData = {
  id?: string;
};

const ActivityModal = (props: PropsData) => {
  const { register, getValues, setValue } = useForm<ActivityFormValues>();
  const { closeModal } = useModal();
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [data, setData] = useRecoilState<DestinationData>(destinationData);
  const activityData = useRecoilValue<Activities[]>(activities);

  const handleAddActivity = () => {
    const values = getValues();

    const item = {
      id: uuidv4(),
      date: values.date,
      memo: values.memo
    };

    const parseData = {
      ...data,
      activities: [...data.activities, item]
    };

    setData(parseData);
    updateData(data.id as number, parseData);
    closeModal();
  };

  const handleUpdateActivity = () => {
    const values = getValues();

    const item = {
      id: props.id as string,
      date: values.date,
      memo: values.memo
    };

    const updatedData = activityData.map((data) => {
      if (data.id === props.id) {
        return item;
      }
      return data;
    });

    const parseData = {
      ...data,
      activities: updatedData
    };

    setData(parseData);
    updateData(data.id as number, parseData);
    closeModal();
  };

  const setActivityData = () => {
    const data = activityData.find((data) => data.id === props.id);
    if (!data) return;
    setValue("date", data?.date);
    setValue("memo", data?.memo);
  };

  useEffect(() => {
    setActivityData();
  }, [props]);
  return (
    <>
      <div className="w-[450px] p-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px]">날짜</span>
          <input
            type="date"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            {...register("date")}
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px] mb-2">메모</span>
          <textarea
            className="mt-1 p-2 w-full border border-gray-300 rounded-md h-[200px]"
            {...register("memo")}
          />
        </label>
      </div>
      <div className="flex items-center justify-end px-6 py-3 border-t border-gray-200 gap-2">
        <button
          type="button"
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => setConfirmModalOpen(true)}
        >
          확인
        </button>
      </div>

      {isConfirmModalOpen && (
        <ConfirmModal
          type="confirm"
          imageType="info"
          message="저장하시겠습니까?"
          onConfirm={() =>
            props.id ? handleUpdateActivity() : handleAddActivity()
          }
          onCancel={() => setConfirmModalOpen(false)}
        />
      )}
    </>
  );
};

export default ActivityModal;
