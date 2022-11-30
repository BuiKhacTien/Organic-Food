import React, { useState, useEffect } from 'react'
import TProduct from '../../type/TProduct'
import Slider from "react-slick";
import { useRouter } from 'next/router';
import { GrPrevious, GrNext } from "react-icons/gr";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const arrayImage = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1pzCVCXsJSOtFGzlZ0UJsmfCM0uERU3gkg&usqp=CAU",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1MqOg2bzrX9UPB0Bamtf-whL28pTQHHs4Q&usqp=CAU",
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcGfmYGt6QHukubqs4VNpVJnb9wSwVinN-g&usqp=CAU",
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIIjt8rKe0FqG6wet4EKNrHKfWER549PwGA&usqp=CAU",
    },
]

export default function Slug({ }) {
    const [quantity, setQuantity] = useState(1)

    const router = useRouter()
    useEffect(() => {

    }, [])
    
    const handleQuantity = (qty: number) => {
        setQuantity(quantity + qty)
    }

    // const settings = {
    //     customPaging: function (i: number) {
    //         return (
    //           <a>
    //             <img
    //               className="img_detail_media"
    //               src={arrayImage[i].image}
    //               alt="image_dots"
    //             />
    //           </a>
    //         );
    //     },
    //     dots: true,
    //     dotsClass: "react_slick_tien",
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //   };

    return (
        <div>
            <div className='details_container'>
                <div className="details_box">
                    {/* <Slider {...settings}>
                    {arrayImage?.map((v, i) => {
                        return (
                        <div key={v.id} className="details_img_item_box">
                            <img src={v.image} alt="image" className='details_img_item'/>
                        </div>
                        );
                    })}
                    </Slider> */}
                    <div className="details_img_box col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <img className="details_img" src="https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-beef-dairy-featured-image.png" alt="image" />
                    </div>
                    <div className="details_content_box col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <h1>BiOWiSH® MANURE & ODOR TREATMENT: BEEF & DAIRY</h1>
                        <div className="details_content_box_line"></div>
                        <div className="details_content_price">1,300,000 ₫</div>
                        <div className="details_content_detail">Xử lý nước thân thiện với môi trường và không độc hại</div>
                        <div className="details_content_description">BiOWiSH ® Aqua tăng tốc loại bỏ sinh học các chất dinh dưỡng từ nước thải, loại bỏ sự phụ thuộc của các nhà máy xử lý nước thải vào sinh khối (và tất cả các thách thức bảo trì vốn có của nó).</div>
                        <div className="details_content_qty_add">
                            <InputGroup className="details_content_qty">
                                <Button onClick={() => handleQuantity(-1)} disabled={quantity <= 1} variant="outline-secondary">-</Button>
                                <FormControl value={quantity} className="details_content_qty_text" />
                                <Button disabled={quantity > 100} onClick={() => handleQuantity(1)} variant="outline-secondary">+</Button>
                                {/* <Button disabled={quantity === data.stock} onClick={() => handleQuantity(1)} variant="outline-secondary">+</Button> */}
                            </InputGroup>
                            <div className="details_content_add_cart">
                                Thêm vào giỏ hàng
                            </div>
                        </div>
                        <div className="details_content_buy_now">
                            <div className='details_content_buy_now_title'>MUA NGAY</div>
                            <div className='details_content_buy_now_text'>Gọi điện xác nhận và giao hàng tận nơi</div>
                        </div>
                    </div>
                </div>
                <div className="details_describe">
                    <div className="details_describe_title">Sử dụng:</div>
                        <ul>
                            <li>Nước thải thành phố</li>
                            <li>Nước thải công nghiệp</li>
                            <li>Nước mặt</li>
                            <li>Sông</li>
                            <li>Kênh rạch</li>
                            <li>Hồ</li>
                            <li>Ao</li>
                            <li>Hồ nước</li>
                        </ul>
                        <div className="details_describe_title">Lợi ích:</div>
                        <ul>
                            <li>Giảm sản xuất và xử lý bùn</li>
                            <li>Tăng công suất nhà máy; Tránh vốn</li>
                            <li>Giảm mùi hôi</li>
                            <li>Giảm sục khí; Tiết kiệm năng lượng</li>
                            <li>Giảm nhu cầu phụ gia hóa học</li>
                            <li>Cải thiện sự ổn định của nhà máy</li>
                            <li>Giảm hydro sunfua, amoniac và nitrat</li>
                            <li>Xử lý trước ảnh hưởng trong các hệ thống thu thập</li>
                            <li>100% tự nhiên và không độc hại</li>
                        </ul>

                {/* <Tabs
                    defaultActiveKey="describe"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="describe" title="Mô tả">
                        mô tả
                    </Tab>
                    <Tab eventKey="comment" title="Đánh Giá">
                        comment
                    </Tab>
                </Tabs> */}
                </div>
            </div>
        </div>
    )
}
