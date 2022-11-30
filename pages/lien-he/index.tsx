import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { ImLocation2 } from "react-icons/im"
import { BsFillTelephoneFill, BsSkype, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { BiSend } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { TbReceiptTax } from "react-icons/tb"

function index() {
    
    return (
        <div className='contact_container'>
            <Head>
                <title>Liên Hệ</title>
            </Head>
            <div className="contact_infomation">
            <div className="contact_infomation_row">
              <div className="contact_infomation_row_icon"><ImLocation2/></div>
              <div className="contact_infomation_row_text">
                <div className="">Trụ sở: 1004/6A, Tỉnh Lộ 43, KP1, P.Bình Chiểu, Q.Thủ Đức, TP.Hồ Chí Minh.</div>  
                <div className="">Xưởng SX: 11A đường Phú Mỹ, Phú Hòa Đông, Củ Chi, TP.Hồ Chí Minh.</div>  
                <div className="">VPDD: QL1A phường Hoài Thanh Tây, Thị Xã Hoài Nhơn, Tỉnh Bình Định.</div>  
              </div>
            </div>
            <div className="contact_infomation_row">
              <div className="contact_infomation_row_icon"><BsFillTelephoneFill/></div>
              <div>
                <div><a className="contact_infomation_row_text" href="tel:0886391618">0886 391 618</a></div>
                <div><a className="contact_infomation_row_text" href="tel:0979637618">0979 637 618</a></div>
                <div><a className="contact_infomation_row_text" href="tel:0944171689">0944 171 689</a></div>
              </div>
            </div>
            <div className="contact_infomation_row">
              <div className="contact_infomation_row_icon"><TbReceiptTax/></div>
              <div className="contact_infomation_row_text">MST: 0312396815</div>
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
                    <input type="text" placeholder='Họ và tên' className='contact_form_row_input'/>
                    <input type="text" placeholder='Email' className='contact_form_row_input'/>
                </div>
                <div className="contact_form_row">
                    <input type="text" placeholder='Số điện thoại' className='contact_form_row_input'/>
                    <input type="text" placeholder='Địa chỉ' className='contact_form_row_input'/>
                </div>
                <div className="contact_form_row">
                    <textarea className='contact_form_row_input_area' placeholder='Lời nhắn' rows={4} cols={100} />
                </div>
                <div className="contact_form_row">
                    <div className="contact_form_row_submit">Gửi</div>
                </div>
            </div>
        </div>
    )
}

export default index