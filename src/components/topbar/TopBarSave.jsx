import React from "react";
import back from "../../assets/images/icon-arrow-left.png";
import { Top } from "./TopBarStyle";
import { useRecoilState } from "recoil";
import { inputState } from "../../state/ModifyAtom";

export default function TopBarSave({ nameValid, idValid }) {
  // const [inputProvided, setInputProvided] = useRecoilState(inputState);

  // const isSaveButtonActive = nameValid && idValid && inputProvided;
  return (
    <Top>
      <button>
        <img src={back} alt='' />
      </button>
      <button className={nameValid && idValid ? "active" : "btn-save"}>
        저장
      </button>
    </Top>
  );
}
