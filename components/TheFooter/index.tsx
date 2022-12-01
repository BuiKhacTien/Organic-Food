import React from 'react'
import { ImLocation2 } from "react-icons/im"
import { BsFillTelephoneFill, BsSkype, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { BiSend } from "react-icons/bi"
import { TbReceiptTax } from "react-icons/tb"
import { FaFacebookF } from "react-icons/fa"
import Link from 'next/link'


function index() {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_box">
          <div className="footer_box_item">
            <div className="footer_infomation col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
              <div className="footer_title">
                LIÊN HỆ
              </div>
              <div className="footer_infomation_row">
                <div className="footer_infomation_row_icon"><ImLocation2 size={18} color="white"/></div>
                <div className="footer_infomation_row_text">
                  <div className="">Trụ sở: 1004/6A, Tỉnh Lộ 43, KP1, P.Bình Chiểu, Q.Thủ Đức, TP.Hồ Chí Minh.</div>  
                  <div className="">Xưởng SX: 11A đường Phú Mỹ, Phú Hòa Đông, Củ Chi, TP.Hồ Chí Minh.</div>  
                  <div className="">VPDD: QL1A phường Hoài Thanh Tây, Thị Xã Hoài Nhơn, Tỉnh Bình Định.</div>  
                </div>
              </div>
              <div className="footer_infomation_row">
                <div className="footer_infomation_row_icon"><BsFillTelephoneFill size={18} color="white"/></div>
                <div>
                  <div><a className="footer_infomation_row_text" href="tel:0886391618">0886 391 618</a></div>
                  <div><a className="footer_infomation_row_text" href="tel:0979637618">0979 637 618</a></div>
                  <div><a className="footer_infomation_row_text" href="tel:0944171689">0944 171 689</a></div>
                </div>
              </div>
              <div className="footer_infomation_row">
                <div className="footer_infomation_row_icon"><TbReceiptTax size={18} color="white"/></div>
                <div className="footer_infomation_row_text">MST: 0312396815</div>
                {/* <a className="footer_infomation_row_text" href="mailto:email@gmail.com">email@gmail.com</a> */}
              </div>
              {/* <div className="footer_infomation_row">
                <div className="footer_infomation_row_icon"><BsSkype size={18} color="white"/></div>
                <a className="footer_infomation_row_text" href="skype:skypename?chat">skype name</a>
              </div> */}
            </div>
            <div className="footer_product col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
              <div className="footer_title">SẢN PHẨM</div>
              <div className="footer_product_text">Thực phẩm</div>
              <div className="footer_product_text">Thủy sản</div>
              <div className="footer_product_text">Nông nghiệp</div>
              <div className="footer_product_text">Chăn nuôi</div>
              <div className="footer_product_text">Môi trường</div>
            </div>
            <div className="footer_category col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
              <div className="footer_title">DANH MỤC</div>
              <Link href="/">
                <div className="footer_category_text">Trang chủ</div>
              </Link>
              <Link href="/gioi-thieu">
                <div className="footer_category_text">Giới thiệu</div>
              </Link>
              <Link href="/san-pham">
                <div className="footer_category_text">Sản phẩm</div>
              </Link>
              <Link href="/cong-trinh">
                <div className="footer_category_text">Công trình</div>
              </Link>
              <Link href="/tin-tuc">
                <div className="footer_category_text">Tin tức</div>
              </Link>
              <Link href="/lien-he">
                <div className="footer_category_text">Liên hệ</div>
              </Link>
            </div>
            <div className="footer_subs col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
              <div className="footer_title">ĐĂNG KÝ</div>
              <div className="footer_subs_text">Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</div>
              <div className="footer_subs_input_box">
                <input className="footer_subs_input" type="text" placeholder='Email ...'></input>
                <BiSend size={35} color="green" className='footer_subs_input_icon'/>
              </div>
              <div className="footer_subs_social_media_icon_box">
                <FaFacebookF className='footer_subs_social_media_icon'/>
                <BsInstagram className='footer_subs_social_media_icon'/>
                <BsTwitter className='footer_subs_social_media_icon'/>
                <BsYoutube className='footer_subs_social_media_icon'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_license">
        © Bản quyền thuộc về Môi Trường T & T. Thiết kế website 
      <a href='https://vietsoft.info/'> VIETSOFT</a>
      </div>
    </div>
  )
}

export default index