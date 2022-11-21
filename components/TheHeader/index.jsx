import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'


const menuData = [
    {
        id: 0,
        name: 'Trang chủ',
        isSelected: false,
        to: '/',
    },
    {
        id: 1,
        name: 'Giới thiệu',
        isSelected: false,
        to: '/gioi-thieu',
    },
    {
        id: 2,
        name: 'Sản phẩm',
        isSelected: false,
        to: '/san-pham',
    },
    {
        id: 3,
        name: 'Kiến thức',
        isSelected: false,
        to: '/kien-thuc',
    },
    {
        id: 4,
        name: 'Tin tức',
        isSelected: false,
        to: '/tin-tuc',
    },
    {
        id: 5,
        name: 'Liên hệ',
        isSelected: false,
        to: '/lien-he',
    },
]

function index() {
    const [menu, setMenu] = useState(
        [
            {
                id: 0,
                name: 'Trang chủ',
                isSelected: true,
                to: '/',
            },
            {
                id: 1,
                name: 'Giới thiệu',
                isSelected: false,
                to: '/gioi-thieu',
            },
            {
                id: 2,
                name: 'Sản phẩm',
                isSelected: false,
                to: '/san-pham',
            },
            {
                id: 3,
                name: 'Kiến thức',
                isSelected: false,
                to: '/kien-thuc',
            },
            {
                id: 4,
                name: 'Tin tức',
                isSelected: false,
                to: '/tin-tuc',
            },
            {
                id: 5,
                name: 'Liên hệ',
                isSelected: false,
                to: '/lien-he',
            },
        ]
    )
    const handleClickMenu = (id) => {
        const newMenu = menuData.map((value) => {
            if (value.id === id) {
                return {
                    ...value,
                    isSelected: !value.isSelected
                }
            }
            return value
        })
        setMenu(newMenu)
    }

    return (
        <div className='the_header'>
            <div className="header_container">
                <div className="header_box_desktop">
                    <div className="header_logo">
                        <img
                            className='header_logo_image'
                            src='https://iweb.tatthanh.com.vn/pic/3/blog/images/image(771).png'
                            alt='logo'
                        />
                    </div>
                    <div className="header_menu_desktop">
                        {
                            menu.map((value) => (
                                <Link href={value.to} key={value.name}>
                                    <div
                                        onClick={() => handleClickMenu(value.id)}
                                        className={value.isSelected ? 'header_menu_desktop_item header_menu_desktop_active' : 'header_menu_desktop_item'}
                                    >
                                        {value.name}
                                    </div>
                                </Link>
                            ))
                        }
                        <BsSearch size={22} className='header_menu_desktop_item_search_icons' />
                    </div>
                </div>
                <div className="header_box_mobile">
                    <div className="menu_mobile_icon">
                        <GiHamburgerMenu size={25}/>
                    </div>
                    <div className="header_logo_mobile">
                        <img
                            className='header_logo_mobile_image'
                            src='https://iweb.tatthanh.com.vn/pic/3/blog/images/image(771).png'
                            alt='logo'
                        />
                    </div>
                    <div className="header_mobile_search">
                        <BsSearch size={22} className='header_mobile_search_icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index