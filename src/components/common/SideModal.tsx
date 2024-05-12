import { useSideModal } from "../../context/SideModalContext";

const SideModal = () => {
  const { isOpen, title, content, closeModal } = useSideModal();

  return (
    <>
      {isOpen && (
        <div className="min-w-[300px] max-w-[550px] max-h-[calc(100%-85px)] absolute top-[70px] right-[30px] bg-white overflow-y-auto z-100 shadow-custom rounded-lg p-7">
          <div className="flex justify-between items-center pb-5  border-b border-gray-200">
            <h3 className="text-xl font-extrabold">{title}</h3>
            <img
              src="/images/close.svg"
              alt="close"
              className="w-[15px] h-[15px] cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div className="mt-[30px]">{content}</div>
        </div>
      )}
    </>
  );
};

export default SideModal;
