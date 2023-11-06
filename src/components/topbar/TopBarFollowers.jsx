import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { TopFollowers } from "./TopBarStyle";
import { useNavigate } from "react-router";

export default function TopBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <TopFollowers>
      <button onClick={handleBack}>
        <img src={back} alt='' />
      </button>
      <p>Followers</p>
    </TopFollowers>
  );
}
