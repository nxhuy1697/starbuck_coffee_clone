import React from "react";

export default function Home() {
  return (
    <div className="home">
      {/* banner  */}
      <section className="home__banner"></section>
      {/* content  */}
      <div className="container mx-auto">
        <section className="home__espresso ">
          <div className="home__espresso-content">
            <p className="title">
              Cà phê Espresso của chúng tôi, Latte của bạn
            </p>
            <p className="body">
              Cà phê espresso đậm vị và bốc hơi sữa - ngon tuyệt hảo khi thưởng
              thức riêng hay khi thêm đường.
            </p>
            <span className="more">
              <a href="#"> Hãy thưởng thức ngay »</a>
            </span>
          </div>
          <div className="home__espresso-img">
            <img
              src="https://www.starbucks.vn/media/s5hlhw2z/our-espresso_tcm89-24616_w1024_n.png"
              alt=""
            />
          </div>
        </section>
        <section className="home__opportunity ">
          <div className="home__opportunity-img">
            <img
              src="https://www.starbucks.vn/media/2rbbcpzs/opportunity_tcm89-24617_w1024_n.png"
              alt=""
            />
          </div>
          <div className="home__opportunity-content" >
            <p className="title">Cơ hội</p>
            <p className="body">
              Không chỉ là nhân viên, mà còn là cộng sự.
            </p>
            <span className="more">
              <a href="#">Tham gia cùng chúng tôi »</a>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
