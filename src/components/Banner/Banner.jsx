import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="theBackground">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center">Employee Directory</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p className="text-center">
                Clock on carrots to filter by heading or use the search box to
                narrow your results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="emptyDiv"></div>
    </>
  );
};

export default Banner;
