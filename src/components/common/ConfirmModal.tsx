import React from "react";

type ConfirmModalProps = {
  type: "confirm" | "alert";
  imageType?: "info" | "delete";
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({
  type,
  imageType,
  message,
  onConfirm,
  onCancel
}: ConfirmModalProps) {
  const getImageSrc = () => {
    switch (imageType) {
      case "delete":
        return "/images/delete.svg";
      case "info":
        return "/images/info-circle.svg";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg w-[340px] h-[200px]">
        <div className="w-full h-full grid grid-rows-[1fr,70px] justify-center p-4">
          <div
            className={`flex flex-col items-center ${imageType ? "justify-end" : "justify-center"}`}
          >
            {imageType && (
              <div className="mb-4">
                <img src={getImageSrc()} alt="" className="w-8 h-8" />
              </div>
            )}
            <p className="font-bold text-xl">{message}</p>
          </div>
          <div className="flex justify-center items-end">
            {type === "confirm" && (
              <button
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-bold px-10 py-2 rounded mr-2"
                onClick={onCancel}
              >
                취소
              </button>
            )}
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 border border-blue-700 font-bold px-10 py-2 rounded"
              onClick={onConfirm}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
