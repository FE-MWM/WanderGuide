import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";

const Home = () => {
  return (
    <div className="flex w-full h-full bg-blue-50 min-w-[1000px]">
      <nav className="w-2/12 h-full min-w-[190px]">
        <Navbar />
      </nav>
      <main className="w-10/12 h-full">
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default Home;
