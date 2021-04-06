import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="bun1"></div>
      <div className="face"></div>
      <div className="sauce"></div>
      <div className="onion"></div>
      <div className="lettuce"></div>
      <div className="cheese">
        <div className="cheese-melt"></div>
        <div className="cheese-melt"></div>
      </div>
      <div className="ham"></div>
      <div className="bun2"></div>
      <div className="animated-jello"></div>
      <h1 className = "heading-primary">Build your own delicious burger!!!</h1>
      <a href="/burger-builder" className="btn">Get Started</a>
    </div>
  );
};

export default Home;
