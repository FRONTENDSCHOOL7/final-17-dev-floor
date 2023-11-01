import React from "react";
import { Body } from "./ErrorStyle";
import error from "../../assets/images/icon-404.png";
import { useNavigate } from "react-router";

export default function Error() {
  const navigate = useNavigate();

  const handleBefore = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <Body>
      <img src={error} alt='' />
      <p>페이지를 찾을 수 없습니다. :(</p>
      <button onClick={handleBefore}>이전 페이지</button>
    </Body>
  );
}
