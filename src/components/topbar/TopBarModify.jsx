import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarStyle";
import { useNavigate } from "react-router";

export default function TopBarModify({ nameValid, idValid, onEdit }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Top>
      <button>
        <img src={back} alt='' onClick={handleBack} />
      </button>
      <button
        className={nameValid && idValid ? "active" : "btn-save2"}
        onClick={onEdit}
      >
        저장
      </button>
    </Top>
  );
}
