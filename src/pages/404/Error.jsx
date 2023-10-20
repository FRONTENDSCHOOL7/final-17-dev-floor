import React from "react";
import { Body } from "./ErrorStyle";
import error from "../../assets/images/icon-404.png";

export default function Error() {
  return (
    <Body>
      <img src={error} alt="" />
      <p>페이지를 찾을 수 없습니다. :(</p>
      <button>이전 페이지</button>
    </Body>
  );
}
