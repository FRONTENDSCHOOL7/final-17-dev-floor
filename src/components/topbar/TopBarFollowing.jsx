import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { TopFollowers } from "./TopBarStyle";

export default function TopBarFollowers() {
  return (
    <TopFollowers>
      <button>
        <img src={back} alt='' />
      </button>
      <h2>Following</h2>
    </TopFollowers>
  );
}
