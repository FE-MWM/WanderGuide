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
    <div className="w-full h-[calc(100%-54px)] p-10">
      <section className="h-[132px] pb-16">
        <TravelItinerary />
      </section>
      <div className="flex flex-col h-[calc(100%-132px)] gap-7">
        <section className="h-2/6 grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <CurrentTime />
          </div>
          <div className="col-span-2">
            <Weather />
          </div>
        </section>
        <section className="h-4/6 grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <FlightPlans />
          </div>
          <div className="flex flex-col col-span-2 gap-7">
            <div className="h-2/6">
              <ExchangeRate />
            </div>
            <div className="h-4/6 grid grid-cols-2 gap-4">
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
