import React from "react";
import TravelItinerary from "./TravelItinerarySection/TravelItinerary";
import CurrentTime from "./CurrentTimeSection/CurrentTime";
import Weather from "./Weather/Weather";
import FlightPlans from "./FlightPlansSection/FlightPlans";
import ExchangeRate from "./ExchangeRateSection/ExchangeRate";
import Accommodation from "./AccommodationSection/Accommodation";
import Activity from "./ActivitySection/Activity";

const MainDashboard = () => {
  return (
    <div className="w-full p-10 overflow-auto h-full max-h-[calc(100%-54px)]">
      <section className="h-auto pb-1">
        <TravelItinerary />
      </section>
      <div className="flex flex-col h-full gap-7 max-h-[1000px] justify-around">
        <section className=" grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <CurrentTime />
          </div>
          <div className="col-span-2">
            <Weather />
          </div>
        </section>
        <section className="h-full grid grid-cols-3 gap-6 max-h-[620px]">
          <div className="col-span-1">
            <FlightPlans />
          </div>
          <div className="h-full flex flex-col col-span-2 gap-7 ">
            <div className="h-1/2">
              <ExchangeRate />
            </div>
            <div className="h-full grid grid-cols-2 gap-4">
              <Accommodation />
              <Activity />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainDashboard;
