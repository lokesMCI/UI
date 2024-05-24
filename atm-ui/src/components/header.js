import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="balance-toggle">
        <input type="checkbox" id="show-balances" />
        <label htmlFor="show-balances">Show Balances</label>
      </div>
      <div className="logo">
        <img src="wells-fargo-logo.png" alt="Wells Fargo" />
      </div>
    </div>
  );
};

export default Header;
