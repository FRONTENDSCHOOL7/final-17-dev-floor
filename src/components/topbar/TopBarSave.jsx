import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarSaveStyle";
import { Link, useNavigate } from "react-router-dom";

export default function TopBarSave({ isEdit, onSave, disabled }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Top>
      <button onClick={handleBack}>
        <img src={back} alt='' />
      </button>
      <button
        className={`btn-save ${disabled ? "disabled" : ""}`}
        onClick={onSave}
        disabled={disabled}
      >
        {JSON.stringify(isEdit) !== "[]" ? "수정" : "저장"}
      </button>
    </Top>
  );
}
