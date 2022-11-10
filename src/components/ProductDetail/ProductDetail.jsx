import React from 'react'
import './ProductDetail.css'
import { StarOutlined, HeartOutlined, GiftOutlined, PhoneOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeContentSlider__1 from './HomeContentSlider__1';
function ProductDetail() {

    const [data, setData] = useState([])
    useEffect(function () {
        axios.get(`https://tiki.thaihm.site/product/get-all-products`)
            .then(function (res) {
                console.log(1, res.data.listProduct);
                setData(res.data.listProduct)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (

        <div style={{ margin: '30px' }}>
            {/* {data.map(function (value) {
                return (
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">{}Go somewhere</a>
                        </div>
                    </div>
                    // <ul>
                    //   {console.log(3,value.productName)}
                    //     <li>{value.productName}</li>
                    //     <li></li>
                    // </ul>
                )
            })} */}

           <div id='title'>
                <h2>iPhone 13 Pro Max 1TB I Chính hãng VN/A </h2><i class="fa-solid fa-star yellow" >
                </i> <i class="fa-solid fa-star yellow" ></i> <i class="fa-solid fa-star yellow" >
                </i> <i class="fa-solid fa-star yellow" ></i>
                <i class="fa-solid fa-star white" ></i> đánh giá
            </div>

            <div id='detail'>

                <div className='detail-box1'>

                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <HeartOutlined className='heart' /> yêu thích
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/_/1_66_6_2_1_14.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/3/_/3_51_1_10.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/2/_/2_61_8_2_1_15.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>


                        <div className="detail-box2-item">
                            <div className="detail-box2-item1">
                                <button>trả góp 0%</button>
                                <div className='detail-box2-item1-price'>
                                    <b>36.990.000 đ</b> <br />
                                    <del>40.990.000 đ</del>
                                </div>
                            </div>
                            <div className="detail-box2-item2">
                                <ul>
                                    <li>
                                        <b>1 TB</b>
                                        <p>36.990.000 đ</p>
                                    </li>
                                    <li>
                                        <b>512GB</b>
                                        <p>34.990.000 đ</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>256GB</b>
                                        <p>30.990.000 đ</p>
                                    </li>
                                    <li>
                                        < b>128GB</b>
                                        <p>27.990.000 đ</p>
                                    </li>
                                </ul>
                            </div>
                            <b>Chọn màu để xem giá và chi nhánh có hàng</b>
                        </div>
                    </div>
                </div>

                <div className='detail-box2'>
                    <div className='detail-box2-item3' >
                        <div className="detail-box2-item3-progam">
                            <GiftOutlined /><b>Khuyến mãi</b>
                        </div>
                        <span>
                            <p>
                                <button className='detail-box2-item3-button'>1</button>   Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500
                                qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm
                                Apple từ 17 triệu (Xem chi tiết).
                            </p>
                        </span>
                        <span>

                            <p>
                                <button className='detail-box2-item3-button'>2 </button>  Thu cũ lên đời - Trợ giá 1 triệu (Xem chi tiết).
                            </p>
                        </span>
                    </div>
                    <div className='detail-box2-item4'>
                        <div className='detail-box2-item4-ant1'>
                            <button className='detail-box2-item4-ant1-button1'> <h5 style={{ color: 'white' }}>mua ngay</h5>(giao tận nơi hoặc lấy tại cửa hàng)</button>
                            <button className='detail-box2-item4-ant1-button2'> <i class="fa-solid fa-cart-plus cart"></i><br /><span className='cart-tex'>thêm vào giỏ hàng</span> </button>
                        </div>
                        <div className='detail-box2-item4-ant2'>
                            <button>
                                <b>trả góp 0%</b> <br />( xét duyệt qua điện thoại)
                            </button>
                            <button>
                                <b>trả góp qua thẻ</b> <br />(visa, mastercard, JBC)
                            </button>
                        </div>
                    </div>
                    <div className="detail-box2-item-ant3">
                        <b>ƯU ĐÃI THÊM : </b>
                        <ul>
                            <li>Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)</li>
                            <li> Giảm thêm 5% tối đa 1 triệu khi thanh toán qua Kredivo</li>
                            <li>VNPAY Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ
                                4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng</li>
                            <li>VPBank Mở thẻ tín dụng Citibank - Nhận voucher 2 triệu</li>
                            <li>Ưu đãi mở thẻ TP Bank Evo - Ưu đãi đến 6.6 triệu đồng (cellphones.com.vn)</li>
                        </ul>

                    </div>
                </div>

                <div className='detail-box3'>
                    <div className='detail-box3-item1'>
                        <button>Hà Nội</button>
                        <select name="cars" id="cars">
                            <option value="volvo">Địa chỉ</option>
                            <option value="saab">quận Thanh Xuân</option>
                            <option value="opel">quận Ba Đình </option>
                            <option value="audi">quận Hai Bà Trưng</option>
                            <option value="audi">quận Hoàn kiếm </option>
                            <option value="audi">quận Hà Đông</option>
                            <option value="audi">quận Thanh Trì</option>
                            <option value="audi">quận Hoàng mai </option>
                            <option value="audi">quận Long Biên</option>
                            <option value="audi">quận Nam Từ Liêm</option>
                        </select>
                    </div>
                    <b>sản phẩm hiện có tại các cửa hàng :</b>
                    <div className='detail-box3-item2' >
                        <ul>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                            <li><span><PhoneOutlined /> 02871000218218-220</span> - <span className='detail-box3-item2-address'><i class="fa-sharp fa-solid fa-location-pin"></i> Trần Quang Khải, Phường Tân </span> </li>
                        </ul>
                    </div>
                    <div className='detail-box3-item3' >
                        <b>Thông tin sản phẩm</b>
                        <ul>
                            <li><i class="fa-solid fa-mobile-screen-button"></i>
                                Máy mới 100% , chính hãng Apple Việt Nam.
                                CellphoneS hiện là đại lý bán lẻ uỷ quyền
                                iPhone chính hãng VN/A của Apple Việt Nam</li>
                            <li> <i class="fa-thin fa-gift"></i>
                                iPhone 13 Pro Max 128GB, cáp USB-C sang Lightning</li>
                            <li> <i class="fa-solid fa-shield-halved"></i>
                                1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất.
                                Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple :
                                Điện Thoại Vui ASP (Apple Authorized Service Provider)(xem chi tiết)</li>
                        </ul>

                    </div>
                </div>

            </div>
            <div>
                <HomeContentSlider__1/>
            </div>
            <div id='detail1'>
                <div className='detail1-box'>
                    <button>PHỤ KIỆN MUA CÙNG</button>
                    <button>SẢN PHẨM TƯƠNG TỰ</button>
                    <button>THAM KHẢO THÊM HÀNG CŨ</button>
                </div>
                <div className='detail1-box1'>
                    <div className="detail1-box1-item1">
                        <h4>ĐẶC ĐIỂM NỔI BẬT</h4>
                        <ul>
                            <li>Màn hình Dynamic Island - Sự biến mất của màn hình tai thỏ thay thế bằng thiết
                                kế viên thuốc, OLED 6,7 inch, hỗ trợ always-on display</li>
                            <li>Cấu hình iPhone 14 Pro Max mạnh mẽ, hiệu năng cực khủng từ chipset A16 Bionic</li>
                            <li>Làm chủ công nghệ nhiếp ảnh - Camera sau 48MP, cảm biến TOF sống động</li>
                            <li>Pin liền lithium-ion kết hợp cùng công nghệ sạc nhanh cải tiến</li>
                        </ul>
                        <p>
                            iPhone 14 Pro Max có sự cải thiện lớn màn hình so với iPhone 13 Pro Max. Sự khác biệt
                            giữ phiên bản iPhone 14 Pro Max 256GB và bản tiêu chuẩn 128GB chỉ là bộ nhớ trong. Dưới
                            đây là một số cải tiến nổi bật trên iPhone 14 Pro Max mà có thể bạn chưa biết!
                        </p>
                        <ul>
                            Mời bạn tìm hiểu thêm về phiên bản iPhone 14 Pro Max 128GB với nhiều chương trình khuyến
                            mãi tại CellPhoneS!
                            <li>
                                Kích thước màn hình iPhone 14 Pro Max vẫn là 6.1 inch tuy nhiên phần “tai thỏ” đã được
                                thay thế bằng một đường cắt hình viên thuốc. Apple gọi đây là Dynamic Island - nơi chứa
                                camera Face ID và một đường cắt hình tròn thứ hai cho camera trước.</li>
                            <li>
                                Ngoài ra, iPhone 14 Pro Max có tính năng màn hình luôn bật hoạt động (Always-on Display)
                                với tiện ích màn hình khóa mới trên iOS 16. Người dùng có thể xem các thông tin như lời
                                nhắc, sự kiện lịch và thời tiết mà không cần bật máy lên để xem. Thậm chí, có một trạng
                                thái ngủ cho hình nền, trạng thái này sẽ làm tối hình nền để sử dụng ít pin hơn</li>

                        </ul>
                    </div>
                    <div className="detail1-box1-item2">
                        <h4>Thông số kỹ thuật</h4>
                        <ul>
                            <li>
                                <p>Kích thước màn hình</p>
                                <span>6.7 inches</span>
                            </li>
                            <li>
                                <p>Độ phân giải màn hình</p>
                                <span>2796 x 1290-pixel</span>
                            </li>
                            <li>
                                <p>Hệ điều hành</p>
                                <span>iOS 16</span>
                            </li>
                            <li>
                                <p>Công nghệ màn hình</p>
                                <span>Super Retina XDR OLED</span>
                            </li>
                            <li>
                                <p>Camera sau</p>
                                <span>
                                    Camera chính: 48 MP, f/1.8, 24mm, OIS
                                    Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚
                                    Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom
                                    Cảm biến độ sâu TOF 3D LiDAR
                                </span>
                            </li>
                            <li>
                                <p>Camera trước</p>
                                <span>Camera selfie: 12 MP, f/1.9, 23mm, PDAF</span>
                            </li>
                            <li>
                                <p>Chipset</p>
                                <span>Apple A16 Bionic 6 nhân</span>
                            </li>
                            <li>
                                <p>Bộ nhớ trong</p>
                                <span>256 GB</span>
                            </li>
                            <li>
                                <p>Thẻ SIM</p>
                                <span>2 SIM (nano-SIM và eSIM)</span>

                            </li>
                            <li>
                                <p>Tính năng màn hình</p>
                                <span>
                                    120Hz, Always-On display, HDR, True Tone,
                                    Haptic Touch, 2,000,000:1, 2000 nits
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default ProductDetail