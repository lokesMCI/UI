import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/pin");
  };

  return (
    <div className="start-page-container">
      <h2>Welcome to Wells Fargo ATM</h2>
      <div className="grid-container">
        <button
          className="grid-button start-button"
          onClick={handleButtonClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartPage;
