import React from "react";
import "./SetLimit.css";

const SetLimit = () => {
  return (
    <div className="set-limit">
      <h2>Set Limit</h2>
      <form>
        <label>
          Daily Limit:
          <input type="number" />
        </label>
        <button type="submit">Set Limit</button>
      </form>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default SetLimit;
