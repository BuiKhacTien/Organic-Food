import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import TProduct from "../../../type/TProduct"

type Props = {
  data: TProduct,
}

function Index({data}: Props) {

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className='product_card_box'>
      <Link href="/san-pham/huu-co-trun-que">
        <div className="product_card_box_content">
          <div className="product_card_img_box">
            <img className='product_card_img' src={data.image} alt={data.name} />
          </div>
          <div className="product_card_name">{data.name}</div>
          {/* <div className="product_card_price">{numberWithCommas(data.price)+" ₫"}</div> */}
        </div>
      </Link>
    </div>
  )
}

export default Index