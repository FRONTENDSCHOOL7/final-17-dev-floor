import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarSaveStyle";
import { Link, useNavigate } from "react-router-dom";

export default function TopBarSave(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Top>
      <button onClick={handleBack}>
        <img src={back} alt='' />
      </button>
      <button className='btn-save' onClick={props.onSave}>
        {JSON.stringify(props.isEdit) !== "[]" ? "수정" : "저장"}
      </button>
    </Top>
  );
}
