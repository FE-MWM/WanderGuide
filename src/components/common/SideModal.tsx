import { useSideModal } from "../../context/SideModalContext";

const SideModal = () => {
  const { isOpen, title, content, closeSideModal, fullSize } = useSideModal();

  return (
    <>
      {isOpen && (
        <div
          className={`min-w-[400px] max-w-[550px] 
          ${fullSize ? "h-[calc(100%-85px)]" : " max-h-[calc(100%-85px)]"}  
          absolute top-[70px] right-[30px] bg-white overflow-y-auto z-100 shadow-custom rounded-lg p-7`}
        >
          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
            <h3 className="text-xl font-extrabold">{title}</h3>
            <img
              src="/images/close.svg"
              alt="close"
              className="w-[15px] h-[15px] cursor-pointer"
              onClick={closeSideModal}
            />
          </div>
          <div className="mt-[30px] h-[calc(100%-80px)] ">{content}</div>
        </div>
      )}
    </>
  );
};

export default SideModal;
