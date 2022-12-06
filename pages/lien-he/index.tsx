import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ImLocation2 } from "react-icons/im"
import { BsFillTelephoneFill, BsSkype, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { BiSend } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { TbReceiptTax } from "react-icons/tb"


function index() {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Liên Hệ</title>
      </Head>
      <div className="breadcrumb_box">
				<div className="breadcrumb_box_router_box">
					<div className="breadcrumb_box_router_prev" onClick={() => router.push("/")}>Trang chủ</div>
					<div className="breadcrumb_box_router_slash">/</div>
					<div className="breadcrumb_box_router_here">Liên hệ</div>
				</div>
			</div>
      <div className='contact_container'>
        <div className="contact_container_box">
          <div className="contact_maps_box col-lg-6 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.678753820586!2d106.72782230180924!3d10.884788448101922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d80351548817%3A0xd6e440e05b1695c!2zQ8O0bmcgVHkgVE5ISCBUaMawxqFuZyBN4bqhaSBE4buLY2ggVuG7pSBL4bu5IFRodeG6rXQgTcO0aSBUcsaw4budbmcgVCZU!5e0!3m2!1svi!2s!4v1669818207136!5m2!1svi!2s" className='contact_maps' style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact_form_container col-lg-6 col-12">
            <div className="contact_infomation">
              <div className="contact_infomation_row">
                <div className="contact_infomation_row_icon"><ImLocation2 /></div>
                <div className="contact_infomation_row_text">
                  <div><b>Trụ sở:</b> 1004/6A, Tỉnh Lộ 43, KP1, P.Bình Chiểu, Q.Thủ Đức, TP.Hồ Chí Minh.</div>
                  <div style={{ marginTop: 10 }}><b>Xưởng SX:</b> 11A đường Phú Mỹ, Phú Hòa Đông, Củ Chi, TP.Hồ Chí Minh.</div>
                  <div style={{ marginTop: 10 }}><b>VPDD:</b> QL1A phường Hoài Thanh Tây, Thị Xã Hoài Nhơn, Tỉnh Bình Định.</div>
                </div>
              </div>
              <div className="contact_infomation_row">
                <div className="contact_infomation_row_icon"><BsFillTelephoneFill /></div>
                <div>
                  <div><a className="contact_infomation_row_text" href="tel:0886391618">0886 391 618</a></div>
                  <div><a className="contact_infomation_row_text" href="tel:0979637618">0979 637 618</a></div>
                  <div><a className="contact_infomation_row_text" href="tel:0944171689">0944 171 689</a></div>
                </div>
              </div>
              <div className="contact_infomation_row">
                <div className="contact_infomation_row_icon"><TbReceiptTax /></div>
                <div className="contact_infomation_row_text"><b>MST:</b> 0312396815</div>
                {/* <a className="contact_infomation_row_text" href="mailto:email@gmail.com">email@gmail.com</a> */}
              </div>
              {/* <div className="contact_infomation_row">
              <div className="contact_infomation_row_icon"><BsSkype/></div>
              <a className="contact_infomation_row_text" href="skype:skypename?chat">skype name</a>
            </div> */}
            </div>
            <div className="contact_title">LIÊN HỆ VỚI CHÚNG TÔI</div>
            <div className="contact_form">
              <div className="contact_form_row">
                <input type="text" placeholder='Họ và tên' className='contact_form_row_input' />
                <input type="text" placeholder='Email' className='contact_form_row_input' />
              </div>
              <div className="contact_form_row">
                <input type="text" placeholder='Số điện thoại' className='contact_form_row_input' />
                <input type="text" placeholder='Địa chỉ' className='contact_form_row_input' />
              </div>
              <div className="contact_form_row">
                <textarea className='contact_form_row_input_area' placeholder='Lời nhắn' rows={4} cols={100} />
              </div>
              <div className="contact_form_row">
                <div className="contact_form_row_submit">Gửi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index