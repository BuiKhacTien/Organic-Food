import React from 'react'
import Link from 'next/link'
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
        <Link href="/">
          <div className="sibar_menu_box_item" onClick={handleClickClose} >
            Trang chủ
          </div>
        </Link>
        <Link href="/san-pham">
          <div className="sibar_menu_box_item" onClick={handleClickClose} >
            Sản phẩm
          </div>
        </Link>
        <Link href="/kien-thuc">
          <div className="sibar_menu_box_item" onClick={handleClickClose} >
            Kiến thức
          </div>
        </Link>
        <Link href="/tin-tuc">
          <div className="sibar_menu_box_item" onClick={handleClickClose} >
            Tin tức
          </div>
        </Link>
        <Link href="/lien-he">
          <div className="sibar_menu_box_item" onClick={handleClickClose} >
            Liên hệ
          </div>
        </Link>
    </div>
  )
}

export default Index