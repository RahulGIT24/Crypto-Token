import React, { useState } from "react";
import { Principal } from '@dfinity/principal'
import { token } from "../../../declarations/token";

function Balance() {

  const [inputValue, setInputValue] = useState("")
  const [balance, setbalance] = useState("");
  const [symbol, setSymbol] = useState("");
  const[isHidden,sethidden] = useState(true);

  async function handleClick() {
    const principal = Principal.fromText(inputValue)
    const availableBalance = await token.balanceOf(principal)
    const getSymbol = await token.symbolSign();
    setbalance(availableBalance.toLocaleString())
    setSymbol(getSymbol)
    sethidden(false)
  }

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="window white">
      <label>Check account token balance: </label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          onChange={onChange}
          value={inputValue}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balance} {symbol}</p>
    </div>
  );
}

export default Balance;
