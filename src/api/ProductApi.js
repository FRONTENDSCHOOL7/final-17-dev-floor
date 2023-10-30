import axios from "axios";

const url = "https://api.mandarin.weniv.co.kr/product";
const url2 = "https://api.mandarin.weniv.co.kr/image/uploadfile";


export const productApi = async (itemName, price, link, itemImage) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";

  const productData = {
		product:{
				itemName: itemName,
				price: price,//1원 이상
				link: link,
				itemImage: itemImage,
}
  };
  try {
    const res = await axios.post(url, productData, {
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
    },
    });
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};

export const imageApi = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const res = await axios.post(url2, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};