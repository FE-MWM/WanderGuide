import React, { useEffect, useState } from "react";
import { getWeather, WeatherData, WeatherEntry } from "../../api/weather";
import { useQuery } from "@tanstack/react-query";
import IsLoading from "../common/IsLoading";
import dayjs from "dayjs";

const WeatherList = () => {
  const [weatherGroup, setWeatherGroup] = useState<{
    [key: string]: WeatherEntry[];
  }>({});
  const [weatherList, setWeatherList] = useState<WeatherEntry[]>([]);

  const countries: string = "London"; //동적으로 데이터값 가져올 부분

  const { data, error, isLoading } = useQuery<WeatherData, Error>({
    queryKey: ["weather", countries],
    queryFn: () => getWeather(countries),
    enabled: !!countries
  });

  useEffect(() => {
    if (data) {
      const currentTime = dayjs().valueOf();
      const grouped = data.list
        .filter((item) => {
          return dayjs(item.dt_txt).valueOf() > currentTime;
        })
        .reduce<{
          [key: string]: WeatherEntry[];
        }>((acc, cur) => {
          const date = cur.dt_txt.split(" ")[0];
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(cur);
          return acc;
        }, {});
      setWeatherGroup(grouped);
    }
  }, [data]);

  useEffect(() => {
    const getMiddleValue = (array: WeatherEntry[]) => {
      if (array.length % 2 === 0) {
        return array[array.length / 2 - 1];
      } else {
        return array[Math.floor(array.length / 2)];
      }
    };

    const middleValues = Object.keys(weatherGroup).map((key) =>
      getMiddleValue(weatherGroup[key])
    );
    setWeatherList(middleValues);
  }, [weatherGroup]);

  if (isLoading) return <IsLoading />;
  if (error) return <div>날씨 데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div className="flex h-full flex-col justify-around">
      <div className="item-center mb-[15px] flex gap-[2px]">
        <img src="/images/location.svg" alt="location" />
        <span className="text-sm font-bold leading-6 ">{countries}</span>
      </div>
      <div className="flex justify-center gap-[30px]">
        {weatherList.map((weather) => (
          <div key={weather.dt} className="flex flex-col items-center">
            <span className="text-blue text-base ">
              {weather.dt_txt.split(" ")[0]}
            </span>
            <span className="text-cool-gray text-sm">
              {weather.dt_txt.split(" ")[1].split(":")[0]}시
            </span>
            <img
              className="shrink"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather"
            />
            <span className="display w-[110px] text-center text-sm font-bold text-sky-950	">
              {weather.main.temp.toFixed(1)}°C
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
