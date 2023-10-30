import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarStyle";
import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";

export default function TopBarSave({ onSave, disabled }) {
  return (
    <Top>
      <Link to='/myprofile'>
      <button>
        <img src={back} alt='' />
      </button>
      </Link>
      <button
        className={`btn-save ${disabled ? "disabled" : ""}`}
        onClick={onSave}
        disabled={disabled}
      >
        저장
      </button>
    </Top>
  );
}
