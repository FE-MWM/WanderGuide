import React from "react";
import { useModal } from "../../context/ModalContext";

const Modal = () => {
  const { isOpen, title, content } = useModal();
  return (
    <div className="">
      {isOpen && (
        <div
          id="default-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center px-6 py-5 border-b">
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>

              <div className="">{content}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
