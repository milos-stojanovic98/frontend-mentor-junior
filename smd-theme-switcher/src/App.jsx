import { StyledNavbar, StyledH1 } from "./StyledComponents/StyledNavbar";
import { StyledContainer } from "./StyledComponents/StyledContainer";
import { StyledSmallCard } from "./StyledComponents/StyledCards";
import {
  StyledToggleButton,
  StyledTogglerDiv,
  StyledTogglerLabel,
} from "./StyledComponents/StyledToggler";
import {
  Category,
  NumberToday,
  TotalFollowers,
} from "./StyledComponents/StyledTexts";
import "./styles.css";
import { useGlobalColorsContext } from "./colorsContext";
import BigCard from "./components/BigCard";
import SmallCardFR from "./components/SmallCardFR";
import SmallCardSR from "./components/SmallCardSR";

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
      <StyledNavbar backgroundColor={isDarkTheme ? dtTopBgr : ltBgr}>
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
            <SmallCardFR />
          </div>
          <div className="small-cards-sr">
            <SmallCardSR />
          </div>
        </div>
      </section>
    </StyledContainer>
  );
};

export default App;
