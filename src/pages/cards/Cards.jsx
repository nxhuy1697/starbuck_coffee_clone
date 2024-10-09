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
            {/* email  */}
            <div className="loginForm__email">
              <input
                className="loginForm__email-filed text-sm placeholder:text-sm placeholder-gray-500"
                type="email"
                placeholder="Email"
                id="email"
              />
            </div>
            {/* password  */}
            <div className="loginForm__pass">
              <input
                type="password"
                className="loginForm__pass-filed text-sm placeholder:text-sm placeholder-gray-500"
                placeholder="Password"
              />
            </div>
            {/* function  */}
            <div className="loginForm__keepLogin" >
              {/* left  */}
            <div className="loginForm__keepLogin-tick">
              <input type="checkbox" id="keepLogin" className="w-5 h-5 bg-gray-200 border-none rounded cursor-pointer mt-3 "/>
              <label htmlFor="keepLogin"><span className="text-lg text-gray-500 pl-3 pb-2">Keep me sign in!</span></label>
            </div>
            {/* right  */}
            <div className="loginForm__keepLogin-forgot mt-3" >
            <p className="text-sm text-gray-500">Forgot your <a href="#">password</a> or <a href="#">email</a>?</p>
            </div>

            </div>
            {/* button  */}
            <button className="buttonGreen mt-10">Sign in</button>
          </div>
        </div>
        {/* register  */}
        <div className="cards__main-register">
          <p className="title">Not a member?</p>
          <p className="sub">With a Starbucks Rewards account, you can register your Starbucks Card, manage your account and participate in Starbucks Rewards™ program.</p>
          <p className="sub border-b mt-4 pb-4">Pay with your registered Starbucks Rewards™️ account any way you like and earn Rewards</p>
          <div className="reg__bottom">
            <p className="reg__bottom-sub mt-4">
            Collect Stars to reach Gold Status faster with the mobile app:
            </p>
            <div className="reg__bottom-card mt-3">
              <div className="cardItem mr-2">
              <img src="https://card.starbucks.vn/static/media/sign-in-sub-left.40feaca6.png" alt="" />
              <p>Order via mobile and pick up at store</p>
              </div>
              <div className="cardItem mx-2">
              <img src="https://card.starbucks.vn/static/media/sign-in-sub-middle.881d9747.png" alt="" />
              <p>Get your favorites delivered to you</p>
              </div>
              <div className="cardItem ml-2">
              <img src="https://card.starbucks.vn/static/media/sign-in-sub-right.8d631596.png" alt="" />
              <p>Experience more exclusive feature in Starbucks Vietnam app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}
