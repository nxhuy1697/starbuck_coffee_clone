import React from "react";

export default function Duties() {
  return (
        <div className="duties ">
    <div className="container wrapper">
        <article className="duties__article ">
          <h1>Trở thành một công ty có trách nhiệm</h1>
          <h2>
            Chúng tôi đã luôn tin rằng doanh nghiệp có thể và nên có tác động
            tích cực đến cộng đồng phục vụ.
          </h2>
          <div className="duties__article-img">
            <img
              src="https://starbucks.vn/media/s3cpieph/2ebd18081ae548fb880b126b0cbdafa5_tcm89-20831_w1024_n-1.jpg"
              alt=""
            />
          </div>

          <div className="duties__article-body">
            Bởi vậy, kể từ khi mở cửa hàng đầu tiên vào năm 1971, chúng tôi đã
            chuyên tâm phục vụ để có được lòng tin và sự tôn trọng của khách
            hàng, cộng sự (nhân viên) và những người láng giềng. Bằng cách nào?
            Bằng cách biết chịu trách nhiệm và làm những điều tốt đẹp cho nhau,
            cho hành tinh của chúng ta.
          </div>
        </article>

        <div className="duties__block">

          <div className="duties__block-item">
            <div className="title"> <a href="#">Môi trường</a> </div>
            <div className="paragraph">
              Chúng tôi đang tìm cách giảm thiểu dấu ấn môi trường, giải quyết
              vấn đề biến đổi khí hậu và khơi nguồn cảm hứng để những người khác
              cùng tham gia.
            </div>
            <div className="list">
              <ul>
                <li className="list__item">
                  <a href="#">Tái chế</a>
                </li>
                <li className="list__item">
                  <a href="#">Năng lượng</a>
                </li>
                <li className="list__item">
                  <a href="#">Nước</a>
                </li>
                <li className="list__item">
                  <a href="#">Công trình xanh</a>
                </li>
                <li className="list__item">
                  <a href="#">Biến đổi khí hậu</a>
                </li>
                <li className="list__item mt-4">
                  <a href="#">Tìm hiểu thêm về môi trường</a>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="duties__block-item pl-5">
            <div className="title"><a href="#">Tìm nguồn Cung ứng có Đạo đức</a> </div>
            <div className="paragraph">
            Chúng tôi cam kết mua và phục vụ loại cà phê được vun trồng có trách nhiệm, được buôn bán có đạo đức với chất lượng cao nhất nhằm tạo nên tương lai tốt đẹp hơn cho người trồng cà phê.
            </div>
            <div className="list">
              <ul>
                <li className="list__item">
                  <a href="#">Cà phê</a>
                </li>
                <li className="list__item">
                  <a href="#">Hỗ trợ người nông dân</a>
                </li>
                <li className="list__item">
                  <a href="#">Trà</a>
                </li>
                <li className="list__item">
                  <a href="#">Ca cao</a>
                </li>
                <li className="list__item mt-4">
                  <a href="#">Tìm hiểu Thêm Về Hoạt động Tìm nguồn Cung ứng có Đạo đức</a>
                </li>
                
              </ul>
            </div>
          </div>


        </div>
        <div className="breadcrumb mt-24">
          <span>Trách nhiệm</span>
        </div>
      </div>
    </div>
  );
}
