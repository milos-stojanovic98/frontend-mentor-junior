import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [advices, setAdvices] = useState({ advice: "", id: "" });
  const [fetching, setFetching] = useState(false);
  const url = "https://api.adviceslip.com/advice";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, {
          headers: {
            Accept: "application/json",
          },
        });
        const advice = response.data.slip.advice;
        const id = response.data.slip.id;
        setAdvices({ advice, id });
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [fetching]);
  return (
    <div className="all">
      <div className="container">
        <div className="header-div">
          <p className="title">
            {" "}
            Advice #<span>{advices.id}</span>{" "}
          </p>
        </div>
        <div className="center">
          <p className="quote">{advices.advice}</p>
        </div>
        <div className="footer-div">
          <img
            className="divider"
            src="/images/pattern-divider-desktop.svg"
            alt="divider"
          />
        </div>
      </div>
      <div className="dice-div">
        <img
          className="kockica"
          src="/images/icon-dice.svg"
          alt="kockica"
          onClick={() => setFetching(!fetching)}
        />
      </div>
    </div>
  );
};

export default App;
