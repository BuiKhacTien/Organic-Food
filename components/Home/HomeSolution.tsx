import React from 'react'
import Link from 'next/link'

import { GiShrimp, GiFruitTree } from "react-icons/gi"
import { BsPiggyBank } from "react-icons/bs"
import { MdRecycling } from 'react-icons/md'

function Index() {
	return (
		<div className="technology_solution">
			<div className="technology_solution_title">Giải pháp công nghệ</div>
			<div className="technology_solution_content">AN TOÀN + HIỆU QUẢ = BỀN VỮNG</div>
			<div className="list_of_fields">
				<div className="list_of_fields_item col-lg-3 col-md-3 col-sm-6 col-6">
					<div className="list_of_fields_item_icon_box"><GiFruitTree className='list_of_fields_item_icon' /></div>
					<div className="list_of_fields_item_title">Lĩnh vực nông nghiệp</div>

				</div>
				<div className="list_of_fields_item col-lg-3 col-md-3 col-sm-6 col-6">
					<div className="list_of_fields_item_icon_box"><GiShrimp className='list_of_fields_item_icon' /></div>
					<div className="list_of_fields_item_title">Lĩnh vực thủy sản</div>

				</div>
				<div className="list_of_fields_item col-lg-3 col-md-3 col-sm-6 col-6">
					<div className="list_of_fields_item_icon_box"><BsPiggyBank className='list_of_fields_item_icon' /></div>
					<div className="list_of_fields_item_title">Lĩnh vực gia súc</div>

				</div>
				<div className="list_of_fields_item col-lg-3 col-md-3 col-sm-6 col-6">
					<div className="list_of_fields_item_icon_box"><MdRecycling className='list_of_fields_item_icon' /></div>
					<div className="list_of_fields_item_title">Lĩnh vực môi trường</div>

				</div>
			</div>
			<div className="technology_solution_line1"></div>
			<div className="technology_solution_description">Phát sinh từ mong muốn giảm thiểu tối đa rủi ro mà người nông dân có thể gặp phải khi canh tác nông nghiệp cũng như thuỷ, hải sản tại Việt Nam; Đồng thời cũng hiểu được giá trị kinh tế từ thực phẩm đảm bảo chất lượng trước thực trạng xã hội hiện nay…</div>
			<div className="technology_solution_text">
				CÔNG TY TNHH TM DV 
				<br />
				KỸ THUẬT MÔI TRƯỜNG T & T 
				<br />
				SẼ LÀ GIẢI PHÁP ĐÁP ỨNG NHU CẦU
				<br />
				& MONG MUỐN CỦA CÁC BẠN
			</div>
			<div className="technology_solution_button">
				<div className="button_solution"><Link href="/">THAM KHẢO GIẢI PHÁP</Link></div>
				<div className="button_solution support_solution"><Link href="/">YÊU CẦU HỖ TRỢ KỸ THUẬT</Link></div>
			</div>
			<div className="technology_solution_line2"></div>
		</div>
	)
}

export default Index