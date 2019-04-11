import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="page page2">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="country">Nigeria (PAGE 2)</h1>
        <div className="otherLinks">
          <Link to="/page1">Argentina</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="flagBottom" />
    </div>
  );
};

export default Page2;
