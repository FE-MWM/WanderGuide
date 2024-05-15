import { atom } from "recoil";
import { DestinationData } from "./destinationAtom";

export const initData = atom<DestinationData>({
  key: "initData",
  default: {
    planInfo: {
      title: "",
      startDate: "",
      endDate: "",
      member: "",
      destination: ""
    },
    flight: {},
    departureTransfer: [],
    returnTransfer: [],
    accommodation: [],
    activities: [],
    apiParams: {
      "ISO alpha2": "",
      "ISO alpha3": "",
      "ISO numeric": 0,
      "대륙명_공통 대륙코드": "",
      대륙명_행정표준코드: "",
      "대륙명_외교부 직제": "",
      영문명: "",
      한글명: ""
    }
  }
});
