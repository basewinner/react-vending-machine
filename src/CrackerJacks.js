import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./CrackerJacks.css";

const CrackerJacks = () => {
  return (
    <div
      className="CrackerJacks"
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/3o6YggggHjCtDetzcQ/source.gif)"
      }}>
      <Message>
        <h1 className="Red">Great Taste and Prize could be Tatoos!</h1>
        <h1><Link to="/">go back to VendMagic</Link></h1>
      </Message>
    </div>
  );
}

export default CrackerJacks;
