import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from "next/link"
import { useRouter } from 'next/router';


const imageMain = require('../../public/images/congtrinh1.png');

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

export default function Slug({ }) {

	const router = useRouter();

	return (
		<div>
			<Head>
				<title>HỆ THỐNG XỬ LÝ NƯỚC THẢI THỦY SẢN</title>
			</Head>
			<div className="breadcrumb_box">
				<div className="breadcrumb_box_router_box">
					<div className="breadcrumb_box_router_prev" onClick={() => router.push("/")}>Trang chủ</div>
					<div className="breadcrumb_box_router_slash">/</div>
					<div className="breadcrumb_box_router_here_hover" onClick={() => router.push("/cong-trinh")}>Công trình</div>
				</div>
			</div>
			<div className='detail_ct_container'>
				<div className="detail_ct_box">
					<div className="detail_ct_posts col-lg-3 col-xs-12 col-12">
						<div className="knowledge_new_title">
							Bài viết mới
						</div>
						<div className="knowledge_new_items_box">
							<div className="knowledge_new_items">
								{
									data.map((value, index) => {
										return (
											<div className='knowledge_new_content_box' key={value.name}>
												<Link href="/cong-trinh/he-thong-xu-ly-nuoc-thai-thuy-san">
													<div className="knowledge_new_content_box_box">
														<div className="knowledge_new_img_box">
															<img className='knowledge_new_img' src={value.image} alt={value.name} />
														</div>
														<div className="knowledge_new_content_title">{value.name}</div>
													</div>
												</Link>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
					<div className='col-lg-9 col-xs-12 col-12'>
						<div className="detail_ct_content">
							<h3 className="detail_ct_title">
								HỆ THỐNG XỬ LÝ NƯỚC THẢI THỦY SẢN
								<br />
								CS: 500M3/ NGÀY ĐÊM
								<br />
								CTY TNHH CHẾ BIẾN THỦY SẢN PHÚ QUÝ, TP.VŨNG TÀU
							</h3>
							<div className="detail_ct_time">28/10/2019</div>
							<div className="detail_main_image_box">
								<img src={imageMain.default.src} className="detail_main_image" alt="HỆ THỐNG XỬ LÝ NƯỚC THẢI THỦY SẢN" />
							</div>
							<Link href="/lien-he">
								<div className="detail_technical_support">
									Yêu cầu hỗ trợ kỹ thuật
								</div>
							</Link>
						</div>
						<div className="detail_ct_comment">
							<div className="detail_ct_comment_title">Trả lời</div>
							<div className="detail_ct_comment_text">Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</div>
							<div className="detail_ct_comment_form">
								<div className="detail_ct_comment_form_comment">
									<div className="detail_ct_comment_form_title">Bình luận</div>
									<textarea className='detail_ct_comment_form_area' rows={5} cols={100} />
								</div>
								<div className="detail_ct_comment_form_infomation">
									<div className="detail_ct_comment_form_infomation_name">
										<div className="detail_ct_comment_form_title">Tên *</div>
										<input type="text" className="detail_ct_comment_form_infomation_input"/>
									</div>
									<div className="detail_ct_comment_form_infomation_email">
										<div className="detail_ct_comment_form_title">Email *</div>
										<input type="text" className="detail_ct_comment_form_infomation_input"/>
									</div>
								</div>
								<div className="detail_ct_comment_form_submit">
									PHẢN HỒI
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
