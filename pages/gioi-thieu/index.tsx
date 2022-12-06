import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import ProductCard from "../../components/common/ProductCard"
import PostsCard from "../../components/common/PostsCard"
import Link from 'next/link';
import { useRouter } from 'next/router';

// const imageActivity1 = require('../../public/images/hoatdong1.JPG');
// const imageActivity2 = require('../../public/images/hoatdong2.JPG');
// const imageActivity3 = require('../../public/images/hoatdong3.JPG');

const imageGT1 = require('../../public/images/gioithieu1.png');
const imageGT2 = require('../../public/images/gioithieu2.png');
const imageGT3 = require('../../public/images/gioithieu3.png');
const imageGT4 = require('../../public/images/gioithieu4.png');
const imageGT5 = require('../../public/images/gioithieu5.png');

const imageProduct1 = require('../../public/images/product1.jpg');
const imageProduct2 = require('../../public/images/product2.jpg');
const imageProduct3 = require('../../public/images/product3.jpg');
const imageProduct4 = require('../../public/images/product4.jpg');
const imageProduct5 = require('../../public/images/product-1-nito.png');
const imageProduct6 = require('../../public/images/product-2-vi-sinh.png');
const imageProduct7 = require('../../public/images/product-3-che-pham-xu-ly-mui-hoi.png');
const imageProduct8 = require('../../public/images/product-4-cung-cap-thiet-bi-moi-truong.png');
// const imageProduct9 = require('../../public/images/product-5-be-vi-sinh-nuoc-thai.png');


const dataProduct = [
	{
		id: 1,
		image: imageProduct1.default.src,
		name: "Hữu cơ trùn quế",
		price: 600000,
	},
	{
		id: 2,
		image: imageProduct2.default.src,
		name: "Chế phẩm xử lý nước thải T&T02",
		price: 700000,
	},
	{
		id: 3,
		image: imageProduct3.default.src,
		name: "Men vi sinh xử lý nước thải T&T01",
		price: 800000,
	},
	{
		id: 4,
		image: imageProduct4.default.src,
		name: "Chế phẩm hữu cơ sinh học T&T02",
		price: 900000,
	},
	{
		id: 5,
		image: imageProduct5.default.src,
		name: "Xử lý ni tơ T&T",
		price: 900000,
	},
	{
		id: 6,
		image: imageProduct6.default.src,
		name: "vi sinh nước thải T&T",
		price: 900000,
	},
	{
		id: 7,
		image: imageProduct7.default.src,
		name: "Chế phẩm xử lý mùi hôi",
		price: 900000,
	},
	{
		id: 8,
		image: imageProduct8.default.src,
		name: "Cung cấp thiết bị môi trường",
		price: 900000,
	},
	// {
	// 	id: 9,
	// 	image: imageProduct9.default.src,
	// 	name: "Bể vi sinh nước thải",
	// 	price: 900000,
	// },
]


const image1 = require('../../public/images/congtrinh1.png');
const image2 = require('../../public/images/congtrinh2.png');
const image3 = require('../../public/images/congtrinh3.png');
const image4 = require('../../public/images/congtrinh4.png');
const image5 = require('../../public/images/congtrinh5.png');
const image6 = require('../../public/images/congtrinh6.png');
const image7 = require('../../public/images/congtrinh7.png');
// const image8 = require('../../public/images/congtrinh8.png');


const dataBuilding = [
	{
		id: 1,
		image: image1.default.src,
		name: "HỆ THỐNG XỬ LÝ NƯỚC THẢI THỦY SẢN - CS: 500M3/ NGÀY ĐÊM",
		company: "CTY TNHH CHẾ BIẾN THỦY SẢN PHÚ QUÝ, TP.VŨNG TÀU",
		time: "28/10/2019",
	},
	{
		id: 2,
		image: image2.default.src,
		name: "BỘ LỌC TINH HỆ THỐNG XỬ LÝ NƯỚC THẢI THỦY SẢN - CS: 500M3/ NGÀY",
		company: "CTY TNHH CHẾ BIẾN THỦY SẢN PHÚ QUÝ, TP.VŨNG TÀU",
		time: "28/10/2019",
	},
	{
		id: 3,
		image: image3.default.src,
		name: "TỦ ĐIỆN ĐIỀU KHIỂN  HỆ THỐNG XỬ LÝ NƯỚC THẢI BỆNH XÁ - CS: 3M3/ NGÀY ĐÊM",
		company: "CÔNG AN TỈNH BÌNH ĐỊNH",
		time: "28/10/2019",
	},
	{
		id: 4,
		image: image4.default.src,
		name: "BỂ CHỨA NƯỚC THẢI HỆ THỐNG XỬ LÝ NƯỚC THẢI THỦY SẢN BẾN CÁ TÂN PHỤNG - CS: 80M3/ NGÀY ĐÊM",
		company: "SỞ NÔNG NGHIỆP VÀ PHÁT TRIỂN NÔNG THÔN TỈNH BÌNH ĐỊNH",
		time: "28/10/2019",
	},
	{
		id: 5,
		image: image5.default.src,
		name: "TỦ ĐIỆN ĐIỀU KHIỂN THỐNG XỬ LÝ NƯỚC THẢI  THỦY SẢN BẾN CÁ TÂN PHỤNG - CS: 80M3/ NGÀY ĐÊM",
		company: "SỞ NÔNG NGHIỆP VÀ PHÁT TRIỂN NÔNG THÔN TỈNH BÌNH ĐỊNH",
		time: "28/10/2019",
	},
	{
		id: 6,
		image: image6.default.src,
		name: "BỂ LẮNG BÙN VI SINH HỆ THỐNG XỬ LÝ NƯỚC THẢI - CS: 120M3/ NGÀY ĐÊM",
		company: "BỆNH VIỆN PHONG - DA LIỄU TW QUY HÒA",
		time: "28/10/2019",
	},
	{
		id: 7,
		image: image7.default.src,
		name: "BỘ LỌC TINH HỆ THỐNG XỬ LÝ NƯỚC THẢI GIẤY CÔNG SUẤT: 700M3/ NGÀY ĐÊM",
		company: "CÔNG TY CP GIẤY VĨNH HUÊ,Q.THỦ ĐỨC,TP.HCM",
		time: "28/10/2019",
	},
	// {
	// 	id: 8,
	// 	image: image8.default.src,
	// 	name: "BỂ VI SINH HỆ THỐNG XỬ LÝ NƯỚC THẢI GIẤY CÔNG SUẤT: 700M3/ NGÀY ĐÊM",
	// 	company: "CÔNG TY CP GIẤY VĨNH HUÊ,Q.THỦ ĐỨC,TP.HCM",
	// 	time: "28/10/2019",
	// },
]

function Index() {
	const router = useRouter()

	return (
		<div>
			<Head>
				<title>Giới Thiệu Môi Trường T&T</title>
			</Head>
			<div className="breadcrumb_box">
				<div className="breadcrumb_box_router_box">
					<div className="breadcrumb_box_router_prev" onClick={() => router.push("/")}>Trang chủ</div>
					<div className="breadcrumb_box_router_slash">/</div>
					<div className="breadcrumb_box_router_here">Giới thiệu</div>
				</div>
			</div>
			<div className='introduce_container'>
				<div className="introduce_container_opacity">
					<div className="introduce_title_box">
						<h1 className='introduce_title'>CÔNG TY TNHH TM DV KỸ THUẬT</h1>
						<h1 className='introduce_title'>MÔI TRƯỜNG T & T</h1>
					</div>
					<div className="introduce_text_box">
						<div className="introduce_hello">Kính chào quý khách hàng!</div>
						<div className="introduce_description">
							Công ty môi trường T&T  là một đơn vị chuyên nghiên cứu về lĩnh vực men vi sinh xử lý nước thải áp dụng cho tất cả các hệ thống nước thải như : Bệnh Viện, ngành dệt nhuộm, ngành thủy sản, giết mổ gia súc, gia cầm và nước thải sinh hoạt...
						</div>
					</div>
					<div className="introduce_content_box">
						<div className="introduce_content_box_opacity">
							{/* <div className="introduce_content_side_bar col-lg-3 col-12">
								<div className="introduce_content_side_bar_item">
									<div className="introduce_content_side_bar_item_img_box">
										<img src={imageGT2.default.src} alt="gioi-thieu" className='introduce_content_side_bar_item_img' />
									</div>
									<div className="introduce_content_side_bar_item_title">New Features</div>
									<div className="introduce_content_side_bar_item_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</div>
								</div>
								<div className="introduce_content_side_bar_item">
									<div className="introduce_content_side_bar_item_img_box">
										<img src={imageGT3.default.src} alt="gioi-thieu" className='introduce_content_side_bar_item_img' />
									</div>
									<div className="introduce_content_side_bar_item_title">New Features</div>
									<div className="introduce_content_side_bar_item_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</div>
								</div>
							</div> */}
							<div className="introduce_content_sphere col-12">
								<div className="introduce_content_sphere_box">
									<div className="introduce_content_sphere_img_box">
										<img className="introduce_content_sphere_img" src={imageGT1.default.src} alt="lĩnh vực hoạt động"></img>
									</div>
									<div className="introduce_content_sphere_text_box">
										<div className="introduce_content_sphere_text">- Nghiên cứu và phát triển men vi sinh xử lý nước thải.</div>
										<div className="introduce_content_sphere_text">- Nghiên cứu và phát triển chế phẩm hữu cơ sinh học cho cây trồng.</div>
										<div className="introduce_content_sphere_text">- Sản xuất men vi sinh xử lý nước thải.</div>
										<div className="introduce_content_sphere_text">- Sản xuất chế phẩm hữu cơ sinh học cho cây trồng.</div>
										<div className="introduce_content_sphere_text">- Tìm đối tác , đại lý phân phối men vi sinh xử lý nước thải, bùn vi sinh nước thải</div>
										<div className="introduce_content_sphere_text">- Tìm đối tác , đại lý phân phối chế phẩm hữu cơ sinh học cho cây trồng.</div>
										<div className="introduce_content_sphere_text">- Tư vấn thiết kế các công trình xử lý môi trường.</div>
										<div className="introduce_content_sphere_text">- Nhận lập hồ sơ báo cáo giám sát môi trường,cam kết bảo vệ môi trường, xin phép xả thải, xin phép khai thác nước ngầm.</div>
										<div className="introduce_content_sphere_text">- Nâng cấp sửa chữa và bảo trì hệ thống xử lý nước thải, nước sạch.</div>
										<div className="introduce_content_sphere_text">- Dịch vụ cho thuê hệ thống xử lý nước thải làng nghề công suất từ  5 -15m3/ngày đêm.</div>
										<div className="introduce_content_sphere_text">- Dịch vụ đo kiểm môi trường lao động.</div>
										<div className="introduce_content_sphere_text">- Nhận TEST nhanh chỉ tiêu COD nước thải.</div>
										{/* <div className="introduce_content_sphere_text_qc">Dịch vụ in ấn thiết kế quảng cáo</div> */}
									</div>
									{/* <div className="introduce_content_activity">
										<img src={imageActivity1.default.src} alt="hoạt động của công ty" className='introduce_content_activity_img' />
										<img src={imageActivity2.default.src} alt="hoạt động của công ty" className='introduce_content_activity_img' />
										<img src={imageActivity3.default.src} alt="hoạt động của công ty" className='introduce_content_activity_img' />
									</div> */}
								</div>
							</div>
							{/* <div className="introduce_content_side_bar col-lg-3 col-12">
								<div className="introduce_content_side_bar_item">
									<div className="introduce_content_side_bar_item_img_box">
										<img src={imageGT4.default.src} alt="gioi-thieu" className='introduce_content_side_bar_item_img' />
									</div>
									<div className="introduce_content_side_bar_item_title">New Features</div>
									<div className="introduce_content_side_bar_item_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</div>
								</div>
								<div className="introduce_content_side_bar_item">
									<div className="introduce_content_side_bar_item_img_box">
										<img src={imageGT5.default.src} alt="gioi-thieu" className='introduce_content_side_bar_item_img' />
									</div>
									<div className="introduce_content_side_bar_item_title">New Features</div>
									<div className="introduce_content_side_bar_item_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index