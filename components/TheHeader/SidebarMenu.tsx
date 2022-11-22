import React from 'react'

import { AiFillCloseCircle } from 'react-icons/ai'

type TSidebarMenu = {
  open: boolean;
  setOpen: Function;
}

function Index({open, setOpen}: TSidebarMenu) {

  const handleClickClose = () => {
    setOpen(!open)
  }

  return (
    <div className="sibar_menu_box">
        <div className="sibar_menu_box_close">
          <AiFillCloseCircle onClick={handleClickClose} className='sibar_menu_box_close_icon' size={35}/>
        </div>
        <div className="sibar_menu_box_item">
          Trang chủ
        </div>
        <div className="sibar_menu_box_item">
          Giới thiệu
        </div>
        <div className="sibar_menu_box_item">
          Sản phẩm
        </div>
        <div className="sibar_menu_box_item">
          Kiến thức
        </div>
        <div className="sibar_menu_box_item">
          Tin tức
        </div>
        <div className="sibar_menu_box_item">
          Liên hệ
        </div>
    </div>
  )
}

export default Index