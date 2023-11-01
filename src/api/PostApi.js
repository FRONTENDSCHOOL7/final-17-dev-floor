import axios from "axios";
import { tokenState } from "../state/AuthAtom";
import { useRecoilValue } from "recoil";

const url = "https://api.mandarin.weniv.co.kr/post";
const url2 = "https://api.mandarin.weniv.co.kr/image/uploadfile";

export const postPostApi = async (content, image, token) => {
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
export const postUserApi = async (accountName, token, skip) => {
  try {
    const res = await axios.get(
      url + `/${accountName}/userpost/?limit=6&skip=${skip}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    alert("불러오기 실패");
  }
};
export const postDel = async (postId, token) => {
  try {
    const res = await axios.delete(url, {
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
// 댓글
export const postCommentApi = async (comment, token) => {
  try {
    const res = await axios.post(
      `https://api.mandarin.weniv.co.kr/post/653fcb1fb2cb205663934f1e/comments`,
      {
        comment: { content: comment },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    alert("댓글 업로드 에러");
  }
};
