import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarSaveStyle";
import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";

export default function TopBarSave({ onSave, disabled }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/myprofile");
  };
  return (
    <Top>
      <Link to='/myprofile'>
        <button>
          <img src={back} alt='' onClick={handleBack} />
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
