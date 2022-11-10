import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './HomeContent.css'
import HomeContentSlider from './HomeContentSlider'

function HomeContent() {
    let token = window.localStorage.getItem('token')
    const [showmore, setShowmore] = useState(10)

    const [dataProduct, setDataProduct] = useState([])
    useEffect(() => {
        axios.get('https://shope-b3.thaihm.site/api/product/get-all-products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(value => {
            setDataProduct(value.data.products)
        })
            .catch(value => {
                console.log(value);
            })
    }, [])


    const handleShowMore = () => {
        setShowmore(count => count + 10)
    }


    return (
        <div className="home__content__block">
        <HomeContentSlider></HomeContentSlider>
            <div className="home__content__list2">
                <div className="home__content__list2__cart">
                    {dataProduct.filter((value, index) => index < showmore).map(value => {
                        let img = `https://shope-b3.thaihm.site/${value.thumbnail}`
                        return (
                            <div key={value._id} className="home__content__list__cart">
                                <div className="home__content__list__cart__img"><img src={img} alt="" /></div>
                                <h3>{value.productName}</h3>
                                <p className='home__content__list__cart__price'>{(value.price * 1).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                <div className="home__content__list__cart__sale">
                                    Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và
                                </div>
                                <div className='home__content__list__cart__star'> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                <div className='home__content__list__cart__Fav'><p>Yêu thích </p><i className="fa-regular fa-heart"></i></div>
                            </div>
                        )
                    })}
                </div>
                <div className='home__content__list2__morebtns'><button onClick={handleShowMore} className='home__content__list2__morebtn'>Xem Thêm</button></div>
            </div>
        </div>

    )
}

export default HomeContent