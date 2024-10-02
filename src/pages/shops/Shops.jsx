import React from 'react'


export default function Shops() {
  return (
    <div className="wrapper">
    <div className='shops'>
        <h1 className='shops__title'>Quán cà phê</h1>
        <img src="https://www.starbucks.vn/media/omvp5zyo/coffeehouse.jpg" alt="" className='shops__img' />
        <div className="row col-8">
        <div className="shops__article col-6">
          <div className="shops__article-head"> <a href="#">Cộng đồng trực tuyến</a> </div>
          <div className="shops__article-body">Cộng đồng nghĩa là chúng ta cùng nhau sống tốt hơn’. Trong các cửa hàng của chúng tôi và trên khắp thế giới. Trò chuyện, kết nối và tham gia.</div>
          <div className="shops__article-more"> <span>Tham gia với chúng tôi trên </span><a href="#">Facebook</a></div>
        </div>
        <div className="shops__article col-6">
          <div className="shops__article-head"> <a href="#">Thiết kế Cửa hàng</a> </div>
          <div className="shops__article-body">Điều gì khiến quán cà phê Starbucks trở thành không gian sống động và hấp dẫn đến vậy? Triết lý về trách nhiệm với cộng đồng và môi trường.</div>
          <div className="shops__article-more"><a href="#">Tìm hiểu thêm</a></div>
        </div>
        <div className="shops__article col-6">
          <div className="shops__article-head"> <a href="#">Chương trình Chuyên gia cà phê</a> </div>
          <div className="shops__article-body">Gặp gỡ các Chuyên gia Cà phê của chúng tôi (bạn sẽ nhận ra họ qua chiếc tạp dề màu đen mà họ đeo). Tìm hiểu những yếu tố cần thiết để trở thành một chuyên gia như vậy. Và khám phá đồ uống hoàn hảo mang thương hiệu Starbucks của chúng tôi.</div>
          <div className="shops__article-more"><a href="#">Tìm hiểu thêm</a></div>
        </div>
        <div className="shops__article col-6">
          <div className="shops__article-head"> <a href="#">Thương mại</a> </div>
          <div className="shops__article-body">Điều gì khiến quán cà phê Starbucks trở thành không gian sống động và hấp dẫn đến vậy? Triết lý về trách nhiệm với cộng đồng và môi trường.</div>
          <div className="shops__article-more"><a href="#">Tìm hiểu thêm</a></div>
        </div>
        </div>
        <div className="breadcrumb mt-5">
          <span>Quán cà phê</span>
        </div>

      </div>
    </div>
  )
}
