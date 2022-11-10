import React, { useState } from 'react'
import './Card.css'
import { Link } from "react-router-dom";
import { Empty, Button, notification } from 'antd';
import { LeftOutlined , CloseOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

function Card() {
    let data = window.localStorage.getItem('total-cart-amount')
    let cloneCount = 1
    window.localStorage.getItem('count') ? cloneCount = window.localStorage.getItem('count') : window.localStorage.setItem('count', 1)

    let clonePrice = 0
    window.localStorage.getItem('totalPrice') ? clonePrice = window.localStorage.getItem('totalPrice') : window.localStorage.setItem('totalPrice', 20000)

    
    const [count, setCount] = useState(cloneCount * 1)
    const [price, setPrice] = useState(20000)

    window.localStorage.setItem('count', count)
    window.localStorage.setItem('totalPrice', 20000 * cloneCount)

    const handleCount = (e) => {
        if (e.target.id == 0) {
            if(count < 1 || count == 1){
                notification.open({
                    message: 'Notification Title',
                    description:
                      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
                  return ''
            }
            setCount(counts => counts - 1)
            window.localStorage.setItem('count', count)
            window.localStorage.setItem('totalPrice', 20000 * cloneCount)
            setPrice(prices => 20000 * cloneCount)
        } else {
            setCount(counts => counts + 1)
            window.localStorage.setItem('count', count)
            window.localStorage.setItem('totalPrice', 20000 * cloneCount)
            setPrice(prices => 20000 * cloneCount)
        }
    }

    return (
        <div>
            
            <div className='Cart__content'>
                {!data ?
                    <div className='Cart__content__lists'>
                        <div className="Cart__content__lists__back">
                            <h3>Giỏ hàng <div className="backs"><Link to={'/'}><p> <LeftOutlined />Trở về</p></Link></div></h3>
                        </div>
                        {/* {data.map(value=>{
                            return( */}
                        <div className='Cart__content__list'>
                            <div className='Cart__content__list__img'> <img src="https://image.cellphones.com.vn/200x/media/catalog/product/v/_/v_ng_1_2.png" alt="" /></div>
                            <div className='Cart__content__list__detail'>
                                <h3>iPhone 14 Pro 128GB | Chính hãng VN/A-Vàng <i><CloseOutlined /></i></h3>
                                <p className='Cart__content__list__price'>20000</p>
                                <div className="Cart__content__list__choose"><p>Chọn số lượng: </p>
                                    <div className="Cart__content__list__choose__btns">
                                        <div className="Cart__content__list__choose__btn" id='0' onClick={handleCount}>-</div>
                                        <div className='Cart__content__list__choose__btn'>{count}</div>
                                        <div className="Cart__content__list__choose__btn" id='1' onClick={handleCount}>+</div>
                                    </div>
                                </div>
                                <div className="Cart__content__list__seller">
                                    <p className='Cart__content__list__seller__title' >- Chương trình khuyến mại:</p>
                                    <ul className='block__seller__carts' >
                                        <div className="block__seller__cart">
                                            <li className="Cart__content__list__seller__"><p>Thu cũ lên đời - trợ giá đến 3 triệu</p></li>
                                            <li className="Cart__content__list__seller__"><p>Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng Moca, VNPAY, Nam Á, STANDARD CHATERED,...</p></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* )
                        })} */}

                        <div className="Cart__content__list__buy">
                            <div className="Cart__content__list__buy__price">
                                <p>Tổng tiền tạm tính: </p>
                                <p>{(window.localStorage.getItem('totalPrice')*1).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                            </div>
                            <div className='Cart__content__list__buy__btns'>
                                <Link to={'/payment-info'}> <p className='Cart__content__list__buy__btn1'>Tiến hành đặt hàng</p></Link>
                                <Link to={'/home'}> <p className='Cart__content__list__buy__btn2'>Chọn thêm sản phẩm khác</p></Link>
                            </div>
                        </div>
                    </div>
                    : <Empty />}
            </div>
        </div>
    )
}

export default Card