import React from 'react';
import Slider from 'react-slick'

import SphereOfActivityCard from "../common/SphereOfActivityCard"

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GrPrevious, GrNext } from "react-icons/gr";

const data = [
    {
        id: 1,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/iStock_82470601_XXLARGE2-compressed-300x300.jpg",
        name: "Chăn nuôi",
        quantity: 8,
    },
    {
        id: 2,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/environment-agriculture-300x300.jpg",
        name: "Môi trường",
        quantity: 9,
    },
    {
        id: 3,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/AGRICULTURA-4.0-1-300x300-1.jpg",
        name: "Nông nghiệp",
        quantity: 2,
    },
    {
        id: 4,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/180109-dog-listening-mn-1215_86fd9caebf17bddbf5310597b860cef9-compressed-300x300.jpg",
        name: "Thú Cưng",
        quantity: 5,
    },
    {
        id: 5,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/5749ffd1a06d4cbd7e687444cfc1e79963fdad2f-300x300.jpg",
        name: "Thực Phẩm",
        quantity: 7,
    },
    {
        id: 6,
        image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
        name: "Thủy Sản",
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
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
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
                <div className="exclusive_products_title">LĨNH VỰC HOẠT ĐỘNG</div>
            </div>
            <div className="slider_box">
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