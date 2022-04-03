import { useState } from "react";
import "./styles.css";
const App = () => {
  return (
    <div className="background">
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left-side">
            <h1> Social Media Dashboard</h1>
            <p> Total Followers: 23.004</p>
          </div>
          <div className="nav-right-side">
            <button type="click"> Dark Mode </button>
          </div>
        </div>
      </nav>
      <section className="big-cards-container">
        <div id="border-blue" className="big-card">
          <div className="first-row">
            <img src="./../images/icon-facebook.svg"></img>
            <p id="nathan"> @nathanf</p>
          </div>
          <div className="second-row">
            <p className="nof"> 1987 </p>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img>12 Today{" "}
          </span>
        </div>
        <div id="border-blue" className="big-card">
          <div className="first-row">
            {" "}
            <img src="./../images/icon-twitter.svg"></img>
            <p id="nathan"> @nathanf</p>
          </div>
          <div className="second-row">
            <p className="nof"> 1044 </p>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 99 Today{" "}
          </span>
        </div>
        <div id="insta-border" className="big-card">
          <div className="first-row">
            <img src="./../images/icon-instagram.svg"></img>
            <p id="nathan">@realnathanf</p>
          </div>
          <div className="second-row">
            <p className="nof"> 11k </p>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 1099 Today{" "}
          </span>
        </div>
        <div id="border-red" className="big-card">
          <div className="first-row">
            <img src="./../images/icon-youtube.svg"></img>
            <p id="nathan"> Nathan F.</p>
          </div>
          <div className="second-row">
            <p className="nof"> 8239 </p>
            <h4 className="followers"> Subscribers </h4>
          </div>
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
