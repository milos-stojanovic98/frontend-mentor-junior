import { useState } from "react";
import { StyledNavbar, StyledH1 } from "./StyledComponents/StyledNavbar";
import { StyledContainer } from "./StyledComponents/StyledContainer";
import { StyledBigCard, StyledSmallCard } from "./StyledComponents/StyledCards";
import {
  StyledToggleButton,
  StyledTogglerDiv,
  StyledTogglerLabel,
} from "./StyledComponents/StyledToggler";
import {
  StyledTexts,
  NoF,
  Category,
  NumberToday,
  TotalFollowers,
} from "./StyledComponents/StyledTexts";
import "./styles.css";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const themeToggler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <StyledContainer
      backgroundColor={
        isDarkTheme ? "var(--dt-background)" : " --lt-background"
      }
    >
      {/*navbar*/}
      <StyledNavbar
        backgroundColor={
          isDarkTheme ? "var(--dt-top-background)" : "var(--lt-top-background)"
        }
      >
        <div className="nav-content">
          <div className="nav-left-side">
            <StyledH1
              color={
                isDarkTheme
                  ? "var(--dt-text-white)"
                  : "var(--lt-text-very-dark-blue)"
              }
            >
              {" "}
              Social Media Dashboard
            </StyledH1>
            <TotalFollowers
              color={
                isDarkTheme ? "var(--dt-text-blue)" : "var(--lt-text-dark-blue)"
              }
            >
              {" "}
              Total Followers: 23.004
            </TotalFollowers>
          </div>
          <div className="nav-right-side">
            <StyledTogglerLabel
              color={
                isDarkTheme ? "var(--dt-text-blue)" : "var(--light-toggle)"
              }
            >
              Dark Mode
            </StyledTogglerLabel>
            <StyledTogglerDiv
              background={
                isDarkTheme
                  ? "linear-gradient(var(--dark-toggle))"
                  : "var(--light-toggle)"
              }
            >
              {" "}
              <StyledToggleButton
                backgroundColor={
                  isDarkTheme
                    ? "var(--dt-top-background)"
                    : "var(--dt-text-white)"
                }
              ></StyledToggleButton>{" "}
            </StyledTogglerDiv>
          </div>
        </div>
      </StyledNavbar>
      {/*big cards*/}
      <section className="big-cards-container">
        <StyledBigCard
          backgroundColor={
            isDarkTheme
              ? "var(--dt-card-background)"
              : "var(--lt-card-background)"
          }
          id="border-blue"
        >
          <div className="bc-first-row">
            <img src="./../images/icon-facebook.svg"></img>
            <StyledTexts
              color={
                isDarkTheme ? "var(--dt-text-blue)" : "var(--lt-text-dark-blue)"
              }
            >
              @nathanf
            </StyledTexts>{" "}
          </div>
          <div className="bc-second-row">
            <NoF
              color={
                isDarkTheme
                  ? "var(--dt-text-white)"
                  : "var(--lt-text-very-dark-blue)"
              }
            >
              1987{" "}
            </NoF>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img>12 Today{" "}
          </span>
        </StyledBigCard>
        <StyledBigCard
          backgroundColor={
            isDarkTheme
              ? "var(--dt-card-background)"
              : "var(--lt-card-background)"
          }
          id="border-blue"
        >
          <div className="bc-first-row">
            {" "}
            <img src="./../images/icon-twitter.svg"></img>
            <StyledTexts
              color={
                isDarkTheme ? "var(--dt-text-blue)" : "var(--lt-text-dark-blue)"
              }
            >
              @nathanf
            </StyledTexts>{" "}
          </div>
          <div className="bc-second-row">
            <NoF
              color={
                isDarkTheme
                  ? "var(--dt-text-white)"
                  : "var(--lt-text-very-dark-blue)"
              }
            >
              {" "}
              1044{" "}
            </NoF>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 99 Today{" "}
          </span>
        </StyledBigCard>
        <StyledBigCard
          backgroundColor={
            isDarkTheme
              ? "var(--dt-card-background)"
              : "var(--lt-card-background)"
          }
          id="insta-border"
        >
          <div className="bc-first-row">
            <img src="./../images/icon-instagram.svg"></img>
            <StyledTexts
              color={
                isDarkTheme ? "var(--dt-text-blue)" : "var(--lt-text-dark-blue)"
              }
            >
              @realnathanf
            </StyledTexts>{" "}
          </div>
          <div className="bc-second-row">
            <NoF
              color={
                isDarkTheme
                  ? "var(--dt-text-white)"
                  : "var(--lt-text-very-dark-blue)"
              }
            >
              {" "}
              11k{" "}
            </NoF>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            {" "}
            <img src="./../images/icon-up.svg"></img> 1099 Today{" "}
          </span>
        </StyledBigCard>
        <StyledBigCard
          backgroundColor={
            isDarkTheme
              ? "var(--dt-card-background)"
              : "var(--lt-card-background)"
          }
          id="border-red"
        >
          <div className="bc-first-row">
            <img src="./../images/icon-youtube.svg"></img>
            <StyledTexts
              color={
                isDarkTheme ? "var(--dt-text-blue)" : "var(--lt-text-dark-blue)"
              }
            >
              Nathan F
            </StyledTexts>{" "}
          </div>
          <div className="bc-second-row">
            <NoF
              color={
                isDarkTheme
                  ? "var(--dt-text-white)"
                  : "var(--lt-text-very-dark-blue)"
              }
            >
              {" "}
              8239{" "}
            </NoF>
            <h4 className="followers"> Subscribers </h4>
          </div>
          <span className="today-red">
            {" "}
            <img src="./../images/icon-down.svg"></img> 144 Today{" "}
          </span>
        </StyledBigCard>
      </section>
      {/*small cards*/}
      <section className="overview-container">
        <div className="ov-cards-container">
          <header>
            <StyledH1
              color={
                isDarkTheme
                  ? "var(--dt-text-white)"
                  : "var(--lt-text-very-dark-blue)"
              }
            >
              {" "}
              Overview - today
            </StyledH1>
          </header>
          <div className="small-cards-fr">
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  Page views
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  87
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img> 3%{" "}
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Likes{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  52
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>2%{" "}
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Likes{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  5462
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-instagram.svg"></img>

                <span className="today">
                  <img src="./../images/icon-up.svg"></img>2257%{" "}
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Profile views{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  52k
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>1375%{" "}
                </span>
              </div>
            </StyledSmallCard>
          </div>
          <div className="small-cards-sr">
            {" "}
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Retweets{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  117
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>303%{" "}
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Likes{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  507
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>553%{" "}
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Likes{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  107
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>19%{" "}
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={
                isDarkTheme
                  ? "var(--dt-card-background)"
                  : "var(--lt-card-background)"
              }
            >
              <div className="sc-inside-first-row">
                <Category
                  color={
                    isDarkTheme
                      ? "var(--dt-text-blue)"
                      : "var(--lt-text-dark-blue)"
                  }
                >
                  {" "}
                  Total Views{" "}
                </Category>
                <NumberToday
                  color={
                    isDarkTheme
                      ? "var(--dt-text-white)"
                      : "var(--lt-text-very-dark-blue)"
                  }
                >
                  1407
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>12%{" "}
                </span>
              </div>
            </StyledSmallCard>
          </div>
        </div>
      </section>
    </StyledContainer>
  );
};

export default App;
