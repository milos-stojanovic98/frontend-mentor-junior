import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [inputBill, setInputBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [inputValues, setInputValues] = useState("");
  const [totalSums, setTotalSums] = useState({
    totalSum: "0.00",
    amountSum: "0.00",
  });

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

  const handleInputValues = (e) => {
    e.preventDefault();
    const parsedValues = parseFloat(e.target.value);
    setInputValues(parsedValues);
  };
  const reset = (e) => {
    e.preventDefault();
    setInputBill("");
    setNumberOfPeople("");
  };

  useEffect(() => {
    if (inputBill && numberOfPeople && inputValues) {
      calculate();
    }
  }, [numberOfPeople, inputValues, inputBill]);

  return (
    <div className="main">
      <img src="./images/logo.svg" />
      <div className="container">
        <section className="left-section">
          <div className="left-side-container">
            <div className="bill">
              <span className="bill-span">Bill</span>
              <input
                className="input-field"
                id="input-bill"
                placeholder="0"
                type="number"
                value={inputBill}
                onChange={(e) => setInputBill(e.target.value)}
              />
            </div>

            <div className="select-tip">
              <span className="select">Select Tip %</span>
              <div className="fields">
                <div className="first-row">
                  <button
                    className="buttons"
                    onClick={(e) => handleInputValues(e)}
                    value="5"
                    type="button"
                  >
                    5%
                  </button>
                  <button
                    className="buttons"
                    onClick={(e) => handleInputValues(e)}
                    value="10"
                    type="button"
                  >
                    10%
                  </button>
                  <button
                    className="buttons"
                    onClick={(e) => handleInputValues(e)}
                    value="15"
                    type="button"
                  >
                    15%
                  </button>
                </div>
                <div className="second-row">
                  <button
                    className="buttons"
                    onClick={(e) => handleInputValues(e)}
                    value="25"
                    type="button"
                  >
                    25%
                  </button>
                  <button
                    className="buttons"
                    onClick={(e) => handleInputValues(e)}
                    value="50"
                    type="button"
                  >
                    50%
                  </button>
                  <input
                    className="custom-field"
                    id="custom"
                    placeholder="Custom"
                    type="number"
                    onChange={(e) => {
                      handleInputValues(e);
                    }}
                  ></input>
                </div>
              </div>
            </div>

            <div className="number-of-people">
              <span className="people-num">Number of People</span>
              <input
                id="number-of-people"
                className="input-field"
                placeholder="0"
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="right-section">
          <div className="right-side-container">
            <div className="tip">
              <div className="tip-amount">
                <p id="responsive">
                  Tip Amount <br></br>
                  <span id="responsive">/ person</span>{" "}
                </p>
              </div>
              <p className="amount-sum">${totalSums.totalSum}</p>
            </div>

            <div className="total">
              <div className="total-person">
                <p id="responsive">
                  Total <br></br>
                  <span id="responsive"> / person</span>{" "}
                </p>
              </div>
              <p className="total-sum">${totalSums.amountSum}</p>
            </div>

            <div className="reset-div">
              <button type="reset" onClick={(e) => reset(e)} className="reset">
                Reset
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
