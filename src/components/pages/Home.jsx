import React from "react";
import Announcement from "../Announcement";

import Navbar from "../Navbar";
import Slider from "../Slider";
const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
