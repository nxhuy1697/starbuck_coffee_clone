import React, { useState } from "react";

export default function Footer() {
  const [visibleBlocks, setVisibleBlocks] = useState([false, false, false]);

  const handleOnclick = (index) => {
    const newVisibleBlocks = visibleBlocks.map((item, idx) => {
      if (idx === index) {
        return !item;
      }
      return false;
    });
    setVisibleBlocks(newVisibleBlocks);
  };

  return (
    <>
      <div className="footer">
        <div className="footer__header">
          <ul>
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
        <div className=" mx-auto lg:px-10">
          {/* main  */}
          <div className="footer__main">
            <div className="footer__main-content">
              {/* block  */}
              <div className="block">
                <p className="block__title">VỀ CHÚNG TÔI</p>
                <ul>
                  <li>
                    <a href="#">Di sản</a>
                  </li>
                  <li>
                    <a href="#">Công ty</a>
                  </li>
                  <li>
                    <a href="#">Cơ hội nghề nghiệp</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <p className="block__title">DỊCH VỤ KHÁCH HÀNG</p>
                <ul>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <p className="block__title">LIÊN KẾT NHANH</p>
                <ul>
                  <li>
                    <a href="#">Bộ định vị cửa hàng</a>
                  </li>
                  <li>
                    <a href="#">Dành cho đối tác</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__sm">
            <div className="footer__sm-content">
              {/* block  */}
              <div className="block">
                <div className="block__title">
                  <p>VỀ CHÚNG TÔI</p>
                  <button
                    onClick={() => handleOnclick(0)}
                    className="block__title-btn"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <ul className={`${visibleBlocks[0] ? "show" : "hide"}`}>
                  <li>
                    <a href="#">Di sản</a>
                  </li>
                  <li>
                    <a href="#">Công ty</a>
                  </li>
                  <li>
                    <a href="#">Cơ hội nghề nghiệp</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <div className="block__title">
                  <p>DỊCH VỤ KHÁCH HÀNG</p>
                  <button
                    onClick={() => handleOnclick(1)}
                    className="block__title-btn"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <ul className={`${visibleBlocks[1] ? "show" : "hide"}`}>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <div className="block__title">
                  <p>LIÊN KẾT NHANH</p>
                  <button
                    onClick={() => handleOnclick(2)}
                    className="block__title-btn"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <ul className={`${visibleBlocks[2] ? "show" : "hide"}`}>
                  <li>
                    <a href="#">Bộ định vị cửa hàng</a>
                  </li>
                  <li>
                    <a href="#">Dành cho đối tác</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <ul className="site__selection ">
                <li className="site__selection-list flex justify-center align-middle">
                  <a href="#">
                    <img
                      src="https://www.starbucks.vn/assets/images/VietNam_tcm89-24771_w1024_n.png"
                      alt=""
                    />
                  </a>{" "}
                </li>
                <li className="site__selection-lang">
                  <p>Tiếng Việt (VN)</p>
                </li>
                <li className="site__selection-lang">
                  <p>English »</p>
                </li>
              </ul>
            </div>
            <div className="footer__bottom-sub">
              <ul className="row__sub">
                <li className="row__sub-item">
                  <a href="#">Khả năng truy cập Web</a>
                </li>
                <li className="row__sub-item">
                  <a href="#">Chính sách bảo mật thông tin</a>
                </li>
                <li className="row__sub-item">
                  <a href="#">Điều khoản sử dụng</a>
                </li>
                <li className="row__sub-item">
                  <a href="#">Sơ đồ trang web</a>
                </li>
                <li className="row__sub-item">
                  <a href="#">Tuỳ chọn cookie</a>
                </li>
              </ul>
            </div>
            <div className="footer__bottom-credit">
              <p>© 2024 Starbucks Coffee Company. Mọi quyền được bảo lưu.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
