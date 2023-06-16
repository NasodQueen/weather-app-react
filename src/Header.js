import React from "react";

import HeaderNotice from "./HeaderNotice";
import HeaderData from "./HeaderData";
import HeaderIcon from "./HeaderIcon";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <HeaderNotice />
      <HeaderData />
      <HeaderIcon />
    </div>
  );
}
