import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {

  }

  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        <span role="img" aria-label="hand-wave">π</span> Welcome!
        </div>

        <div className="bio">
        γ€γΌγ΅γͺγ’γ γ¦γ©γ¬γγγζ₯ηΆγγ¦γγ‘γγ»γΌγΈγδ½ζγγγγ<span role="img" aria-label="hand-wave">π</span>γιγ£γ¦γγ γγ<span role="img" aria-label="shine">β¨</span>
        </div>

        <button className="waveButton" onClick={wave}>
        Wave at Me
        </button>
      </div>
    </div>
  );
}
