import React from "react";

export default function Home() {
  return <div>
<section className="banner">

</section>
<section className="espresso">
<div className="container">
  <div className="row">
  <div className="espresso__content col-6">
    <p className="espresso__content-title">Cà phê Espresso của chúng tôi, Latte của bạn</p>
    <p className="espresso__content-body">Cà phê espresso đậm vị và bốc hơi sữa - ngon tuyệt hảo khi thưởng thức riêng hay khi thêm đường.</p>
    <span className="espresso__content-more"><a href="#"> Hãy thưởng thức ngay »</a></span>
  </div>
  <div className="espresso__img col-6">
    <img src="https://www.starbucks.vn/media/s5hlhw2z/our-espresso_tcm89-24616_w1024_n.png" alt="" />
  </div>
  </div>
 
</div>
</section>
<section className="opportunity">
<div className="container">
  <div className="row">
    <div className="opportunity__img col-6">
  <img src="https://www.starbucks.vn/media/2rbbcpzs/opportunity_tcm89-24617_w1024_n.png" alt="" />
    </div>
    <div className="opportunity__content col-6">
    <p className="opportunity__content-title">Cơ hội</p>
    <p className="opportunity__content-body">Không chỉ là nhân viên, mà còn là cộng sự.</p>
    <span className="opportunity__content-more"><a href="#">Tham gia cùng chúng tôi »</a></span>
    </div>
  </div>
</div>
</section>
  </div>;
}
