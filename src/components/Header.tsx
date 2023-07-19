import React from "react";
import Navbar from "./TopbarLg";
import Filter from "./Filter";

export default function Header() {
    return <div className="sticky top-0 z-10 bg-white">
      <Navbar />
        <Filter/>
  </div>;
}
