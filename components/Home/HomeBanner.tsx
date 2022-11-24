import React from 'react'
import Link from 'next/link'

function Index() {
	return (
		<div className="home_banner">
			<div className="home_banner_content">
				<h2 className='home_banner_content_hello'>CHÀO MỪNG CÁC BẠN ĐẾN VỚI…</h2>
				<h1 className="home_banner_content_title_bio">BiO-MONA</h1>
				<h1 className="home_banner_content_title_vn">Vietnam</h1>
				<p className='home_banner_content_description'>Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam…</p>
				<div className="more_infomation"><Link href="/gioi-thieu">TÌM HIỂU THÊM</Link></div>
			</div>
			<div className="home_banner_img_box">
				<img className="home_banner_img" src="https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/tumblr_pl4g3q2J1N1w3k1p5o1_640.gif" alt="banner" />
			</div>
		</div>
	)
}

export default Index