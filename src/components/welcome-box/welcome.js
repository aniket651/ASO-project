import React from "react";
import './welcome.css';
import { welcomeName } from "./constant";

const Welcome = ({ name }) => {
    return (
      <div className="welcome-box">
        <p className="welcome-text">
          Welcome <span className="welcome-name">{welcomeName}</span> <br />
          <span className="welcome-text-small">to</span><br />
            Support Central
        </p>
      </div>
    );
  };

export default Welcome;