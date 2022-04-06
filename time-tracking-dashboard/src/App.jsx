import React, { useState } from "react";
import "./styles/index.css";
import SingleCard from "./Components/SingleCard";
import data from "./data/data.json";

const App = () => {
  const [buttons, setButtons] = useState({
    dailyBtn: false,
    weeklyBtn: true,
    monthlyBtn: false,
  });
  const handleDaily = (e) => {
    e.preventDefault();
    buttonSetter(true, false, false);
  };
  const handleWeekly = (e) => {
    e.preventDefault();
    buttonSetter(false, true, false);
  };
  const handleMonthly = (e) => {
    e.preventDefault();
    buttonSetter(false, false, true);
  };

  const buttonSetter = (daily, weekly, monthly) => {
    setButtons({
      dailyBtn: daily,
      weeklyBtn: weekly,
      monthlyBtn: monthly,
    });
  };
  return (
    <div className="main">
      <div className="container">
        {/*Left side(big card*/}
        <div className="big-div">
          <div className="jeremy">
            <div className="image-container">
              <img src="./images/image-jeremy.png" />
            </div>
            <article className="report">
              <p className="report-for">Report for</p>
              <div className="jeremy-robson-div">
                <span className="jeremy-robson">Jeremy </span>{" "}
                <span className="jeremy-robson"> Robson</span>
              </div>
            </article>
          </div>
          <section className="menu">
            <button
              type="click"
              id={buttons.dailyBtn ? "button-active" : "buttons"}
              onClick={(e) => handleDaily(e)}
            >
              Daily{" "}
            </button>
            <button
              type="click"
              id={buttons.weeklyBtn ? "button-active" : "buttons"}
              onClick={(e) => handleWeekly(e)}
            >
              Weekly
            </button>
            <button
              type="click"
              id={buttons.monthlyBtn ? "button-active" : "buttons"}
              onClick={(e) => handleMonthly(e)}
            >
              Monthly
            </button>
          </section>
        </div>
        {/* right side*/}
        <article className="section-container">
          <SingleCard key={data.id} buttons={buttons} />
        </article>
      </div>
    </div>
  );
};

export default App;
