import React from "react";
import { useModal } from "../../context/ModalContext";

const Modal = () => {
  const { isOpen, title, content, closeModal, onSubmit } = useModal();
  return (
    <>
      {isOpen && (
        <div
          id="default-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center p-4 border-b">
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              <div className="p-4">{content}</div>

              <div className="flex items-center justify-end p-4 border-t border-gray-200 gap-2">
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
                  onClick={onSubmit}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
