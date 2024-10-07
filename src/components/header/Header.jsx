import React, { useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpenMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {/* big header  */}
      <div className="header lg:px-10 overflow-hidden">
        <div className="container mx-auto py-4 flex justify-between ">
          <div className="header__left flex justify-between ">
            <div className="header__left-logo mr-8 ">
              <a href="/" rel="home">
                <img src="https://www.starbucks.vn/media/jlrf0uhs/logo_tcm89-366_w1024_n.png" />{" "}
              </a>
            </div>
            <div className="header__left-nav ">
              <ul className="flex gap-6 mt-7">
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
            <i className="fa-solid fa-location-dot header__right-icon sbgreen mr-3 text-sm"></i>
            <span className="header__right-looking">
              <a
                href="https://www.starbucks.vn/store-locator/"
                className="sbgrey"
              >
                Tìm cửa hàng
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* sm header  */}
      <div className={`headerSm px-10 ${isVisible ? "mb-[230px]" : ""} overflow-hidden `}>
        <div className="container mx-auto pt-4 flex justify-between">
          <div className="headerSm__left">
            <a href="/">
              <img
                src="https://www.starbucks.vn/media/jlrf0uhs/logo_tcm89-366_w1024_n.png"
                alt=""
              />
            </a>
          </div>
          <div className="headerSm__right flex justify-between pt-6 gap-2">
            <div>
              <i className="fa-solid fa-location-dot header__right-icon sbgreen mr-5"></i>
            </div>
            <button
              onClick={handleOpenMenu}
              className="sbgreen headerSm__right-button"
            >
              {isVisible ? (
                <i class="fa-solid fa-x buttonClose"></i>
              ) : (
                <i className="fa-solid fa-bars buttonOpen"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`dropdown overflow-hidden ${isVisible ? "show" : ""}`}>
        <ul className="dropdown__list ">
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
    </>
  );
}
