import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import TProduct from "../../../type/TProduct"

type Props = {
  data: {
    id: number,
    image: string,
    name: string,
    quantity: number,
  },
}

function Index({data}: Props) {

  return (
    <div className='sphere_of_activity_card_box'>
      <div className="sphere_of_activity_img_box">
        <img className='sphere_of_activity_card_img' src={data.image} alt={data.name} />
        <div className="sphere_of_activity_card_content">
          <div className="sphere_of_activity_card_name">{data.name}</div>
          <div className="sphere_of_activity_card_quantity">{data.quantity+ " Sản Phẩm"}</div>
        </div>
      </div>
    </div>
  )
}

export default Index