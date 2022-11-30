import React from 'react';
import Slider from 'react-slick'

import ProductCard from "../common/ProductCard"

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GrPrevious, GrNext } from "react-icons/gr";

const image1 = require('../../public/images/product1.jpg');
const image2 = require('../../public/images/product2.jpg');
const image3 = require('../../public/images/product3.jpg');
const image4 = require('../../public/images/product4.jpg');
const image5 = require('../../public/images/product-1-nito.png');
const image6 = require('../../public/images/product-2-vi-sinh.png');
const image7 = require('../../public/images/product-3-che-pham-xu-ly-mui-hoi.png');
const image8 = require('../../public/images/product-4-cung-cap-thiet-bi-moi-truong.png');
const image9 = require('../../public/images/product-5-be-vi-sinh-nuoc-thai.png');


const data = [
	{
		id: 1,
		image: image1.default.src,
		name: "Hữu cơ trùn quế",
		price: 600000,
	},
	{
		id: 2,
		image: image2.default.src,
		name: "Chế phẩm xử lý nước thải T&T02",
		price: 700000,
	},
	{
		id: 3,
		image: image3.default.src,
		name: "Men vi sinh xử lý nước thải T&T01",
		price: 800000,
	},
	{
		id: 4,
		image: image4.default.src,
		name: "Chế phẩm hữu cơ sinh học T&T02",
		price: 900000,
	},
	{
		id: 5,
		image: image5.default.src,
		name: "Xử lý ni tơ T&T",
		price: 900000,
	},
	{
		id: 6,
		image: image6.default.src,
		name: "vi sinh nước thải T&T",
		price: 900000,
	},
	{
		id: 7,
		image: image7.default.src,
		name: "Chế phẩm xử lý mùi hôi",
		price: 900000,
	},
	{
		id: 8,
		image: image8.default.src,
		name: "Cung cấp thiết bị môi trường",
		price: 900000,
	},
	{
		id: 9,
		image: image9.default.src,
		name: "Bể vi sinh nước thải",
		price: 900000,
	},
]

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
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 3000,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
};

function Index() {
	console.log(image1);
	return (
		<div className='exclusive_products_container'>
			<div className="exclusive_products_title_box">
				<div className="title_product_line"></div>
				<div className="exclusive_products_title">SẢN PHẨM ĐỘC QUYỀN</div>
			</div>
			<div className="slider_box">
				<Slider {...Settings}>
					{
						data.map((value) => {
							return (
								<div key={value.id} className="slider_box_item">
									<ProductCard data={value}/>
								</div>
							)
						})
					}
				</Slider>
			</div>
		</div>
	)
}

export default Index



function Arrow(props: any) {
	let className = props.type === "next" ? "nextArrow" : "prevArrow";
	className += " arrow";
	const char = props.type === "next";
	return (
		<span className={className} onClick={props.onClick}>
			{char ? (
				<HiArrowNarrowLeft />
			) : (
				<HiArrowNarrowRight />
			)}
		</span>
	);
}