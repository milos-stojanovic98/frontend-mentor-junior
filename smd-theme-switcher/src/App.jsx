import { useState } from "react";
import "./styles.css";
const App = () => {
  return (
    <div className="background">
      <nav className="navbar">
        <div className="nav-left-side">
          <h1> Social Media Dashoborad</h1>
          <p> Total Followers: 23.004</p>
        </div>
        <div className="nav-right-side">
          <button type="click"> Dark Mode </button>
        </div>
      </nav>
      <section className="big-cards-container">
        <div id="border-blue" className="big-card">
          <p id="nathan">
            {" "}
            <img src="./../images/icon-facebook.svg"></img> @nathanf
          </p>
          <p className="nof"> 1987 </p>
          <h4 className="followers"> Followers </h4>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img>12 Today{" "}
          </span>
        </div>
        <div id="border-blue" className="big-card">
          <p id="nathan">
            {" "}
            <img src="./../images/icon-twitter.svg"></img> @nathanf
          </p>
          <p className="nof"> 1044 </p>
          <h4 className="followers"> Followers </h4>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 99 Today{" "}
          </span>
        </div>
        <div id="border-blue" className="big-card">
          <div id="insta-border"></div>
          <p id="nathan">
            <img src="./../images/icon-instagram.svg"></img> @nathanf
          </p>
          <p className="nof"> 11k </p>
          <h4 className="followers"> Followers </h4>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 1099 Today{" "}
          </span>
        </div>
        <div id="border-red" className="big-card">
          <p id="nathan">
            {" "}
            <img src="./../images/icon-youtube.svg"></img>@nathanf
          </p>
          <p className="nof"> 8239 </p>
          <h4 className="followers"> Subscribers </h4>
          <span className="today-red">
            {" "}
            <img src="./../images/icon-down.svg"></img> 144 Today{" "}
          </span>
        </div>
      </section>
    </div>
  );
};

export default App;
