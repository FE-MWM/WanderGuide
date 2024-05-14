import { atom } from "recoil";

export type AccommodationData = {
  startDate: string;
  endDate: string;
  title: string;
  text: string;
};

export type DestinationData = {
  id?: number;
  planInfo: {
    title: string;
    startDate: string;
    endDate: string;
    member: string;
    destination: string;
  };
  flight: {
    startDate: string;
    endDate: string;
  };
  accommodation: AccommodationData[];
  activities: {
    date: string;
    text: string;
  };
  apiParams: {
    countryCodes: string;
  };
};

export const destinationData = atom<DestinationData>({
  key: "destinationData",
  default: {
    planInfo: {
      title: "",
      startDate: "",
      endDate: "",
      member: "",
      destination: ""
    },
    flight: {
      startDate: "",
      endDate: ""
    },
    accommodation: [],
    activities: {
      date: "",
      text: ""
    },
    apiParams: {
      countryCodes: ""
    }
  }
});
