import React from "react";
import { StyledBigCard } from "../StyledComponents/StyledCards";
import { StyledTexts, NoF } from "../StyledComponents/StyledTexts";
import { useGlobalColorsContext } from "../colorsContext";
import { bigCards } from "../data/bigCards";

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
    <>
      {bigCards.map((card) => {
        const {
          id,
          icon,
          name,
          followers,
          today,
          smallIcon,
          styleID,
          todayColor,
          subscriber,
        } = card;
        return (
          <StyledBigCard
            key={id}
            backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
            id={styleID}
          >
            <div className="bc-first-row">
              <img src={icon}></img>
              <StyledTexts color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                {name}
              </StyledTexts>
            </div>
            <div className="bc-second-row">
              <NoF color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}>
                {followers}
              </NoF>
              <h4 className="followers"> {subscriber} </h4>
            </div>
            <span className={todayColor}>
              <img src={smallIcon}></img>
              {today} Today
            </span>
          </StyledBigCard>
        );
      })}
    </>
  );
};

export default BigCard;
