import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="navbar">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="hi"
            />
          </div>
          <div className="right">
            <select className="selectt">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <div className="red-but">
              <button>sign in</button>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1 className="content">The biggest Indian hits. Ready to watch here from ₹149.</h1>
        <h3 className="content">Join today. Cancel anytime.</h3>
        <p className="content">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="em-but">
          <input type="email address" placeholder="Email Address" name="email" />
          <button>Get Started</button>
          <div className="line-clr"></div>
        </div>
    
      </div>
      

    </div>
  );
}

export default Navbar;
