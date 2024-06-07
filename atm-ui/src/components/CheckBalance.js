import React from "react";
import "./CheckBalance.css";

const CheckBalance = () => {
  return (
    <div className="check-balance">
      <h2>Account Balance</h2>
      <p>Your current balance is: $5,000.00</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default CheckBalance;
