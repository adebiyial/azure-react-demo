import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="flags">
      <div className="page page1">
        <div className="flagTop" />
        <div className="flagCenter">
          <h1 className="country">Argentina (PAGE 1)</h1>
          <Link to="/page1">Click to go to Page 1</Link>
        </div>
        <div className="flagBottom" />
      </div>
      <div className="page page2">
        <div className="flagTop" />
        <div className="flagCenter">
          <h1 className="country">Nigeria (PAGE 2)</h1>
          <Link to="/page2">Click to go to Page 2</Link>
        </div>
        <div className="flagBottom" />
      </div>
    </div>
  );
};

export default Page1;
