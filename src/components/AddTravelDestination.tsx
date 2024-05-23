import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../provider/AddTravelDestinationProvider";
import CountriesSelectBox from "./CountriesSelectBox";
import { useRecoilValue } from "recoil";
import { PlanInfoData, planInfo } from "../store/destinationAtom";

type PropsData = {
  onSave: () => void;
  onCloseModal: () => void;
  isUpdate: boolean;
};

const AddTravelDestination = ({
  onSave,
  onCloseModal,
  isUpdate
}: PropsData) => {
  const { register, setValue } = useFormContext<FormValues>();
  const planData = useRecoilValue<PlanInfoData>(planInfo);

  const setPlanData = () => {
    if (!planData) return;
    setValue("title", planData?.title);
    setValue("startDate", planData?.startDate);
    setValue("endDate", planData?.endDate);
    setValue("member", planData?.member);
    setValue("destination", planData?.destination);
  };

  useEffect(() => {
    isUpdate && setPlanData();
  }, [isUpdate]);

  return (
    <div className="flex flex-col gap-2">
      <div className="p-6 flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="mb-1">TITLE</span>
          <input
            type="text"
            className="border px-2 outline-none rounded-[4px] h-[54px]"
            placeholder="제목을 입력해 주세요"
            {...register("title", { required: "Title is required" })}
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-1">WHEN</span>
          <div className="flex items-center">
            <input
              type="date"
              className="w-1/2 border px-2 outline-none rounded-[4px] h-[54px]"
              {...register("startDate", { required: "start date is required" })}
            />
            <span className="px-6">~</span>
            <input
              type="date"
              className="w-1/2 border px-2 outline-none rounded-[4px] h-[54px]"
              {...register("endDate", { required: "end date is required" })}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="mb-1">WHO</span>
          <input
            type="text"
            className="border px-2 outline-none rounded-[4px] h-[54px]"
            placeholder="누구와 함께 가시나요?"
            {...register("member")}
          />
        </div>
        <div className="flex flex-col">
          <CountriesSelectBox />
        </div>
      </div>
      <div className="flex items-center justify-end px-6 py-3 border-t border-gray-200 gap-2">
        <button
          type="button"
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={onCloseModal}
        >
          취소
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={onSave}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default AddTravelDestination;
