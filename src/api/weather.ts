import axios from "axios";

export type WeatherData = {
  cod: string; //내부 파라미터
  message: number; //내부 파라미터
  cnt: number; // api 타임스탬프
  list: WeatherEntry[];
  city: City;
};

type WeatherEntry = {
  dt: number; // 예측 시간 UTC
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number; //가시성
  pop: number; //강수확률
  rain?: Rain;
  sys: Sys;
  dt_txt: string; //예측 시간
};

type Main = {
  temp: number; // 온도
  feels_like: number; //온도에 따른 사람의 인식
  temp_min: number; //계산 순간 최저온도
  temp_max: number; //계산 순간 최고온도
  pressure: number; //해수면 대기압
  sea_level: number; //해수면 대기압
  grnd_level: number; //지면의 대기압
  humidity: number; //습도
  temp_kf: number; //내부 사용
};

type Weather = {
  id: number; //기상조건 ID
  main: string; //날씨 매개변수 (눈, 비, 구름)
  description: string; //날씨 상세 설명
  icon: string; //날씨 아이콘 ID
};

type Clouds = {
  all: number; //흐림 %
};

type Wind = {
  speed: number; //풍속
  deg: number; //풍향
  gust: number; //돌풍
};

type Rain = {
  "3h": number; //3시간 강수량
};

type Sys = {
  pod: string; //낮과 밤 d-낮 n-밤
};

type City = {
  id: number; //도시 ID
  name: string; //도시 이름
  coord: Coordinates;
  country: string; //국가 코드
  population: number; //인구
  timezone: number; //시간대
  sunrise: number; //일출
  sunset: number; //일몰
};

type Coordinates = {
  lat: number; //위도
  lon: number; //경도
};

export const getWeather = async <T = WeatherData>(
  countries: string
): Promise<T> => {
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${countries}&appid=${process.env.REACT_APP_API_WEATHER}&units=metric`;
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw Error("날씨 정보를 불러오는데 실패했습니다.");
  }
};
