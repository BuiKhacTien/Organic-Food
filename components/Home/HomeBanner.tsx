import React from 'react'
import Link from 'next/link'

function Index() {
	return (
		<div className="home_banner">
			<div className="home_banner_content">
				<h2 className='home_banner_content_hello'>CHÀO MỪNG CÁC BẠN ĐẾN VỚI…</h2>
				<h1 className="home_banner_content_title_tnhh">CÔNG TY TNHH TM DV</h1>
				<h1 className="home_banner_content_title_ktmt">KỸ THUẬT MÔI TRƯỜNG </h1>
				<h1 className="home_banner_content_title_t_t">T & T</h1>
				<p className='home_banner_content_description'>Công ty môi trường T&T  là một đơn vị chuyên nghiên cứu về lĩnh vực men vi sinh xử lý nước thải áp dụng cho tất cả các hệ thống nước thải như : Bệnh Viện, ngành dệt nhuộm, ngành thủy sản, giết mổ gia súc, gia cầm và nước thải sinh hoạt...</p>
				<div className="more_infomation"><Link href="/gioi-thieu">TÌM HIỂU THÊM</Link></div>
			</div>
			<div className="home_banner_img_box">
				<img className="home_banner_img" src="https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/tumblr_pl4g3q2J1N1w3k1p5o1_640.gif" alt="banner" />
			</div>
		</div>
	)
}

export default Index