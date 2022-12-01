import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Drawer from "../common/Drawer"
import SidebarMenu from "./SidebarMenu"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { BsSearch } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const imageLogo = require('../../public/images/logokhongnen.png');

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
		name: 'Công trình',
		isSelected: false,
		to: '/cong-trinh',
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

	//HeaderPC
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
				name: 'Công trình',
				isSelected: false,
				to: '/cong-trinh',
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
	const handleClickMenu = (id: Number) => {
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

	//HeaderMobile

	const [openSidebar, setOpenSidebar] = useState(false);

	const handleClickMenuIconMobile = () => {
		setOpenSidebar(!openSidebar)
	}

	//Search
	const [search, setSearch] = useState("")
	const [openSearch, setOpenSearch] = React.useState(false);
	const handleClickSearchIcon = () => setOpenSearch(true);
	const handleCloseSearchModal = () => setOpenSearch(false);

	const onSubmitSearch = (e: any) => {
		e.preventDefault()
		console.log(search);
	}

	const style = {
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'rgba(255, 255, 255, 0)',
		border: 'none',
	};

	return (
		<div className='the_header'>
			<div className="header_container">
				<div className="header_box_desktop">
					<div className="header_logo">
						<Link href="/">
							<img
								className='header_logo_image'
								src={imageLogo.default.src}
								alt='logo'
							/>
						</Link>
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
						<BsSearch onClick={handleClickSearchIcon} className='header_menu_desktop_item_search_icons' />
					</div>
				</div>
				<div className="header_box_mobile">
					<Drawer open={openSidebar} setOpen={setOpenSidebar} anchor="left">
						<SidebarMenu open={openSidebar} setOpen={setOpenSidebar} />
					</Drawer>
					<div className="menu_mobile_icon" onClick={handleClickMenuIconMobile}>
						<GiHamburgerMenu size={25} />
					</div>
					<div className="header_logo_mobile">
						<Link href="/">
							<img
								className='header_logo_mobile_image'
								src={imageLogo.default.src}
								alt='logo'
							/>
						</Link>
					</div>
					<div className="header_mobile_search">
						<BsSearch onClick={handleClickSearchIcon} size={22} className='header_mobile_search_icon' />
					</div>
				</div>
				<Modal
					open={openSearch}
					onClose={handleCloseSearchModal}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<div className={openSearch ? "input_search_box bottom" : "input_search_box"}>
							<form onSubmit={onSubmitSearch}>
								<input className="input_search_header" placeholder='Tìm kiếm...' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
							</form>
							<FaSearch onClick={onSubmitSearch} color="white" size={35} className='input_search_header_icon' />
						</div>
					</Box>
				</Modal>
			</div>
		</div>
	)
}

export default index