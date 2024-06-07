import React from "react";
import "./UpdatePin.css";

const UpdatePin = () => {
  return (
    <div className="update-pin">
      <h2>Update PIN</h2>
      <form>
        <label>
          New PIN:
          <input type="password" />
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default UpdatePin;
