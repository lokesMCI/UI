import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <button onClick={() => alert("Returning your card...")}>
        Return Your Card
      </button>
    </div>
  );
};

export default Footer;
