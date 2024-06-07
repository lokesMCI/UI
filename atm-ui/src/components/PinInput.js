import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PinInput.css";

const PinInput = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    setPin((prevPin) => {
      const newPin = prevPin + value;
      if (newPin.length === 4) {
        if (newPin === "1234") {
          // Replace '1234' with the correct PIN
          navigate("/home");
        } else {
          alert("Incorrect PIN");
          return "";
        }
      }
      return newPin;
    });
  };

  return (
    <div className="pin-input-container">
      <h2>Enter PIN</h2>
      <div className="pin-display">
        {pin
          .padEnd(4, "*")
          .split("")
          .map((char, index) => (
            <span key={index} className="pin-char">
              {char}
            </span>
          ))}
      </div>
      <div className="grid-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            className="grid-button pin-button"
            onClick={() => handleButtonClick(num.toString())}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PinInput;
