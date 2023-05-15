import React, { useState } from "react";
import { token } from "../../../declarations/token";
import { Principal } from '@dfinity/principal'

function Transfer() {

  const [recipientID, setrecipientID] = useState("")
  const [amount, setamount] = useState("")
  const[isDisabled,setDisabled] = useState(false)

  async function handleClick() {
    setDisabled(true)
    await token.transfer(Principal.fromText(recipientID), Number(amount));
    alert("Successfully Transferred")
    setDisabled(false)
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientID}
                onChange={(e) => { setrecipientID(e.target.value) }}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => { setamount(e.target.value) }}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
