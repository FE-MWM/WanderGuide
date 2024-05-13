const AddFlightItem = () => {
  return (
    <div className="mt-[10px]">
      <label className="flex items-center mb-3 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">출발지</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="출발지"
        />
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">출국 일시</span>
        <div className="flex-1 flex flex-col ">
          <input
            aria-label="date"
            type="date"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0"
          />
          <input
            aria-label="time"
            type="time"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          />
        </div>
      </label>
      <label className="flex items-center mb-3 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">항공사</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="항공사 (예: 대한항공, 에어부산)"
        />
      </label>
      <label className="flex items-center mb-3 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">항공편</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="항공편명 (예: KE1234)"
        />
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">도착일시</span>
        <div className="flex-1 flex flex-col ">
          <input
            aria-label="date"
            type="date"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0"
          />
          <input
            aria-label="time"
            type="time"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          />
        </div>
      </label>
      <label className="flex items-center mb-3 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">도착지</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="도착지"
        />
      </label>
    </div>
  );
};

export default AddFlightItem;
