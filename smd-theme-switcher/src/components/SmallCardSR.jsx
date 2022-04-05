import React from "react";
import { useGlobalColorsContext } from "../colorsContext";
import { StyledSmallCard } from "../StyledComponents/StyledCards";
import { Category, NumberToday } from "../StyledComponents/StyledTexts";
import { smallCardsSR } from "../data/smallCardsSR";

const SmallCardSR = () => {
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
      {smallCardsSR.map((card) => {
        const { id, category, icon, numOf, percentage, smallIcon, todayColor } =
          card;
        return (
          <StyledSmallCard
            key={id}
            backgroundColor={isDarkTheme ? dtCardBgr : ltCardBgr}
          >
            <div className="sc-inside-first-row">
              <Category color={isDarkTheme ? dtTextBlue : ltDarkBlueText}>
                {category}
              </Category>
              <NumberToday
                color={isDarkTheme ? dtWhiteText : ltVeryDarkBlueText}
              >
                {numOf}
              </NumberToday>
            </div>
            <div className="sc-inside-second-row">
              <img id="icons" src={icon}></img>
              <span className={todayColor}>
                <img src={smallIcon}></img>
                {percentage}%
              </span>
            </div>
          </StyledSmallCard>
        );
      })}
    </>
  );
};

export default SmallCardSR;
