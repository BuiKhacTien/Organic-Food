import React, { useState, useEffect } from 'react'
import Accordion from "react-bootstrap/Accordion";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { AiFillCloseCircle } from 'react-icons/ai'



function Index({openFilters, setOpenFilters}: any) {

    // const [value, setValue] = useState<number[]>([0, 10000]);

    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     setValue(newValue as number[]);
    // };

    const handleClickCloseFilters = () => {
        setOpenFilters(!openFilters)
    }

    return (
        <div className='products_page_filters_box_container'>
            <div className="sibar_menu_box_close_filters">
                <AiFillCloseCircle onClick={handleClickCloseFilters} className='sibar_menu_box_close_filters_icon' size={35} />
            </div>
            <div className="products_page_filters_box_category">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="products_page_filters_box_category_title">
                                DANH MỤC SẢN PHẨM
                            </div>
                        </Accordion.Header>
                        <Accordion.Body style={{ padding: 0 }}>
                            <div className="products_page_filters_box_category_item_box">
                                <div className='products_page_filters_box_category_item'>Phân bón</div>
                                <div className='products_page_filters_box_category_item filters_box_category_gray'>Môi trường</div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* <div className="products_page_filters_box_range">
                <div className="products_page_filters_box_range_title">LỌC THEO GIÁ</div>
                <Box sx={{ width: "100%", padding: 4 }}>
                    <Slider
                        value={value}
                        onChange={handleChange}
                    />
                </Box>
                <div className="products_page_filters_box_range_submit">
                    ÁP DỤNG
                </div>
            </div> */}
        </div>
    )
}

export default Index