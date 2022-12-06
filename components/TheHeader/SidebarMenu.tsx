import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AiFillCloseCircle } from 'react-icons/ai'
import { Value } from 'sass'

type TSidebarMenu = {
  open: boolean;
  setOpen: Function;
}

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

function Index({ open, setOpen }: TSidebarMenu) {
  const [menu, setMenu] = useState(menuData)

  const router = useRouter()


  useEffect(() => {
    const asPath = router.asPath
    const arrPath = asPath.split("/")
    if (arrPath) {
      const menuDataNew = menuData.map((value) => {
        if (arrPath[1] === value.to.replace("/", "")) {
          return {
            ...value,
            isSelected: true,
          }
        }
        return value
      })
      setMenu(menuDataNew)
    }
  }, [router])

  const handleClickClose = () => {
    setOpen(!open)
  }

  return (
    <div className="sibar_menu_box">
      <div className="sibar_menu_box_close">
        <AiFillCloseCircle onClick={handleClickClose} className='sibar_menu_box_close_icon' size={35} />
      </div>
      {
        menu.map(value => {
          return (
            <div key={value.name} onClick={handleClickClose}>
              <Link href={value.to}>
                <div className={value.isSelected ? "sibar_menu_box_item sibar_menu_box_item_active" : "sibar_menu_box_item"} >
                  {value.name}
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Index