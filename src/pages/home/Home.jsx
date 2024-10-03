import React from "react";

export default function Home() {
  return (
    <div className="home">
      <section className="home__banner"></section>
      <div className="container mx-auto pl-10">
        <section className="home__espresso flex justify-between gap-32 my-16">
          <div className="espresso__content flex-1 ">
            <p className="espresso__content-title">
              Cà phê Espresso của chúng tôi, Latte của bạn
            </p>
            <p className="espresso__content-body text-base">
              Cà phê espresso đậm vị và bốc hơi sữa - ngon tuyệt hảo khi thưởng
              thức riêng hay khi thêm đường.
            </p>
            <span className="espresso__content-more">
              <a href="#"> Hãy thưởng thức ngay »</a>
            </span>
          </div>
          <div className="espresso__img flex-1">
            <img
              src="https://www.starbucks.vn/media/s5hlhw2z/our-espresso_tcm89-24616_w1024_n.png"
              alt=""
            />
          </div>
        </section>
        <section className="home__opportunity flex justify-between gap-16 my-8">
          <div className="opportunity__img flex-1">
            <img
              src="https://www.starbucks.vn/media/2rbbcpzs/opportunity_tcm89-24617_w1024_n.png"
              alt=""
            />
          </div>
          <div className="opportunity__content flex-1" >
            <p className="opportunity__content-title">Cơ hội</p>
            <p className="opportunity__content-body">
              Không chỉ là nhân viên, mà còn là cộng sự.
            </p>
            <span className="opportunity__content-more">
              <a href="#">Tham gia cùng chúng tôi »</a>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
