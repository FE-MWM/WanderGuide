import { calculateFlightDuration } from "../../Util/calcFlight";
import { formatDay, formatMonthDay } from "../../Util/dateFormatter";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import { useRecoilValue } from "recoil";

type FlightData = {
  type: string;
  prefix: string;
  data?: {
    [key: string]: string | boolean;
  };
  transfer?: {
    [key: string]: string | boolean;
  };
};

const flightData: FlightData[] = [
  { type: "출국", prefix: "departure", data: {}, transfer: {} },
  { type: "귀국", prefix: "return", data: {}, transfer: {} }
];

const FlightList = () => {
  const planDate = useRecoilValue<DestinationData>(destinationData);
  const { flight } = planDate;
  flightData.forEach((item) => {
    item.data = Object.keys(flight)
      .filter((key) => key.startsWith(item.prefix))
      .reduce<{ [key: string]: string | boolean }>((acc, key) => {
        const newKey = key.replace(item.prefix, "");
        const value = newKey.charAt(0).toLowerCase() + newKey.slice(1);
        acc[value] = flight[key];
        return acc;
      }, {});

    if (
      typeof item.data?.departureDate === "string" &&
      typeof item.data?.arrivalDate === "string"
    ) {
      item.data.formatDepartureDate =
        (item.data.departureDate && formatMonthDay(item.data.departureDate)) ||
        "";
      item.data.formatArrivalDate =
        (item.data.arrivalDate && formatMonthDay(item.data.arrivalDate)) || "";
      item.data.departureDay =
        item.data?.departureDate && formatDay(item.data?.departureDate || "");
      item.data.arrivalDay =
        (item.data?.arrivalDate && formatDay(item.data?.arrivalDate)) || "";
    }

    item.data.duration = calculateFlightDuration(
      item.data.departureDate,
      item.data.departureTime,
      item.data.arrivalDate,
      item.data.arrivalTime
    );
  });

  return (
    <div className="h-full flex flex-col gap-5">
      {flightData.map((flight, index) => (
        <div
          key={index}
          className={`${index === flightData.length - 1 ? "" : "border-b-2 border-slate-100"} h-1/2 pb-[15px]`}
        >
          <div className={`h-full`}>
            <div className="flex justify-between items-center mb-4">
              <span className="font-extrabold text-l inline-block">
                {flight.type} 상세일정
              </span>
              {flight.data?.stopover === "true" && (
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src="/images/add-button.svg"
                    className="w-[14px] h-[14px]"
                    alt="plus"
                  />
                  <span className="text-cool-gray text-sm">경유지 추가</span>
                </div>
              )}
            </div>
            <div className="flex flex-col h-[calc(100%-40px)]">
              <div className="flex pl-4">
                <div className="flex flex-col text-sm w-[90px]">
                  <span className="font-bold">
                    {flight.data?.departureTime || "-- : --"}
                  </span>
                  <span className="text-cool-gray font-bold border-r-2 border-cool-light">
                    {`${flight.data?.formatDepartureDate || "--/-- "}(${flight.data?.departureDay || "--"})`}
                  </span>
                </div>
                <div className="before-dot">
                  <span className="font-extrabold">
                    {flight.data?.departure || "--"}출발
                  </span>
                </div>
              </div>
              <div className="flex-1 flex">
                <div className="w-[106px] border-r-2 border-cool-light relative flex flex-col justify-center pl-4"></div>
              </div>
              {/* 추후 경유지 관련 ui 입니다 */}
              {/* {flight.data?.stopover === "true" && Object.keys(flight.data?.transfer).length > 0 ? (
                <div className="flex-1 flex">
                  <div className="w-[106px] border-r-2 border-cool-light relative flex flex-col justify-center pl-4">
                    <div className="flex flex-col text-sm">
                      <span className="font-bold ">21:30</span>
                      <span className="text-cool-gray font-bold ">
                        05/13(월)
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center flex-col">
                    <div className="mb-[20px]">
                      <div className="flex items-center ml-[24px]">
                        <img
                          src="/images/plane-blue.svg"
                          alt="arrow"
                          className="w-[20px] h-[20px]"
                        />
                        <div className="flex gap-2">
                          <span className="text-xs">에어부산 bx412</span>
                          <span className="text-xs text-fuchsia-500">
                            4시간 40분
                          </span>
                        </div>
                      </div>
                      <div className="before-dot">
                        <span className="font-extrabold">홍콩도착</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex">
                  <div className="w-[106px] border-r-2 border-cool-light relative flex flex-col justify-center pl-4"></div>
                </div>
              )} */}

              <div className="flex pl-4">
                <div className="flex flex-col text-sm w-[90px]">
                  <span className="font-bold  border-r-2 border-cool-light">
                    {flight.data?.arrivalTime || "-- : --"}
                  </span>
                  <span className="text-cool-gray font-bold ">
                    {`${flight.data?.formatArrivalDate || "--/--"}${flight.data?.arrivalDay || "(--)"}`}
                  </span>
                </div>
                <div className="relative">
                  <div className="flex items-center absolute w-[300px] top-[23px] left-[23px]">
                    {}
                    <img
                      src="/images/plane-blue.svg"
                      alt="arrow"
                      className="w-[20px] h-[20px]"
                    />
                    <div className="flex gap-2 ">
                      <span className="text-xs">
                        {`${flight.data?.airline || "--"} ${flight.data?.flightNumber || ""}`}
                      </span>
                      {/* 총 소요시간 부분 */}
                      {/* <span className="text-xs text-fuchsia-500">
                        {flight.data?.duration || ""}
                      </span> */}
                    </div>
                  </div>
                  <div className="before-dot">
                    <span className="font-extrabold ">
                      {flight.data?.arrival || "--"}도착
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
