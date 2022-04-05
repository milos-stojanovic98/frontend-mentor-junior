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
import { useGlobalColorsContext } from "./colorsContext";
import BigCard from "./components/BigCard";

const App = () => {
  const {
    isDarkTheme,
    themeToggler,
    dtBgr,
    ltBgr,
    dtCardBgr,
    ltCardBgr,
    dtWhiteText,
    dtTextBlue,
    ltDarkBlueText,
    ltVeryDarkBlueText,
    ltToggle,
    dtTopBgr,
    dtToggle,
  } = useGlobalColorsContext();

  return (
    <StyledContainer backgroundColor={isDarkTheme ? dtBgr : ltBgr}>
      {/*navbar*/}
      <StyledNavbar backgroundColor={isDarkTheme ? dtBgr : ltBgr}>
        <div className="nav-content">
          <div className="nav-left-side">
            <StyledH1 color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>
              Social Media Dashboard
            </StyledH1>
            <TotalFollowers color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
              Total Followers: 23.004
            </TotalFollowers>
          </div>
          <div className="nav-right-side">
            <StyledTogglerLabel color={isDarkTheme ? dtTextBlue : ltToggle}>
              Dark Mode
            </StyledTogglerLabel>
            <StyledTogglerDiv
              justifycontent={isDarkTheme ? "flex-start" : "flex-end"}
              background={isDarkTheme ? dtToggle : ltToggle}
            >
              <StyledToggleButton
                onClick={themeToggler}
                backgroundColor={isDarkTheme ? dtTopBgr : dtWhiteText}
              ></StyledToggleButton>{" "}
            </StyledTogglerDiv>
          </div>
        </div>
      </StyledNavbar>
      {/*big cards*/}
      <section className="big-cards-container">
        <BigCard />
        <StyledBigCard
          backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
          id="border-blue"
        >
          <div className="bc-first-row">
            <img src="./../images/icon-twitter.svg"></img>
            <StyledTexts color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
              @nathanf
            </StyledTexts>
          </div>
          <div className="bc-second-row">
            <NoF color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>
              1044
            </NoF>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            <img src="./../images/icon-up.svg"></img> 99 Today
          </span>
        </StyledBigCard>
        <StyledBigCard
          backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
          id="insta-border"
        >
          <div className="bc-first-row">
            <img src="./../images/icon-instagram.svg"></img>
            <StyledTexts color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
              @realnathanf
            </StyledTexts>
          </div>
          <div className="bc-second-row">
            <NoF color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>
              11k
            </NoF>
            <h4 className="followers"> Followers </h4>
          </div>
          <span className="today">
            <img src="./../images/icon-up.svg"></img> 1099 Today
          </span>
        </StyledBigCard>
        <StyledBigCard
          backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
          id="border-red"
        >
          <div className="bc-first-row">
            <img src="./../images/icon-youtube.svg"></img>
            <StyledTexts color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
              Nathan F
            </StyledTexts>
          </div>
          <div className="bc-second-row">
            <NoF color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>
              8239
            </NoF>
            <h4 className="followers"> Subscribers </h4>
          </div>
          <span className="today-red">
            <img src="./../images/icon-down.svg"></img> 144 Today
          </span>
        </StyledBigCard>
      </section>
      {/*small cards*/}
      <section className="overview-container">
        <div className="ov-cards-container">
          <header>
            <StyledH1 color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>
              Overview - today
            </StyledH1>
          </header>
          <div className="small-cards-fr">
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Page views
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  87
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>3%
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Likes
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
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
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Likes
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  5462
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-instagram.svg"></img>

                <span className="today">
                  <img src="./../images/icon-up.svg"></img>2257%
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Profile views
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  52k
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-facebook.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>1375%
                </span>
              </div>
            </StyledSmallCard>
          </div>
          <div className="small-cards-sr">
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Retweets
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  117
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>303%
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Likes
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  507
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-twitter.svg"></img>
                <span className="today">
                  <img src="./../images/icon-up.svg"></img>553%
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Likes
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  107
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>19%
                </span>
              </div>
            </StyledSmallCard>
            <StyledSmallCard
              backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            >
              <div className="sc-inside-first-row">
                <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                  Total Views
                </Category>
                <NumberToday
                  color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
                >
                  1407
                </NumberToday>
              </div>
              <div className="sc-inside-second-row">
                <img id="icons" src="./../images/icon-youtube.svg"></img>
                <span className="today-red">
                  <img src="./../images/icon-down.svg"></img>12%
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
