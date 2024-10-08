import React from "react";

export default function Cards() {
  return (
    <div className="cards">
      <div className="cards__banner">
        <img
          src="https://card.starbucks.vn/static/media/bg-login-full.8385e597.png"
          alt=""
        />
      </div>
      <div className="cards__main">
        {/* login  */}
        <div className="cards__main-login">
          <p className="title">Sign in</p>
          {/* form  */}
          <div className="loginForm">
            <div className="loginForm__email">
              <input className="loginForm__email-filed" type="email" placeholder="Email" />
            </div>
            <div className="loginForm__pass">
              <input type="password" className="loginForm__pass-filed" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="cards__main-register">
          
        </div>
      </div>
    </div>
  );
}
