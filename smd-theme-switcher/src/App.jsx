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
      <article className="overview-container">
        <div className="ov-cards-container">
          <header>
            <h1> Overview today</h1>
          </header>
          <div className="small-cards-fr">
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Page views</span>
                <p className="number-today">87</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img> 3%{" "}
                </span>
              </div>
            </div>
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Likes </span>
                <p className="number-today">52</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>2%{" "}
                </span>
              </div>
            </div>
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Likes </span>
                <p className="number-today">5462</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-instagram.svg"></img>

                <span className="today">
                  <img src="./../images/icon-up.svg"></img>2257%{" "}
                </span>
              </div>
            </div>
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Profile views</span>
                <p className="number-today">52k</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>1375%{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="small-cards-sr">
            {" "}
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Retweets</span>
                <p className="number-today">117</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>303%{" "}
                </span>
              </div>
            </div>
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Likes</span>
                <p className="number-today">507</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>553%{" "}
                </span>
              </div>
            </div>
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Likes </span>
                <p className="number-today">107</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>19%{" "}
                </span>
              </div>
            </div>
            <div className="small-card">
              <div className="sc-fr">
                <span id="category"> Total views</span>
                <p className="number-today">1407</p>
              </div>
              <div className="sc-sr">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>12%{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default App;
