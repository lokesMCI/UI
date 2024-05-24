import React from "react";
import "./App.css";
import Header from "./components/header";
import GridButton from "./components/GridButton";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
