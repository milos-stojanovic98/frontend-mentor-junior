import buttonsList from "./data/buttonsList";
import "./index.css";
import { useGlobalContext } from "./context";

const App = () => {
  const {
    inputBill,
    setInputBill,
    numberOfPeople,
    setNumberOfPeople,
    totalSums,
    selected,
    isResetActive,
    handleActive,
    reset,
  } = useGlobalContext();

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
                  {buttonsList.map((button) => {
                    return (
                      <button
                        className={
                          button.id === selected ? "buttons-active" : "buttons"
                        }
                        type="button"
                        key={button.id}
                        onClick={() => handleActive(button)}
                      >
                        {button.title}
                      </button>
                    );
                  })}
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
              <button
                type="reset"
                onClick={(e) => reset(e)}
                className={isResetActive ? "reset-active" : "reset"}
              >
                Reset
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
