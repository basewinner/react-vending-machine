import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Peanuts.css";

const Peanuts =() => {
  return (
    <div
    className="Peanuts"
    style={{
      backgroundImage:
        "url(https://static.toiimg.com/thumb/67454281.cms?width=1200&height=900)"
    }}>
      
      <Message>
        <h1>Peanuts Peanuts Get Your Peanuts Here</h1>
        <h3 className="Good">Good service now!</h3>
        <h3 className="Bad"> Crummy Service Later!</h3>
        <h1><Link to="/">go back to Vending Magic</Link></h1>
      </Message>
    </div>
  );
}

export default Peanuts;
