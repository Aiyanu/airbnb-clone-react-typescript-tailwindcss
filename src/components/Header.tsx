import React from "react";
import TopbarLg  from "./TopbarLg";
import Filter from "./Filter";
import TopBarSm from "./TopBarSm";

export default function Header() {
    return (
      <div className="sticky top-0 z-10 bg-white">
        <TopbarLg />
        <TopBarSm />
        <Filter />
      </div>
    );
}
