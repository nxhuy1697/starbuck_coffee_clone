import React from "react";

export default function Header() {
  return (
    <div className="header container">
      
      <div className="header__left">
        <div className="header__left-logo">
          <a href="/" rel="home">
            <img src="https://www.starbucks.vn/media/jlrf0uhs/logo_tcm89-366_w1024_n.png" />{" "}
          </a>
        </div>
        <div className="header__left-nav">
          <ul>
            <li>
              <a href="/coffee">Cà phê</a>{" "}
            </li>
            <li>
              <a href="/menu">Thực đơn</a>
            </li>
            <li>
              <a href="/shops">Quán cà phê</a>
            </li>
            <li>
              <a href="/duties">Trách nhiệm</a>
            </li>
            <li>
              <a href="/about-us">Về chúng tôi</a>
            </li>
            <li>
              <a href="/card">Thẻ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__right">
      <i className="fa-solid fa-location-dot header__right-icon"></i>
      <span className="header__right-looking">
        <a href="https://www.starbucks.vn/store-locator/">
        Tìm cửa hàng
        </a>
         </span>
      </div>
    </div>
  );
}
