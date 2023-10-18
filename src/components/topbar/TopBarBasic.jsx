import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import more from "../../assets/images/s-icon-more-vertical.png";
import { Top } from "./TopBarStyle";

export default function TopBar() {
  return (
    <Top>
      <button>
        <img src={back} alt="" />
      </button>
      <button>
        <img src={more} alt="" />
      </button>
    </Top>
  );
}
