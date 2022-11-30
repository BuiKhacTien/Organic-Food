import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import TProduct from "../../../type/TProduct"

type Props = {
  data: {
    id: number,
    image: string,
    name: string,
    company: string,
    time: string,
  },
}

function Index({data}: Props) {

  return (
    <div className='posts_card_box'>
      <div className="posts_card_box_content">
        <div className="posts_card_img_box">
          <img className='posts_card_img' src={data.image} alt={data.name} />
        </div>
        <div className="posts_card_name">{data.name}</div>
        <div className="posts_card_time">{data.time}</div>
        <div className="posts_card_line"></div>
        <div className="posts_card_description">{data.company}</div>
      </div>
    </div>
  )
}

export default Index