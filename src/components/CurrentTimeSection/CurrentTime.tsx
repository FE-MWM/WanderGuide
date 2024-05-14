import React, { useEffect, useState } from "react";
import { getCountry } from "countries-and-timezones";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import { useRecoilValue } from "recoil";
import { DestinationData, destinationData } from "../../store/destinationAtom";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const CurrentTime = () => {
  const [countryTime, setCountryTime] = useState("");
  const [koreaTime, setKoreaTime] = useState("");
  const [timeDifference, setTimeDifference] = useState("");
  const planDate = useRecoilValue<DestinationData>(destinationData);

  async function fetchTimeForCountry(countryCode: string) {
    const countryInfo = getCountry(countryCode);
    if (!countryInfo) {
      return;
    }

    const timezone = countryInfo.timezones[0];
    const currentTime = dayjs().tz(timezone).format("YYYY-MM-DD HH:mm:ss");
    return currentTime;
  }

  async function calculateTimeDifference(time1: string, time2: string) {
    const format = "HH:mm:ss";

    const moment1 = dayjs(time1, format);
    const moment2 = dayjs(time2, format);

    const timeDiff = moment1.diff(moment2, "minutes");

    const diffDuration = dayjs.duration(timeDiff, "minutes").format("HH");
    return diffDuration;
  }

  useEffect(() => {
    const timerId = setInterval(async () => {
      const countryParam = planDate?.apiParams["ISO alpha2"];
      const deTime = await fetchTimeForCountry(countryParam);
      const krTime = await fetchTimeForCountry("KR");
      if (deTime && krTime) {
        setCountryTime(deTime);
        setKoreaTime(krTime);
        const timeDifference = await calculateTimeDifference(deTime, krTime);
        setTimeDifference(timeDifference);
      }
    }, 1000); // 매초마다 시간 업데이트
    return () => {
      clearInterval(timerId); // 컴포넌트 언마운트시 인터벌 제거
    };
  }, [planDate]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[53px] pb-5">
        <span className="text-[22px] font-semibold ">현재 시각</span>
        <span className="text-xs ml-2">{`시차: ${timeDifference} 시간`}</span>
      </div>
      <div className="flex items-center justify-around bg-white w-full h-[calc(100%-53px)] rounded-3xl p-5">
        <div className="flex flex-col items-center gap-2">
          <span>{planDate?.planInfo.destination || "대한민국"} </span>
          <span className="text-3xl font-extrabold">
            {countryTime.split(" ")[1]}
          </span>
          <span className="text-sm">{countryTime.split(" ")[0]}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>대한민국</span>
          <span className="text-3xl font-extrabold">
            {koreaTime.split(" ")[1]}
          </span>
          <span className="text-sm">{koreaTime.split(" ")[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
