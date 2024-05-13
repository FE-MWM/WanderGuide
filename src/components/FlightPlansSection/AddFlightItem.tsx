import { useFormContext } from "react-hook-form";

type Props = {
  prefix: string;
};

const AddFlightItem = ({ prefix }: Props) => {
  const { register, watch } = useFormContext();

  const stopoverValue = watch(`${prefix}Stopover`);

  return (
    <div className="mt-[10px]">
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">출발지</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="출발지"
          {...register(`${prefix}Departure`, {
            required: "출발지를 입력해주세요"
          })}
        />
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">출국 일시</span>
        <div className="flex-1 flex flex-col ">
          <input
            aria-label="date"
            type="date"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0"
            {...register(`${prefix}DepartureDate`, {
              required: "출발일을 입력해주세요"
            })}
          />
          <input
            aria-label="time"
            type="time"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
            {...register(`${prefix}DepartureTime`, {
              required: "출발시간을 입력해주세요"
            })}
          />
        </div>
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">항공사</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="항공사 (예: 대한항공, 에어부산)"
          {...register(`${prefix}Airline`)}
        />
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">항공편</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="항공편명 (예: KE1234)"
          {...register(`${prefix}FlightNumber`)}
        />
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">경유 여부</span>
        <div className="flex-1 flex gap-5 text-sm items-center">
          <label>
            <input
              type="radio"
              value="true"
              className="text-sm"
              checked={stopoverValue === true}
              {...register(`${prefix}Stopover`)}
            />
            <span className="ml-3">Y</span>
          </label>
          <label>
            <input
              type="radio"
              value="false"
              className="text-sm"
              checked={stopoverValue === false}
              {...register(`${prefix}Stopover`)}
            />
            <span className="ml-3">N</span>
          </label>
        </div>
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">도착일시</span>
        <div className="flex-1 flex flex-col ">
          <input
            aria-label="date"
            type="date"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0"
            {...register(`${prefix}ArrivalDate`, {
              required: "도착일을 입력해주세요"
            })}
          />
          <input
            aria-label="time"
            type="time"
            className="border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
            {...register(`${prefix}ArrivalTime`, {
              required: "도착시간을 입력해주세요"
            })}
          />
        </div>
      </label>
      <label className="flex items-center mb-5 gap-5 justify-between ">
        <span className="font-bold text-base w-[80px]">도착지</span>
        <input
          type="text"
          className="flex-1 border-b border-gray-950 text-sm  w-full h-[40px] focus:outline-none focus:ring-0 "
          placeholder="도착지"
          {...register(`${prefix}Arrival`, {
            required: "도착지를 입력해주세요"
          })}
        />
      </label>
    </div>
  );
};

export default AddFlightItem;
