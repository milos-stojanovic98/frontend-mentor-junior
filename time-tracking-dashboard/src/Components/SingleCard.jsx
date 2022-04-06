import React from "react";
import data from "./../data/data.json";

const SingleCard = ({ buttons }) => {
  return (
    <>
      {data &&
        data.map((mainData) => {
          const { id, className, title, name, timeframes } = mainData;
          return (
            <div key={id} id="cards" className={className}>
              <div className="stats">
                <div id="type" className={name}>
                  <span className="headings">{title}</span>
                  <img className="ellipsis" src="images/icon-ellipsis.svg" />
                </div>
                <div className={buttons.dailyBtn ? "daily show" : "daily"}>
                  <p className="current"> {timeframes.daily.current}hrs</p>
                  <span className="past">
                    Yesterday {timeframes.daily.previous} - hrs
                  </span>
                </div>
                <div className={buttons.weeklyBtn ? "weekly show" : "weekly"}>
                  <p className="current">{timeframes.weekly.current}hrs</p>
                  <span className="past">
                    {" "}
                    Last Week - {timeframes.weekly.previous}hrs{" "}
                  </span>
                </div>
                <div
                  className={buttons.monthlyBtn ? "monthly show" : "monthly"}
                >
                  <p className="current">{timeframes.monthly.current}hrs</p>
                  <span className="past">
                    Last Month - {timeframes.monthly.previous}hrs
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SingleCard;
