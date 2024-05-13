type PropsData = { title: string };

const NoWriteData = ({ title }: PropsData) => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-3">
      <p className="text-sm text-cool-gray">{title} 추가하기</p>
      <img
        src="/images/add-button.svg"
        className="w-[20px] h-[20px]"
        alt="plus"
      />
    </div>
  );
};

export default NoWriteData;
