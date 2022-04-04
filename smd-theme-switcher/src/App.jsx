import { StyledNavbar } from "./StyledComponents/StyledNavbar";
import { StyledH1 } from "./StyledComponents/StyledH1";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      {/*navbar*/}
      <StyledNavbar>
        <div className="nav-content">
          <div className="nav-left-side">
            <StyledH1> Social Media Dashboard</StyledH1>
            <p> Total Followers: 23.004</p>
          </div>
          <div className="nav-right-side">
            <label id="toggle-label"> Dark Mode</label>
            <div className="togle-btn-div">
              {" "}
              <button id="toggle-btn" type="click">
                {" "}
              </button>
            </div>
          </div>
        </div>
      </StyledNavbar>
      {/*big cards*/}
      <section className="big-cards-container">
        <article id="border-blue" className="big-card">
          <div className="bc-first-row">
            <img src="./../images/icon-facebook.svg"></img>
            <p id="nathan"> @nathanf</p>
          </div>
          <div className="bc-second-row">
            <p className="nof"> 1987 </p>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img>12 Today{" "}
          </span>
        </article>
        <article id="border-blue" className="big-card">
          <div className="bc-first-row">
            {" "}
            <img src="./../images/icon-twitter.svg"></img>
            <p id="nathan"> @nathanf</p>
          </div>
          <div className="bc-second-row">
            <p className="nof"> 1044 </p>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 99 Today{" "}
          </span>
        </article>
        <article id="insta-border" className="big-card">
          <div className="bc-first-row">
            <img src="./../images/icon-instagram.svg"></img>
            <p id="nathan">@realnathanf</p>
          </div>
          <div className="bc-second-row">
            <p className="nof"> 11k </p>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 1099 Today{" "}
          </span>
        </article>
        <article id="border-red" className="big-card">
          <div className="bc-first-row">
            <img src="./../images/icon-youtube.svg"></img>
            <p id="nathan"> Nathan F.</p>
          </div>
          <div className="bc-second-row">
            <p className="nof"> 8239 </p>
            <h4 className="followers"> Subscribers </h4>
          </div>
          <span className="today-red">
            {" "}
            <img src="./../images/icon-down.svg"></img> 144 Today{" "}
          </span>
        </article>
      </section>
      {/*small cards*/}
      <section className="overview-container">
        <div className="ov-cards-container">
          <header>
            <StyledH1> Overview today</StyledH1>
          </header>
          <div className="small-cards-fr">
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Page views</span>
                <p className="number-today">87</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img> 3%{" "}
                </span>
              </div>
            </article>
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Likes </span>
                <p className="number-today">52</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>2%{" "}
                </span>
              </div>
            </article>
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Likes </span>
                <p className="number-today">5462</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-instagram.svg"></img>

                <span className="today">
                  <img src="./../images/icon-up.svg"></img>2257%{" "}
                </span>
              </div>
            </article>
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Profile views</span>
                <p className="number-today">52k</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>1375%{" "}
                </span>
              </div>
            </article>
          </div>
          <div className="small-cards-sr">
            {" "}
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Retweets</span>
                <p className="number-today">117</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>303%{" "}
                </span>
              </div>
            </article>
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Likes</span>
                <p className="number-today">507</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>553%{" "}
                </span>
              </div>
            </article>
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Likes </span>
                <p className="number-today">107</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>19%{" "}
                </span>
              </div>
            </article>
            <article className="small-card">
              <div className="sc-inside-first-row">
                <span id="category"> Total views</span>
                <p className="number-today">1407</p>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>12%{" "}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
