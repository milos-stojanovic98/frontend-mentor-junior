import React from "react";
import { StyledBigCard } from "../StyledComponents/StyledCards";
import { StyledTexts, NoF } from "../StyledComponents/StyledTexts";
import { useGlobalColorsContext } from "../colorsContext";

const BigCard = () => {
  const {
    isDarkTheme,
    dtCardBgr,
    ltCardBgr,
    dtTextBlue,
    ltDarkBlueText,
    dtWhiteText,
    ltVeryDarkBlueText,
  } = useGlobalColorsContext();

  return (
    <StyledBigCard
      backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
      id="border-blue"
    >
      <div className="bc-first-row">
        <img src="./../images/icon-facebook.svg"></img>
        <StyledTexts color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
          @nathanf
        </StyledTexts>
      </div>
      <div className="bc-second-row">
        <NoF color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>1987</NoF>
        <h4 className="followers"> Followers </h4>
      </div>
      <span className="today">
        <img src="./../images/icon-up.svg"></img>12 Today
      </span>
    </StyledBigCard>
  );
};

export default BigCard;
