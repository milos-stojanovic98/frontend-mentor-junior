import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [advices, setAdvices] = useState({ advice: "", id: "" });
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://api.adviceslip.com/advice");
      const response = await request.json();
      const advice = response.slip.advice;
      const id = response.slip.id;
      setAdvices({ advice, id });
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
