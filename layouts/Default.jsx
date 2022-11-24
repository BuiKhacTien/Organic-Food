import React from "react";
import Image from 'next/image';

import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

import { ToastContainer } from "react-toastify";
import { GrLinkTop } from "react-icons/gr"

const Default = ({ children }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="layout_default">
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
      <div  onClick={scrollToTop} className="scroll_to_top">
        <GrLinkTop className="scroll_to_top_icon"/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Default;
