import React from "react";
import buttonsList from "./data/buttonsList";

const Buttons = ({ selected, handleActive }) => {
  return (
    <>
      {buttonsList.map((button) => {
        return (
          <button
            className={button.id === selected ? "buttons-active" : "buttons"}
            type="button"
            key={button.id}
            onClick={() => handleActive(button)}
          >
            {button.title}
          </button>
        );
      })}
    </>
  );
};

export default Buttons;
