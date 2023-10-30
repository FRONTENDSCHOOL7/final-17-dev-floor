import axios from "axios";
import { tokenState } from "../state/AuthAtom";
import { useRecoilValue } from "recoil";

const url = "https://api.mandarin.weniv.co.kr/post";
const url2 = "https://api.mandarin.weniv.co.kr/image/uploadfile";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";

export const postPostApi = async (content, image) => {
  const Post = {
    post: {
      content: content,
      image: image,
    },
  };
  try {
    const res = await axios.post(url, Post, {
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
export const postUserApi = async (accountName) => {
  try {
    const res = await axios.get(url + accountName, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("불러오기 실패");
  }
};
export const postDel = async (postId, token) => {
  try {
    const res = await axios.delete(url+`/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("삭제 실패");
  }
};
