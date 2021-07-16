import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Beer.css";

const Beer = () => {
  return (
    <div
      className="Beer"
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/zXubYhkWFc9uE/source.gif)"
      }}>
      <Message>
        <h1>Brewski Baby!!</h1>
        <h1><Link to="/">go back to vendmagic</Link></h1>
      </Message>
    </div>
  );
}

export default Beer;
