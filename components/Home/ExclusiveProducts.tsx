import React from 'react';
import Slider from 'react-slick'

import ProductCard from "../common/ProductCard"

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GrPrevious, GrNext } from "react-icons/gr";

const data = [
	{
		id: 1,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 1",
		price: 600000,
	},
	{
		id: 2,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/5749ffd1a06d4cbd7e687444cfc1e79963fdad2f-300x300.jpg",
		name: "Dâu tây",
		price: 700000,
	},
	{
		id: 3,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
		name: "Tôm sú",
		price: 800000,
	},
	{
		id: 4,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 4",
		price: 900000,
	},
	{
		id: 5,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 5",
		price: 1000000,
	},
	{
		id: 6,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 6",
		price: 1100000,
	},
	{
		id: 7,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 7",
		price: 1200000,
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
	slidesToScroll: 5,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
};

function Index() {
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
								<div key={value.id}>
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