import { ArrowUpward, ExpandLess, Language } from "@mui/icons-material";
import React from "react";
import FooterModal from "./FooterModal";

export default function Footer() {
  return (
    <footer className="flex justify-between px-8 bg-white border-t text-sm fixed left-0 right-0 z-10 bottom-0 py-2">
      <div className="flex flex-wrap gap-2">
        <span className="hover:underline cursor-pointer">© 2023 Airbnb, Inc. </span>·<span className="hover:underline cursor-pointer"> Terms </span>·
        <span className="hover:underline cursor-pointer"> Sitemap </span>·<span className="hover:underline cursor-pointer"> Privacy </span>·
        <span className="flex flex-nowrap items-center gap-2 hover:underline cursor-pointer">
          Your Privacy Choices
          <svg width="26" height="12" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="25"
              height="11"
              rx="5.5"
              fill="#fff"
            ></rect>
            <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
            <path
              d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
              stroke="#06F"
              stroke-linecap="round"
            ></path>
            <path
              d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
              stroke="#fff"
              stroke-linecap="round"
            ></path>
            <rect
              x="0.5"
              y="0.5"
              width="25"
              height="11"
              rx="5.5"
              stroke="#06F"
            ></rect>
          </svg>
        </span>
        ·<span className="hover:underline cursor-pointer"> Destinations </span>
      </div>
      <div className="flex gap-2 flex-shrink">
        <span className="hover:underline cursor-pointer"><Language />{ } English(US)</span>
        <span className="hover:underline cursor-pointer">$ USD</span>
        <span className="hover:underline cursor-pointer">Support & resources <ExpandLess fontSize="small"/></span>
      </div>
      {/* <FooterModal/> */}
    </footer>
  );
}
