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
                            <h3>Gi??? h??ng <div className="backs"><Link to={'/'}><p> <LeftOutlined />Tr??? v???</p></Link></div></h3>
                        </div>
                        {/* {data.map(value=>{
                            return( */}
                        <div className='Cart__content__list'>
                            <div className='Cart__content__list__img'> <img src="https://image.cellphones.com.vn/200x/media/catalog/product/v/_/v_ng_1_2.png" alt="" /></div>
                            <div className='Cart__content__list__detail'>
                                <h3>iPhone 14 Pro 128GB | Ch??nh h??ng VN/A-V??ng <i><CloseOutlined /></i></h3>
                                <p className='Cart__content__list__price'>20000</p>
                                <div className="Cart__content__list__choose"><p>Ch???n s??? l?????ng: </p>
                                    <div className="Cart__content__list__choose__btns">
                                        <div className="Cart__content__list__choose__btn" id='0' onClick={handleCount}>-</div>
                                        <div className='Cart__content__list__choose__btn'>{count}</div>
                                        <div className="Cart__content__list__choose__btn" id='1' onClick={handleCount}>+</div>
                                    </div>
                                </div>
                                <div className="Cart__content__list__seller">
                                    <p className='Cart__content__list__seller__title' >- Ch????ng tr??nh khuy???n m???i:</p>
                                    <ul className='block__seller__carts' >
                                        <div className="block__seller__cart">
                                            <li className="Cart__content__list__seller__"><p>Thu c?? l??n ?????i - tr??? gi?? ?????n 3 tri???u</p></li>
                                            <li className="Cart__content__list__seller__"><p>Gi???m th??m ?????n 2 tri???u khi thanh to??n qua v??/ng??n h??ng Moca, VNPAY, Nam ??, STANDARD CHATERED,...</p></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* )
                        })} */}

                        <div className="Cart__content__list__buy">
                            <div className="Cart__content__list__buy__price">
                                <p>T???ng ti???n t???m t??nh: </p>
                                <p>{(window.localStorage.getItem('totalPrice')*1).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                            </div>
                            <div className='Cart__content__list__buy__btns'>
                                <Link to={'/payment-info'}> <p className='Cart__content__list__buy__btn1'>Ti???n h??nh ?????t h??ng</p></Link>
                                <Link to={'/home'}> <p className='Cart__content__list__buy__btn2'>Ch???n th??m s???n ph???m kh??c</p></Link>
                            </div>
                        </div>
                    </div>
                    : <Empty />}
            </div>
        </div>
    )
}

export default Card