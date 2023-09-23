import React from "react";
import { Link } from "react-router-dom";
import Images from "../images/main_header.png";
const MainHeader = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysofWorkOut</h4>
            <h1>join this is Legends of the fitness World</h1>
            <p>
              potenti nullam ac tortor vitae purus faucibus ornare suspendisse
              sed nisi lacus sed viverra tellus in hac habitasse platea
              dictumst.
            </p>
            <Link to="/plans" className="btn lg">
              Get Stared
            </Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Images} alt="main Header Images" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
