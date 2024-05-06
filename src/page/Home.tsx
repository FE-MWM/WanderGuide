import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";

const Home = () => {
  return (
    <div className="flex w-full h-full bg-[#f5f7fa] min-w-[1000px] min-h-[800px]">
      <nav className="w-[260px] h-full">
        <Navbar />
      </nav>
      <main className="w-[calc(100%-260px)] h-full">
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default Home;
