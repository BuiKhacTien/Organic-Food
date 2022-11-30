import React from 'react';
import Slider from 'react-slick'

import SphereOfActivityCard from "../common/SphereOfActivityCard"

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GrPrevious, GrNext } from "react-icons/gr";



const data = [
    {
        id: 1,
        image: "http://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/iStock_82470601_XXLARGE2-compressed-300x300.jpg",
        name: "Nghiên cứu và phát triển men vi sinh xử lý nước thải",
        quantity: 8,
    },
    {
        id: 2,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/environment-agriculture-300x300.jpg",
        name: "Nghiên cứu và phát triển chế phẩm hữu cơ sinh học cho cây trồng",
        quantity: 9,
    },
    {
        id: 3,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/AGRICULTURA-4.0-1-300x300-1.jpg",
        name: "Sản xuất men vi sinh xử lý nước thải",
        quantity: 2,
    },
    {
        id: 4,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/180109-dog-listening-mn-1215_86fd9caebf17bddbf5310597b860cef9-compressed-300x300.jpg",
        name: "Sản xuất chế phẩm hữu cơ sinh học cho cây trồng",
        quantity: 5,
    },
    {
        id: 5,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/5749ffd1a06d4cbd7e687444cfc1e79963fdad2f-300x300.jpg",
        name: "Tìm đối tác , đại lý phân phối men vi sinh xử lý nước thải, bùn vi sinh nước thải",
        quantity: 7,
    },
    {
        id: 6,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Tìm đối tác , đại lý phân phối chế phẩm hữu cơ sinh học cho cây trồng",
        quantity: 4,
    },
    {
        id: 7,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Tư vấn thiết kế các công trình xử lý môi trường",
        quantity: 4,
    },
    {
        id: 8,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Nhận lập hồ sơ báo cáo giám sát môi trường, cam kết bảo vệ môi trường",
        quantity: 4,
    },
    {
        id: 14,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "xin phép xả thải, xin phép khai thác nước ngầm",
        quantity: 4,
    },
    {
        id: 9,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Nâng cấp sửa chữa và bảo trì hệ thống xử lý nước thải, nước sạch",
        quantity: 4,
    },
    {
        id: 10,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Dịch vụ cho thuê hệ thống xử lý nước thải làng nghề công suất từ  5 -15m3/ngày đêm",
        quantity: 4,
    },
    {
        id: 11,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Dịch vụ đo kiểm môi trường lao động",
        quantity: 4,
    },
    {
        id: 12,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Nhận TEST nhanh chỉ tiêu COD nước thải",
        quantity: 4,
    },
    {
        id: 13,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Dịch vụ in ấn thiết kế quảng cáo",
        quantity: 4,
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
            breakpoint: 1150,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
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
    return (
        <div className='exclusive_products_container'>
            <div className="exclusive_products_title_box">
                <div className="title_product_line"></div>
                <div className="exclusive_products_title">LĨNH VỰC HOẠT ĐỘNG</div>
            </div>
            <div className="slider_box" style={{padding: "0 10px"}}>
                <Slider {...Settings}>
                    {
                        data.map((value) => {
                            return (
                                <div key={value.id}>
                                    <SphereOfActivityCard data={value} />
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