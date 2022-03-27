import "./index.css";

const App = () => {
  return (
    <div className="all">
      <div className="container">
        <div className="header-div">
          <p className="title"> Advice #117 </p>
        </div>
        <div className="center">
          <p className="quote">
            {" "}
            "It's easy to sit up and take <br></br> notice, what's difficult is
            getting <br></br> up and taking action."
          </p>
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
        <img className="kockica" src="/images/icon-dice.svg" alt="kockica" />
      </div>
    </div>
  );
};

export default App;
