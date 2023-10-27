import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarStyle";
// import { useRecoilState } from "recoil";

export default function TopBarSave({ onSave, disabled }) {
  return (
    <Top>
      <button>
        <img src={back} alt='' />
      </button>
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
