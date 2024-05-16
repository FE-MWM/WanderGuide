import React, { useEffect, useState } from "react";
import { getCountry } from "countries-and-timezones";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";
import IsLoading from "../common/IsLoading";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const CurrentTime = () => {
  const [destinationTime, setDestinationTime] = useState("");
  const [koreaTime, setKoreaTime] = useState("");
  const [timeDifference, setTimeDifference] = useState("");
  const [loading, setLoading] = useState(true);
  const planDate = useRecoilValue<DestinationData>(destinationData);

  const fetchTimeForCountry = async (countryCode: string) => {
    const countryInfo = getCountry(countryCode);
    if (!countryInfo) {
      return;
    }
    const timezone = countryInfo.timezones[0];
    const currentTime = dayjs().tz(timezone).format("YYYY-MM-DD HH:mm:ss");
    return currentTime;
  };

  const calculateTimeDifference = async (time1: string, time2: string) => {
    const format = "HH:mm:ss";

    const moment1 = dayjs(time1, format);
    const moment2 = dayjs(time2, format);

    const timeDiff = moment1.diff(moment2, "minutes");

    const diffDuration = dayjs.duration(timeDiff, "minutes").format("HH");
    return diffDuration;
  };

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

  const setDefferenceTime = async (krTime: string, deTime: string) => {
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
      setDefferenceTime(krTime as string, deTime as string);
      setLoading(false);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
