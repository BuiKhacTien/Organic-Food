import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'

import PostsCard from "../common/PostsCard"

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GrPrevious, GrNext } from "react-icons/gr";

const image1 = require('../../public/images/congtrinh1.png');
const image2 = require('../../public/images/congtrinh2.png');
const image3 = require('../../public/images/congtrinh3.png');
const image4 = require('../../public/images/congtrinh4.png');
const image5 = require('../../public/images/congtrinh5.png');
const image6 = require('../../public/images/congtrinh6.png');
const image7 = require('../../public/images/congtrinh7.png');
const image8 = require('../../public/images/congtrinh8.png');


const data = [
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
	{
		id: 8,
		image: image8.default.src,
		name: "BỂ VI SINH HỆ THỐNG XỬ LÝ NƯỚC THẢI GIẤY CÔNG SUẤT: 700M3/ NGÀY ĐÊM",
		company: "CÔNG TY CP GIẤY VĨNH HUÊ,Q.THỦ ĐỨC,TP.HCM",
		time: "28/10/2019",
	},
]

function Index() {

	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<GrNext className='slider_next_arrow_icon' onClick={onClick} />
		);
	}
	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props;
		return (
			<GrPrevious className='slider_prev_arrow_icon' onClick={onClick} />
		);
	}
	
	const Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
    	autoplaySpeed: 4000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
			  breakpoint: 580,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
		  ]
	};

	return (
		<div className="home_posts_box">
			<div className="home_posts_infomation">
				<h2 className="home_posts_infomation_title">
					CÔNG TRÌNH NỔI BẬT
				</h2>
				<div className="home_posts_infomation_text">
				Công ty môi trường T&T  là một đơn vị chuyên nghiên cứu về lĩnh vực men vi sinh xử lý nước thải áp dụng cho tất cả các hệ thống nước thải như : Bệnh Viện, ngành dệt nhuộm, ngành thủy sản, giết mổ gia súc, gia cầm và nước thải sinh hoạt...
				</div>
			</div>
			<div className="home_posts_slider">
				<div className="slider_box">
					<Slider {...Settings}>
						{
							data.map((value) => {
								return (
									<div key={value.id}>
										<PostsCard data={value}/>
									</div>
								)
							})
						}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default Index