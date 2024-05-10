import React from "react";
import AccommodationList from "./BookingSection/AccommodationList";
import TourList from "./BookingSection/TourList";

const BookDashboard = () => {
  return (
    <div className="w-full p-10 overflow-auto h-full max-h-[calc(100%-54px)] flex gap-[34px]">
      <section className="flex-1">
        <AccommodationList />
      </section>
      <section className="flex-1">
        <TourList />
      </section>
    </div>
  );
};

export default BookDashboard;
