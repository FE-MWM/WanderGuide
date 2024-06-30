import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import {
  calculateTimeDifference,
  fetchTimeForCountry
} from "../../Util/dateFormatter";
import IsLoading from "../common/IsLoading";

const CurrentTime = () => {
  const [destinationTime, setDestinationTime] = useState("");
  const [koreaTime, setKoreaTime] = useState("");
  const [timeDifference, setTimeDifference] = useState("");
  const [loading, setLoading] = useState(true);
  const planDate = useRecoilValue<DestinationData>(destinationData);

  const getKoreaTime = async () => {
    const krTime = await fetchTimeForCountry("KR");
    krTime && setKoreaTime(krTime);
    return krTime;
  };

  const getDestinationTime = async () => {
    const countryParam = planDate?.apiParams["ISO alpha2"];
    const destinationTime = await fetchTimeForCountry(countryParam);

    destinationTime && setDestinationTime(destinationTime);
    return destinationTime;
  };

  const setDifferenceTime = async (krTime: string, deTime: string) => {
    if (deTime && krTime) {
      const timeDifference = await calculateTimeDifference(deTime, krTime);
      setTimeDifference(timeDifference);
    }
  };

  useEffect(() => {
    const timerId = setInterval(async () => {
      setLoading(true);
      const krTime = await getKoreaTime();
      const deTime = await getDestinationTime();
      setDifferenceTime(krTime as string, deTime as string);
      setLoading(false);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [planDate]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[53px] pb-5">
        <span className="text-[22px] font-semibold ">현재 시각</span>
        <span className="text-xs ml-2">{`시차: ${timeDifference ? timeDifference : 0} 시간`}</span>
      </div>
      {loading ? (
        <div className="justify-center items-center bg-white w-full h-[calc(100%-53px)] rounded-3xl p-5">
          <IsLoading />
        </div>
      ) : (
        <div className="grid grid-cols-2 items-center bg-white w-full h-[calc(100%-53px)] rounded-3xl p-5">
          <div className="flex flex-col items-center gap-2">
            <span>{planDate?.planInfo.destination || "-"} </span>

            <span className="text-3xl font-extrabold">
              {destinationTime.split(" ")[1]
                ? destinationTime.split(" ")[1]
                : "00:00:00"}
            </span>
            <span className="text-sm">
              {destinationTime.split(" ")[0]
                ? destinationTime.split(" ")[0]
                : "-"}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span>대한민국</span>
            <span className="text-3xl font-extrabold">
              {koreaTime.split(" ")[1]}
            </span>
            <span className="text-sm">{koreaTime.split(" ")[0]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentTime;
