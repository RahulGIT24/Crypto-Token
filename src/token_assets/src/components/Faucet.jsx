import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {

  const [disabled, setDisabled] = useState(false)
  const[text,setText] = useState("Gimme gimme")

  async function handleClick(event) {
    setDisabled(true)
    const result  = await token.payOut();
    setText(result)
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DRahul tokens here! Claim 10,000 DRAH coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={disabled}>
          {text}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
