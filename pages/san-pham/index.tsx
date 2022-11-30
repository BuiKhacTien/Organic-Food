import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';

import Drawer from "../../components/common/Drawer"
import ProductCard from "../../components/common/ProductCard"
import Filters from "../../components/common/Filters"

import { IoFilterSharp } from "react-icons/io5"


import Accordion from "react-bootstrap/Accordion";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';


const data = [
	{
		id: 1,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 1",
		price: 600000,
	},
	{
		id: 2,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/5749ffd1a06d4cbd7e687444cfc1e79963fdad2f-300x300.jpg",
		name: "Dâu tây",
		price: 700000,
	},
	{
		id: 3,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/aquaculture-2-300x300.jpg",
		name: "Tôm sú",
		price: 800000,
	},
	{
		id: 4,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 4",
		price: 900000,
	},
	{
		id: 5,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 5",
		price: 1000000,
	},
	{
		id: 6,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 6",
		price: 1100000,
	},
	{
		id: 7,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 7",
		price: 1200000,
	},
	{
		id: 8,
		image: "https://mauweb.monamedia.net/huucomientrung/wp-content/uploads/2019/05/biowish-odor-swine-featured-image.png",
		name: "BBiOWiSH® MANURE & ODOR TREATMENT: SWINE 8",
		price: 1300000,
	},
]

function index() {


	function valuetext(value: number) {
		return `${value}°C`;
	}

	const router = useRouter();

	// const [open, setOpen] = useState(false);

	// const handleSetOpen = () => {
	//   setOpen(!open);
	// };

	const [sort, setSort] = useState("10");

	const handleChangeSort = (event: SelectChangeEvent) => {
		setSort(event.target.value as string);
	};


	//pagination
	const [pagination, setPagination] = useState({
		start: 0,
		end: 20,
	})
	const [page, setPage] = useState(1);
	const [countPage, setCountPage] = useState(10);

	const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
		setPagination({
			start: value * 20 - 20,
			end: value * 20,
		})
	};

	//filters mobile
	const [openFilters, setOpenFilters] = useState(false);

	const handleClickFilterIconMobile = () => {
		setOpenFilters(!openFilters)
	}


	return (
		<div>
            <Head>
                <title>Sản Phẩm</title>
            </Head>
			<div className="breadcrumb_box">
				<div className="breadcrumb_box_router_box">
					<div className="breadcrumb_box_router_prev" onClick={() => router.push("/")}>Trang chủ</div>
					<div className="breadcrumb_box_router_slash">/</div>
					<div className="breadcrumb_box_router_here">Sản phẩm</div>
				</div>
			</div>
			<div className='products_page_container'>
				<div className="products_page_box">
					<div className="products_page_filters_box">
						<Filters />
					</div>
					<div className="products_page_items_box">
						<div className="products_page_items_filter_sort">
							<div className="products_page_items_box_filters_mobile">
								<Drawer open={openFilters} setOpen={setOpenFilters} anchor="left">
									<div className="sidebar_filters_box">
										<Filters openFilters={openFilters} setOpenFilters={setOpenFilters}/>
									</div>
								</Drawer>
								<IoFilterSharp size={30} onClick={handleClickFilterIconMobile}/>
							</div>
							<div className="products_page_items_box_sort">
								<Box sx={{ minWidth: 200 }}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Sắp xếp theo</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={sort}
											label="Sắp xếp theo"
											onChange={handleChangeSort}
										>
											<MenuItem value={10}>Giá tăng dần</MenuItem>
											<MenuItem value={20}>Giá giảm dần</MenuItem>
											<MenuItem value={30}>A - Z</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</div>
						</div>
						<div className="products_page_items_container">
							{
								data.map((value) => {
									return (
										<div key={value.id} className="products_page_items col-lg-3 col-md-4 col-sm-4 col-xs-4 col-6">
											<ProductCard data={value} />
										</div>
									)
								})
							}
							<div className="products_page_items_pagination">
								<Pagination count={countPage} page={page} onChange={handleChangePagination} color="secondary" variant="outlined" shape="rounded" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index