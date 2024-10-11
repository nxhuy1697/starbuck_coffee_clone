import React from "react";

export default function CardFooter() {
  return (
    <div className="cardFooter">
      {/* blocks  */}
      <div className="cardFooter__blocks">
        {/* items  */}
        <div className="cardFooter__blocks-item">
          <p className="title">
            {" "}
            <a href="#">ABOUT US</a>{" "}
          </p>
          {/* list  */}
          <ul className="list">
            <li className="list__pages">
              {" "}
              <a href="#">Our Heritage</a>{" "}
            </li>
            <li className="list__pages">
              {" "}
              <a href="#">Our Company</a>{" "}
            </li>
            <li className="list__pages">
              {" "}
              <a href="#">Career Center</a>{" "}
            </li>
            <li className="list__pages">
              {" "}
              <a href="#">Newsroom</a>{" "}
            </li>
          </ul>
        </div>
        {/* items  */}
        <div className="cardFooter__blocks-item">
          <p className="title">
            {" "}
            <a href="#">CUSTOMER SERVICE</a>{" "}
          </p>
          {/* list  */}
          <ul className="list">
            <li className="list__pages">
              {" "}
              <a href="#">Frequently Asked Questions</a>{" "}
            </li>
          </ul>
        </div>
        {/* items  */}
        <div className="cardFooter__blocks-item">
          <p className="title">
            {" "}
            <a href="#">QUICK LINKS</a>{" "}
          </p>
          {/* list  */}
          <ul className="list">
            <li className="list__pages">
              {" "}
              <a href="#">Store Locator</a>{" "}
            </li>
            <li className="list__pages">
              {" "}
              <a href="#">For Partners</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      {/* bottom  */}
      <div className="cardFooter__bottom">
        {/* lang  */}
        <div className="cardFooter__bottom-content">
          <ul className="region__selection">
            <li className="region__selection-icon flex gap-1">
              <a href="#">
                <img
                  src="https://www.starbucks.vn/assets/images/VietNam_tcm89-24771_w1024_n.png"
                  alt=""
                />
              </a>{" "}
              <p> Change region</p>
            </li>
            <li className="region__selection-lang border-l-2 border-gray-500 pl-4">
              <p>Tiếng Việt (VN)</p>
            </li>
            <li className="region__selection-lang">
              <p>English »</p>
            </li>
          </ul>
        </div>
        {/* sub  */}
        <div className="cardFooter__bottom-sub">
          <ul className="row__sub">
            <li className="row__sub-item">
              <a href="#" className="border-r-2 border-gray-500 pr-2">
                Web Accessibility
              </a>
            </li>
            <li className="row__sub-item">
              <a href="#" className="border-r-2 border-gray-500 px-2">
                Privacy Statement
              </a>
            </li>
            <li className="row__sub-item">
              <a href="#" className="border-r-2 border-gray-500 px-2">
                Terms of Use
              </a>
            </li>
            <li className="row__sub-item">
              <a href="#" className="border-r-2 border-gray-500 px-2">
                Site map
              </a>
            </li>
            <li className="row__sub-item">
              <a href="#" className="px-2">Cookie preferences</a>
            </li>
          </ul>
        </div>
        {/* credit  */}
        <div className="cardFooter__bottom-credit">
          <p>© 2018 Starbucks Corporation. All rights reserved.</p>
          <div className="footerLogo">
            <img
              src="https://card.starbucks.vn/static/media/sb-text-logo.84eb6879.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
