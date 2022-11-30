import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { FaSearch } from "react-icons/fa"

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

function index() {
    const router = useRouter();
    const [search, setSearch] = useState("")
    return (
        <div>
            <Head>
                <title>Tin Tức</title>
            </Head>
            <div className="breadcrumb_box">
                <div className="breadcrumb_box_router_box">
                    <div className="breadcrumb_box_router_prev" onClick={() => router.push("/")}>Trang chủ</div>
                    <div className="breadcrumb_box_router_slash">/</div>
                    <div className="breadcrumb_box_router_here">Tin Tức</div>
                </div>
            </div>
            <div className='knowledge_container'>
                <div className="knowledge_box">
                    <div className="knowledge_old col-lg-9 col-md-12 col-sm-12 col-xs-12 col-12">
                        <div className="knowledge_search_box">
                            <input className="knowledge_search_box_input" placeholder='Tìm kiếm...' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <FaSearch className='knowledge_search_box_icon' />
                        </div>
                        <div className="knowledge_old_items_box">
                            {data.map((value, index) => {
                                return (
                                    <div className="knowledge_old_item col-md-4 col-sm-6 col-12">
                                        <div className='knowledge_content_box'>
                                            <div className="knowledge_content_box_box">
                                                <div className="knowledge_img_box">
                                                    <img className='knowledge_img' src={value.image} alt={value.name} />
                                                </div>
                                                <div className="knowledge_content_title">{value.name}</div>
                                                <div className="knowledge_content_description">{value.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="knowledge_new col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12">
                        <div className="knowledge_new_title">
                            Bài viết mới
                        </div>
                        <div className="knowledge_new_items_box">
                            <div className="knowledge_new_items">
                                {
                                    data.map((value, index) => {
                                        return (
                                            <div className='knowledge_new_content_box'>
                                                <div className="knowledge_new_content_box_box">
                                                    <div className="knowledge_new_img_box">
                                                        <img className='knowledge_new_img' src={value.image} alt={value.name} />
                                                    </div>
                                                    <div className="knowledge_new_content_title">{value.name}</div>
                                                    {/* <div className="knowledge_new_content_description">Trong đêm hội trăng rằm cùng sum họp gia đình bên tách trà ấm nóng, chuyện trò ríu rít. Nhất định phải ăn thêm một chiếc bánh cốm đậu xanh thơm hương nếp mới, mềm mịn và xanh mướt để tăng thêm phần ấm cúng.</div> */}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index