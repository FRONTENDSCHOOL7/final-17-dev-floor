import React from "react";
import { Sect2, Sale } from "./ProductStyle";

export default function Product() {
  return (
    <Sect2>
      <h2>판매중인 상품</h2>
      <Sale>
        <div>
          <img src="https://via.placeholder.com/140x90" alt="" />
          <p>애월읍 노지 감귤</p>
          <span>35,000원</span>
        </div>
        <div>
          <img src="https://via.placeholder.com/140x90" alt="" />
          <p>애월읍 노지 감귤</p>
          <span>35,000원</span>
        </div>
        <div>
          <img src="https://via.placeholder.com/140x90" alt="" />
          <p>애월읍 노지 감귤</p>
          <span>35,000원</span>
        </div>
      </Sale>
    </Sect2>
  );
}
