import React from "react";
import TopbarLg  from "./TopbarLg";
import Filter from "./Filter";
import TopBarSm from "./TopBarSm";

export default function Header() {
    return (
      <div className="fixed left-0 right-0 top-0 z-20 bg-white">
        <TopbarLg />
        <TopBarSm />
        <Filter />
      </div>
    );
}
