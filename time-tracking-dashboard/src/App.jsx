import React, { useState } from "react";
import "./index.css";

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
              id="buttons"
              className="daily-button"
              onClick={(e) => handleDaily(e)}
            >
              Daily{" "}
            </button>
            <button
              type="click"
              id="buttons"
              className="weekly-button"
              onClick={(e) => handleWeekly(e)}
            >
              Weekly
            </button>
            <button
              type="click"
              id="buttons"
              className="monthly-button"
              onClick={(e) => handleMonthly(e)}
            >
              Monthly
            </button>
          </section>
        </div>

        <article className="section-container">
          <section className="top-row">
            {/* work card*/}
            <div id="cards" className="first">
              <div className="stats">
                <div id="type" className="work">
                  <span className="headings">Work</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                {/* daily */}
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current">5hrs</p>
                  <span className="past">Yesterday - 7hrs</span>
                </div>
                {/* weekly*/}
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current">32hrs</p>
                  <span className="past"> Last Week - 36hrs </span>
                </div>
                {/* monthly*/}
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">103hrs</p>
                  <span className="past">Last Month - 128hrs</span>
                </div>
              </div>
            </div>
            {/* play card */}
            <div id="cards" className="second">
              <div className="stats">
                <div id="type" className="play">
                  <span className="headings">Play</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                {/* daily */}
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current">1hr</p>
                  <span className="past">Yesterday - 2hrs</span>
                </div>
                {/* weekly */}
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current">10hrs</p>
                  <span className="past">Last Week - 8hrs</span>
                </div>
                {/* monthly*/}
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">23hrs</p>
                  <span className="past">Last Month - 29hrs</span>
                </div>
              </div>
            </div>
            {/* study card*/}
            <div id="cards" className="third">
              <div className="stats">
                <div id="type" className="study">
                  <span className="headings">Study</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                {/* daily*/}
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current">0hrs</p>
                  <span className="past">Yesterday - 1hr</span>
                </div>
                {/* weeklyy*/}
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current"> 4hrs</p>
                  <span className="past">Last Week - 7hrs</span>
                </div>
                {/* monthly*/}
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">13hrs</p>
                  <span className="past"> Last Month - 19hrs </span>
                </div>
              </div>
            </div>
          </section>
          <section className="bottom-row">
            {/* excercise card */}
            <section id="cards" className="fourth">
              <div className="stats">
                <div id="type" className="exercise">
                  <span className="headings">Exercise</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                {/* daily */}
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current">1hr</p>
                  <span className="past"> Yesterday - 1hr</span>
                </div>
                {/* weekly */}
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current">4hrs</p>
                  <span className="past">Last Week - 5hrs</span>
                </div>
                {/* monthly*/}
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">11hrs</p>
                  <span className="past">Last Month - 18hrs</span>
                </div>
              </div>
            </section>
            {/* social card*/}
            <div id="cards" className="fifth">
              <div className="stats">
                <div id="type" className="social">
                  <span className="headings">Social</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                {/* daily*/}
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current">1hr</p>
                  <span className="past">Yesterday - 3hrs</span>
                </div>
                {/* weekly*/}
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current">5hrs</p>
                  <span className="past">Last Week - 10hrs</span>
                </div>
                {/* monthly*/}
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">21hrs</p>
                  <span className="past">Last Month - 23hrs</span>
                </div>
              </div>
            </div>
            {/* self care */}
            <div id="cards" className="sixth">
              <div className="stats">
                <div id="type" className="self-care">
                  <span className="headings">Self Care</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                {/* daily*/}
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current">0hrs</p>
                  <span className="past">Yesterday - 1hr</span>
                </div>
                {/* weekly*/}
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current">2hrs</p>
                  <span className="past">Last Week - 2hrs</span>
                </div>
                {/* monthly*/}
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">7hrs</p>
                  <span className="past">Last Month - 11hrs</span>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default App;
