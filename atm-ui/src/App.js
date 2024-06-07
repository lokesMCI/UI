import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import GridButton from "./components/GridButton";
import Footer from "./components/footer";
import CheckBalance from "./components/CheckBalance";
import UpdatePin from "./components/UpdatePin";
import SetLimit from "./components/SetLimit";
import PinInput from "./components/PinInput";

function Home() {
  return (
    <>
      <Header />
      <div className="grid-container">
        <GridButton
          type="green"
          title="Get $60"
          description="Family Checking • 3365"
          additional="No Receipt"
        />
        <GridButton
          type="green"
          title="Deposit Checks"
          description="Savings • 7882"
          additional="Print Receipt"
        />
        <GridButton type="black" title="Get Cash" />
        <GridButton type="black" title="Deposit Checks" />
        <GridButton type="black" title="Make Payment" />
        <GridButton type="black" title="Check Balance" route="/check-balance" />
        <GridButton type="black" title="Update PIN" route="/update-pin" />
        <GridButton type="black" title="Set Limit" route="/set-limit" />
        <GridButton type="image" isImage>
          <p>
            We noticed you moved.
            <br />
            Need New Checks?
          </p>
          <button className="order-button">Order them here</button>
        </GridButton>
        <GridButton
          type="black"
          title="More Choices"
          description="Balances"
          additional="Transfer<br/>Buy Stamps and More"
        />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PinInput />} />
        <Route path="/home" element={<Home />} />
        <Route path="/check-balance" element={<CheckBalance />} />
        <Route path="/update-pin" element={<UpdatePin />} />
        <Route path="/set-limit" element={<SetLimit />} />
      </Routes>
    </Router>
  );
}

export default App;
