import React from "react";

export default function Coffee() {
  return (
    <div className="">
      {/* banner  */}
      <section className="banner__coffee"></section>
      {/* coffee  */}

      <div className="findCoffee">
        <div className="findCoffee__content">
          <p className="findCoffee__content-title">TÌM KIẾM CÀ PHÊ</p>
          <p className="findCoffee__content-body">
            Những bậc thầy về cà phê của chúng tôi đã đúc kết nhiều năm kinh
            nghiệm nếm thử cà phê của họ trong ba câu hỏi đơn giản để giúp bạn
            tìm loại cà phê mà bạn chắc hẳn sẽ thích.
          </p>
          <p className="findCoffee__content-more">
            {" "}
            <a href="#">Bắt đầu »</a>
          </p>{" "}
          <br />
          <p className="findCoffee__content-more">
            <a href="#">Duyệt tất cả các loại cà phê »</a>
          </p>
        </div>
        <div className="findCoffee__img">
          <img
            src="https://www.starbucks.vn/media/lt4ns4t5/coffee-finder-circles_tcm89-3966_w1024_n.png"
            alt=""
          />
        </div>
      </div>

      {/* bottle  */}
      <section className="coffeeBottle">
        <div className="coffeeBottle__content">
          <h2>CÁCH PHA CÀ PHÊ</h2>
          <h1>Bình ép cà phê</h1>
          <p className="coffeeBottle__content-body">
            Pha bằng bình ép cà phê giữ lại các loại dầu tự nhiên quý giá mà
            giấy lọc hấp thu và chiết xuất toàn bộ hương vị của cà phê, trong
            khi vẫn giữ nguyên độ đậm và sánh của cà phê.
          </p>
        </div>
        <div className="coffeeBottle__feature">
          <div className="coffeeBottle__feature-card">
            <div className="card__item">
              <a href="#">
                <i class="fas fa-glass-martini-alt"></i>
              </a>

              <p>Coffee Press</p>
            </div>
          </div>
          <div className="coffeeBottle__feature-card">
            <div className="card__item">
              <a href="#">
                <i class="fas fa-glass-whiskey"></i>
              </a>

              <p>Pour-Over</p>
            </div>
          </div>
          <div className="coffeeBottle__feature-card">
            <div className="card__item">
              <a href="#">
                <i class="fas fa-glass-martini-alt"></i>
              </a>

              <p>Iced Pour-Over</p>
            </div>
          </div>
          <div className="coffeeBottle__feature-card ">
            <div className="card__item">
              <a href="#">
                <i class="fas fa-glass-martini"></i>
              </a>

              <p>Coffee Brewer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
