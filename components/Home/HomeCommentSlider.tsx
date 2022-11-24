import React from 'react';
import Slider from 'react-slick'

import SphereOfActivityCard from "../common/SphereOfActivityCard"

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const data = [
	{
		id: 1,
		avatar: "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1600",
		name: "Mark Jance",
		comment: "Năng suất và sản lượng đúng là tăng hẳn từ lúc kết hợp dùng BiOWiSH™ Crop Liquid và các loại phân hữu cơ. Chè của tôi giờ đã đạt tiêu chuẩ đủ để có thể xuất khẩu ra rất nhiều nơi trên thế khắp thế giới rồi. Cảm ơn các anh em của BiOWiSH™ Vietnam đã hỗ trợ tôi trong suốt thời gian qua…",
		star: 4.5,
	},
	{
		id: 2,
		avatar: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1600",
		name: "Muriel",
		comment: "Lấy hai quả đồi đến nay cũng đã gần một năm, suy đi tính lại định trồng cam mà nhìn nền đất suy kiệt và bạc màu quá, chả biết làm thế nào nữa. Cũng may có mấy anh em bên BiOWiSH™ Vietnam hỗ trợ về sản phẩm Crop Liquid và Crop 16-40-0 của Mỹ. Tốt hơn thật, mỗi tội phải dọn cỏ nhiều quá!",
		star: 4,
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
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
};

function Index() {
	return (
		<div className="slider_box">
			<Slider {...Settings}>
				{
					data.map((value) => {
						return (
							<div key={value.id} className="home_comment_slider_item_box">
								<div className="home_comment_slider_item">
									<div className="home_comment_slider_item_content">
											<div className="home_comment_slider_item_content_box">
												<img className="home_comment_slider_item_content_img" src={value.avatar} alt={value.name} />
												<div className="home_comment_slider_item_content_name_star_box">
													<p className="home_comment_slider_item_content_name">{value.name}</p>
													<div>
														<BsStarFill className="home_comment_star_icon"/>
														<BsStarFill className="home_comment_star_icon"/>
														<BsStarFill className="home_comment_star_icon"/>
														<BsStarFill className="home_comment_star_icon"/>
														<BsStarHalf className="home_comment_star_icon"/>
													</div>
												</div>
											</div>
											<div className="home_comment_slider_item_text">{value.comment}</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</Slider>
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