import React from "react";
import "./Best.css";
import apt1 from "../../assets/apt1.jpeg";
import apt2 from "../../assets/apt2.jpeg";
import apt3 from "../../assets/apt3.jpeg";

const Best = () => {
  return (
    <div className="best">
      <h1>Find Best Rated Properties</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="container">
        <img src={apt1} alt="Apt1" />
        <img src={apt2} alt="Apt2" />
        <img src={apt3} alt="Apt3" />
      </div>
      <button className="btn">View All</button>
    </div>
  );
};

export default Best;
