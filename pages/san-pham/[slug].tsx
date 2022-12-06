import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

const imageMain = require('../../public/images/product-6-trun-que.jpg');
const image1 = require('../../public/images/trunque1.jpg');
const image2 = require('../../public/images/trunque2.jpg');
const image3 = require('../../public/images/trunque3.jpg');
const image4 = require('../../public/images/trunque4.jpg');
const image5 = require('../../public/images/trunque5.jpg');
const image6 = require('../../public/images/trunque6.jpg');
const image7 = require('../../public/images/trunque7.jpg');
const image8 = require('../../public/images/trunque8.jpg');

const arrayImage = [
    image2.default.src,
    image3.default.src,
    image4.default.src,
    image5.default.src,
    image6.default.src,
    image7.default.src,
    image8.default.src,
]

export default function Slug({ }) {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Hữu cơ trùn quế</title>
            </Head>
            <div className="breadcrumb_box">
				<div className="breadcrumb_box_router_box">
					<div className="breadcrumb_box_router_prev" onClick={() => router.push("/")}>Trang chủ</div>
					<div className="breadcrumb_box_router_slash">/</div>
					<div className="breadcrumb_box_router_here_hover" onClick={() => router.push("/san-pham")}>Sản phẩm</div>
				</div>
			</div>
            <div className='detail_container'>
                <h1 className="detail_title">
                    HỮU CƠ TRÙN QUẾ
                </h1>
                <div className="detail_main_image_box">
                    <img src={imageMain.default.src} className="detail_main_image" alt="hữu cơ trùng quế" />
                </div>
                <div className="detail_description">
                    <h4><b>Loại:</b> Dạng viên nén.</h4>
                    <h4><b>Công dụng:</b> Bổ sung chất hữu cơ cho cây, bón nhiều không gây ngộ độc cho cây.</h4>
                    <h4><b>Cách sử dụng</b> Rải đều trên mặt chậu cây trồng, tuỳ theo cây lớn nhỏ bón 10g-30g/ cây.</h4>
                </div>
                <div className="detail_list_image_box">
                    <img src={image1.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image2.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image3.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image4.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image5.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image6.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image7.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                    <img src={image8.default.src} className="detail_img" alt="hữu cơ trùng quế" />
                </div>
            </div>
        </div>
    )
}
