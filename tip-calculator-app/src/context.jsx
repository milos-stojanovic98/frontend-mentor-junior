import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputBill, setInputBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [inputValues, setInputValues] = useState("");
  const [totalSums, setTotalSums] = useState({
    totalSum: "0.00",
    amountSum: "0.00",
  });
  const [selected, setSelected] = useState(0);
  const [isResetActive, setIsResetActive] = useState(false);

  const handleActive = (button) => {
    setSelected(button.id);
    const parsedValues = parseFloat(button.value);
    setInputValues(parsedValues);
  };
  //Fields reset
  const reset = (e) => {
    e.preventDefault();
    setInputBill("");
    setNumberOfPeople("");
    setTotalSums({ totalSum: "0.00", amountSum: "0.00" });
    setSelected(0);
  };
  //Calculate function
  const calculate = () => {
    const parsedInputBill = parseFloat(inputBill);
    const percentage = (parsedInputBill * inputValues) / 100;
    const total = parsedInputBill + percentage;
    const parsedNumOfPeople = parseFloat(numberOfPeople);
    //Total
    const totalS = total / parsedNumOfPeople;
    const amount = percentage / parsedNumOfPeople;
    setTotalSums({
      totalSum: totalS.toFixed(2),
      amountSum: amount.toFixed(2),
    });
  };
  useEffect(() => {
    if (inputBill && numberOfPeople && inputValues) {
      setIsResetActive(true);
      calculate();
    } else {
      setIsResetActive(false);
    }
  }, [numberOfPeople, inputValues, inputBill]);
  return (
    <AppContext.Provider
      value={{
        inputBill,
        setInputBill,
        numberOfPeople,
        setNumberOfPeople,
        inputValues,
        setInputValues,
        totalSums,
        setTotalSums,
        selected,
        setSelected,
        isResetActive,
        setIsResetActive,
        handleActive,
        reset,
        calculate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
