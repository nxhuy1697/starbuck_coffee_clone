import React from "react";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__wrapper">
        <div className="aboutUs__left ">
          <h1 className="mb-5">Công ty Cà phê Starbucks</h1>
          <h2 className="mb-3">
            Mỗi tuần Starbucks trên khắp thế giới phục vụ hàng triệu thức uống
            đến tay khách hàng. Và Starbucks cam kết rằng sẽ phục vụ từng khách
            hàng duy nhất tại một thời điểm.
          </h2>
          <div className="aboutUs__left-img mb-5">
            <img
              src="https://www.starbucks.vn/media/cndaemra/about-us-home-page_tcm89-1512_w1024_n.jpg"
              alt=""
            />
          </div>
          <div className="aboutUs__left-body">
            <p>
              Tất cả cá thức uống của Starbucks sẽ được phục vụ tận tay khách
              hàng ngay tại quầy bar của quán.
            </p>
            <p>Đây là mối liên kết giữa Starbucks và khách hàng.</p>
            <p>
              Stabucks cam kết mối liên hệ này xuất phát từ sự trân trọng của
              chúng tôi – chúng tôi cam kết phục vụ sản phẩm cà phê với{" "}
              <a href="#">chất lượng tốt nhất</a>, tạo mối liên kết đến từng
              khách hàng và thực hiện trách nhiệm với cộng đồng và xã hội tại
              nơi Starbucks hoạt động kinh doanh.
            </p>
            <p>
              Khởi nghiệp với một quán chuyên bán cà phê từ{" "}
              <a href="#">hơn 50 năm về trước</a>, đến thời điểm hiện tại, tại
              mỗi một quốc gia mà Starbucks hướng tới, mỗi một địa điểm mà
              Starbucks dự định hoạt động kinh doanh, Starbucks cố gắng hoàn
              thiện và tạo dựng một môi trường tốt hơn những gì mà Starbucks đã
              làm.
            </p>
          </div>
        </div>

        <div className="aboutUs__right">
          <div className="aboutUs__right-sidebar">
            <h3>
              {" "}
              <a href="#">VỀ CHÚNG TÔI</a>{" "}
            </h3>
            <ul>
              <li>
                <a href="#">Công ty</a>{" "}
              </li>
              <li>
                <a href="#">Di sản</a>{" "}
              </li>
              <li>
                <a href="#">Tuyên bố về sứ mệnh</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="breadcrumb mt-16 mb-5">Về chúng tôi</div>
    </div>
  );
}
