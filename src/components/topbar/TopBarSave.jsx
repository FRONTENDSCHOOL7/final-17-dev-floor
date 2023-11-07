import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarSaveStyle";
import { Link, useNavigate } from "react-router-dom";

export default function TopBarSave({ onSave, disabled }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Top>
      <Link to='/myprofile'>
        <button onClick={handleBack}>
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
