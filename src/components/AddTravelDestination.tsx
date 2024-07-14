import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../provider/AddTravelDestinationProvider";
import CountriesSelectBox from "./CountriesSelectBox";
import { useRecoilValue } from "recoil";
import { PlanInfoData, planInfo } from "../store/destinationAtom";

import { ConfigProvider, Calendar } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import locale from "antd/es/locale/ko_KR";

dayjs.locale("ko");

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
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit
  } = useFormContext<FormValues>();
  const planData = useRecoilValue<PlanInfoData>(planInfo);

  const [isOn, setIsOn] = useState<"startDate" | "endDate" | undefined>();

  const stRef = useRef("");
  const endRef = useRef("");

  const selectDate = (
    date: string,
    info: { source: "year" | "month" | "date" | "customize" }
  ) => {
    if (isOn === "startDate") {
      stRef.current = date;
      setValue("startDate", date);
    } else if (isOn === "endDate") {
      endRef.current = date;
      setValue("endDate", date);
    } else {
      return;
    }
    checkDate();
    if (info.source === "date") {
      setIsOn(undefined);
    }
  };

  const checkDate = () => {
    const start = stRef.current;
    const end = endRef.current;
    const startDate = start ? dayjs(start) : dayjs(undefined);
    const endDate = end ? dayjs(end) : dayjs(undefined);

    if (start && end && endDate.isBefore(startDate)) {
      stRef.current = end;
      endRef.current = "";
      setValue("startDate", end);
      setValue("endDate", "");
    }
  };

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

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSave)}>
      {isOn && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-gray-800 bg-opacity-50">
          <ConfigProvider locale={locale}>
            <div className="w-[320px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Calendar
                fullscreen={false}
                //defaultValue={dayjs(date)}
                style={{ padding: "0 10px" }}
                onSelect={(date, info) =>
                  selectDate(date.format("YYYY-MM-DD"), info)
                }
              />
            </div>
          </ConfigProvider>
        </div>
      )}
      <div className="p-6 flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="mb-1">TITLE</span>
          <input
            type="text"
            className="border px-2 outline-none rounded-[4px] h-[54px]"
            placeholder="제목을 입력해 주세요"
            {...register("title", { required: "제목을 입력해 주세요" })}
          />
          {errors.title && (
            <p className="text-xs text-red-700 pt-[3px]">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <span className="mb-1">WHEN</span>
          <div className="flex items-center">
            <div
              onClick={() => setIsOn("startDate")}
              className="cursor-pointer w-[200px] border px-2 outline-none rounded-[4px] h-[54px] leading-[54px]"
              // {...register("startDate", {
              //   required: "여행 시작날을 입력해주세요"
              // })}
            >
              {stRef.current}
            </div>

            <span className="px-6">~</span>
            <div
              onClick={() => setIsOn("endDate")}
              className="cursor-pointer w-[200px] border px-2 outline-none rounded-[4px] h-[54px] leading-[54px]"
              // {...register("endDate", {
              //   required: "여행 마지막날을 입력해주세요"
              // })}
            >
              {endRef.current}
            </div>
          </div>
          {errors.startDate && (
            <p className="text-xs text-red-700 pt-[3px]">
              {errors.startDate.message}
            </p>
          )}
          {errors.endDate && (
            <p className="text-xs text-red-700 pt-[3px]">
              {errors.endDate.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <span className="mb-1">WHO</span>
          <input
            type="text"
            className="border px-2 outline-none rounded-[4px] h-[54px]"
            placeholder="누구와 함께 가시나요?"
            {...register("member", { required: "여행 멤버를 입력해주세요" })}
          />
          {errors.member && (
            <p className="text-xs text-red-700 pt-[3px]">
              {errors.member.message}
            </p>
          )}
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
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          확인
        </button>
      </div>
    </form>
  );
};

export default AddTravelDestination;
