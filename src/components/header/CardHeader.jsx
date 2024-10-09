import React from "react";

export default function CardHeader() {
  return (
    <div className="cardHeader">
      <div className="cardHeader__logo">
        <img
          src="https://card.starbucks.vn/static/media/new-logo.2fec2102.png"
          alt=""
          className="cardHeader__logo-img"
        />
      </div>
      <div className="cardHeader__navbar ">
        <ul className="cardHeader__navbar-item">
          <li className="list">
            <a href="#" className="list__text">
              Starbucks eGift
            </a>
          </li>
          <li className="list">
            <a href="#" className="list__text">
              Benefits
            </a>
          </li>
          <li className="list">
            <a href="#" className="list__text">
              Mobile app
            </a>
          </li>
          <li className="list">
            <a href="#" className="list__text">
              Card designs
            </a>
          </li>
        </ul>
        <div className="cardHeader__navbar-buttons flex gap-3">
          <button className="flex gap-3 buttonWhite">
          <i className="fa-regular fa-user"></i>
          <span className="">Sign in</span>
          </button>
          <button className="buttonGreen">
            <p>Join now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
