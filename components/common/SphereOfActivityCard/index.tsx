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

function Index({ data }: Props) {

  return (
    <div className='sphere_of_activity_card_box'>
      <div className="sphere_of_activity_box">
        <div className="sphere_of_activity_card_content">
          <div className="sphere_of_activity_card_name_box">
            <div className="sphere_of_activity_card_name">
              <div className="sphere_of_activity_card_name_text">
                {data.name}

              </div>
            </div>
          </div>
          {/* <div className="sphere_of_activity_card_quantity">{data.quantity}</div> */}
        </div>
      </div>
    </div>
  )
}

export default Index