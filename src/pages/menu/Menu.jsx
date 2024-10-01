import React from 'react'


export default function Menu() {
  return (
    <div className='menu'>
 <div className="wrapper">
      <article className='articleBlock col-8'>
        <h1 className='articleBlock__title'>Thực đơn</h1>
        <p className='articleBlock__body'>Đồ uống ngon được pha chế thủ công và đồ ăn có hương vị tuyệt vời. Bí quyết giúp cuộc sống tốt đẹp hơn.</p>
        <img src="https://www.starbucks.vn/media/hcbf1o2e/meny_tcm89-11058_w1024_n.jpg" alt="" className='articleBlock__img' />
        <p className='articleBlock__bottom'>Đúng vậy. Cốc cà phê hoàn hảo và một chút đồ ăn nhẹ thơm ngon, bổ dưỡng có thể mang đến cho bạn một ngày hiệu quả. Vì vậy chúng tôi đảm bảo mọi thứ bạn chọn có chất lượng tốt nhất. Chẳng phải cuộc sống thực sự cần được như vậy sao?</p>
      </article>
      <article className='articleMenu col-8'>
        <div className="row">
          <div className="articleMenu__item col-6">
            <a href="#" className='articleMenu__item-title'>
              Đồ uống
            </a>
            <p className='articleMenu__item-body'>Cà phê tuyệt hảo từ khắp nơi trên thế giới. Các loại đồ uống được pha chế theo cách thủ công để bạn khám phá và thưởng thức. Chúng tôi mong muốn mang tới cho bạn những sản phẩm này.</p>
            <a href="#" className='articleMenu__item-more'>Đồ uống tại Starbucks</a>
          </div>
          <div className="articleMenu__item col-6">
            <a href="#" className='articleMenu__item-title'>Đồ ăn Tươi</a>
            <p className='articleMenu__item-body'>Các loại bánh ngọt và bánh sandwich của chúng tôi được làm bằng nguyên liệu đơn giản, chất lượng cao. Vì vậy tất cả hương vị tuyệt hảo mà thưởng thức là đồ ăn thực thụ, cực ngon.</p>
            <a href="#" className='articleMenu__item-more'>Đồ ăn tại Starbucks</a>
          </div>
        </div>
      </article>
      <div className='menu__footer'>
        <p>Thực đơn</p>
      </div>
     </div>
    </div>
  )
}
