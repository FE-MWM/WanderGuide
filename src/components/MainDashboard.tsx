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
    <div className="w-full h-[calc(100%-54px)] p-4">
      <section className="h-[50px]">
        <TravelItinerary />
      </section>
      <div className="flex flex-col h-[calc(100%-50px)] gap-2">
        <section className="h-2/6 grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <CurrentTime />
          </div>
          <div className="col-span-2">
            <Weather />
          </div>
        </section>
        <section className="h-4/6 grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <FlightPlans />
          </div>
          <div className="col-span-2">
            <div className="h-2/6">
              <ExchangeRate />
            </div>
            <div className="h-4/6 grid grid-cols-2 gap-2">
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
