import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="page page1">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="country">Argentina (PAGE 1)</h1>
        <div className="otherLinks">
          <Link to="/page2">Nigeria</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="flagBottom" />
    </div>
  );
};

export default Page1;
