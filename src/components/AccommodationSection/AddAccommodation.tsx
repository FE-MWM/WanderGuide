import { useModal } from "../../context/ModalContext";
import { useFormContext } from "react-hook-form";
import { FormValue } from "../../provider/AddAccommodationProvider";
import ConfirmModal from "../common/ConfirmModal";
import { useState } from "react";

type PropsData = {
  onSave: () => void;
};

const AddAccommodation = ({ onSave }: PropsData) => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const { closeModal } = useModal();
  const { register } = useFormContext<FormValue>();

  return (
    <>
      <div className="w-[450px] p-8">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px]">날짜</span>
          <div className="flex justify-center items-center">
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              {...register("startDate", {
                required: "체크인 날짜를 입력해주세요"
              })}
            />
            <span className="px-6">~</span>
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              {...register("endDate", {
                required: "체크아웃 날짜를 입력해주세요"
              })}
            />
          </div>
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px]">숙소명</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            {...register("title", { required: "숙소명을 입력해주세요" })}
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <span className="text-[14px] mb-2">메모</span>
          <textarea
            className="mt-1 p-2 w-full border border-gray-300 rounded-md h-[200px]"
            {...register("text", { required: "메모를 입력해주세요" })}
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
          onClick={() => setConfirmModalOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          확인
        </button>
      </div>

      {isConfirmModalOpen && (
        <ConfirmModal
          type="confirm"
          imageType="info"
          message="저장하시겠습니까?"
          onConfirm={() => onSave()}
          onCancel={() => setConfirmModalOpen(false)}
        />
      )}
    </>
  );
};

export default AddAccommodation;
