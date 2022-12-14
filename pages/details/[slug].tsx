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
                        <h1>BiOWiSH?? MANURE & ODOR TREATMENT: BEEF & DAIRY</h1>
                        <div className="details_content_box_line"></div>
                        <div className="details_content_price">1,300,000 ???</div>
                        <div className="details_content_detail">X??? l?? n?????c th??n thi???n v???i m??i tr?????ng v?? kh??ng ?????c h???i</div>
                        <div className="details_content_description">BiOWiSH ?? Aqua t??ng t???c lo???i b??? sinh h???c c??c ch???t dinh d?????ng t??? n?????c th???i, lo???i b??? s??? ph??? thu???c c???a c??c nh?? m??y x??? l?? n?????c th???i v??o sinh kh???i (v?? t???t c??? c??c th??ch th???c b???o tr?? v???n c?? c???a n??).</div>
                        <div className="details_content_qty_add">
                            <InputGroup className="details_content_qty">
                                <Button onClick={() => handleQuantity(-1)} disabled={quantity <= 1} variant="outline-secondary">-</Button>
                                <FormControl value={quantity} className="details_content_qty_text" />
                                <Button disabled={quantity > 100} onClick={() => handleQuantity(1)} variant="outline-secondary">+</Button>
                                {/* <Button disabled={quantity === data.stock} onClick={() => handleQuantity(1)} variant="outline-secondary">+</Button> */}
                            </InputGroup>
                            <div className="details_content_add_cart">
                                Th??m v??o gi??? h??ng
                            </div>
                        </div>
                        <div className="details_content_buy_now">
                            <div className='details_content_buy_now_title'>MUA NGAY</div>
                            <div className='details_content_buy_now_text'>G???i ??i???n x??c nh???n v?? giao h??ng t???n n??i</div>
                        </div>
                    </div>
                </div>
                <div className="details_describe">
                    <div className="details_describe_title">S??? d???ng:</div>
                        <ul>
                            <li>N?????c th???i th??nh ph???</li>
                            <li>N?????c th???i c??ng nghi???p</li>
                            <li>N?????c m???t</li>
                            <li>S??ng</li>
                            <li>K??nh r???ch</li>
                            <li>H???</li>
                            <li>Ao</li>
                            <li>H??? n?????c</li>
                        </ul>
                        <div className="details_describe_title">L???i ??ch:</div>
                        <ul>
                            <li>Gi???m s???n xu???t v?? x??? l?? b??n</li>
                            <li>T??ng c??ng su???t nh?? m??y; Tr??nh v???n</li>
                            <li>Gi???m m??i h??i</li>
                            <li>Gi???m s???c kh??; Ti???t ki???m n??ng l?????ng</li>
                            <li>Gi???m nhu c???u ph??? gia h??a h???c</li>
                            <li>C???i thi???n s??? ???n ?????nh c???a nh?? m??y</li>
                            <li>Gi???m hydro sunfua, amoniac v?? nitrat</li>
                            <li>X??? l?? tr?????c ???nh h?????ng trong c??c h??? th???ng thu th???p</li>
                            <li>100% t??? nhi??n v?? kh??ng ?????c h???i</li>
                        </ul>

                {/* <Tabs
                    defaultActiveKey="describe"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="describe" title="M?? t???">
                        m?? t???
                    </Tab>
                    <Tab eventKey="comment" title="????nh Gi??">
                        comment
                    </Tab>
                </Tabs> */}
                </div>
            </div>
        </div>
    )
}
