import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState([]);
  const [id, setId] = useState();

  const fetchData = async () => {
    const request = await fetch("https://api.adviceslip.com/advice");
    const response = await request.json();
    const data = response.slip.advice;
    const id = response.slip.id;
    setId(id);
    setText(data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="all">
      <div className="container">
        <div className="header-div">
          <p className="title">
            {" "}
            Advice #<span>{id}</span>{" "}
          </p>
        </div>
        <div className="center">
          <p className="quote">{text}</p>
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
          onClick={() => fetchData()}
        />
      </div>
    </div>
  );
};

export default App;
