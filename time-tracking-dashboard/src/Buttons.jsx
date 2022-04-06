import { useState } from "react";

const Buttons = () => {
  const [buttons, setButtons] = useState({
    dailyBtn: false,
    weeklyBtn: true,
    monthlyBtn: false,
  });

  const buttonSetter = (daily, weekly, monthly) => {
    setButtons({
      dailyBtn: daily,
      weeklyBtn: weekly,
      monthlyBtn: monthly,
    });
  };
  const handleDaily = (e) => {
    e.preventDefault();
    buttonSetter(true, false, false);
  };
  const handleWeekly = (e) => {
    e.preventDefault();
    buttonSetter(false, true, false);
  };
  const handleMonthly = (e) => {
    e.preventDefault();
    buttonSetter(false, false, true);
  };
  return {
    buttons,
    dailyBtn,
    weeklyBtn,
    monthlyBtn,
    handleDaily,
    handleWeekly,
    handleMonthly,
  };
};

export default Buttons;
