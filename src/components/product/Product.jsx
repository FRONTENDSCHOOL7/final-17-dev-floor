import React, { useEffect } from "react";
import { Sect2, Sale } from "./ProductStyle";
import { useRecoilValue, useRecoilState } from "recoil";
import { accountnameState, productState } from "../../state/ProductAtom";
import { productListApi } from "../../api/ProductApi";
import { tokenState } from "../../state/AuthAtom";

export default function Product() {
  const accountName = useRecoilValue(accountnameState);
  const [products, setProducts] = useRecoilState(productState);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    const productList = async () => {
      // 상품 등록 api 요청
      try {
        const result = await productListApi(accountName, token);
        setProducts(result.product);
        console.log(result.product.itemName);
        console.log(result.price);
        console.log(result.itemImage);
        console.log(products);
      } catch (error) {
        console.log("실패했습니다");
      }
    };
    productList();
  }, []);

  return (
    <Sect2>
      <h2>판매중인 상품</h2>
      <Sale>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.itemImage} alt='' />
            <p>{product.itemName}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </Sale>
    </Sect2>
  );
}
