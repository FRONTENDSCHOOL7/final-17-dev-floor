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

export const postGet = async (token, skip) => {
  try {
    const res = await axios.get(url + `/?limit=10&skip=${skip}`, {
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

export const postUserApi = async (accountName, token, skip) => {
  try {
    const res = await axios.get(
      url + `/${accountName}/userpost/?limit=20&skip=${skip}`,
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
// 게시글 삭제
export const postDel = async (post_id,token) => {
  try {
    const res = await axios.delete(url+`/${post_id}`, {
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
// 댓글 작성
export const postCommentApi = async (commentContent,token) => {
  try {
    const res = await axios.post(
      url + `/6543be0db2cb205663bf3ce1/comments`,
      {
        comment: {
          content: commentContent,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    alert("댓글 업로드 에러");
    return [];
  }
};
// 댓글 리스트
export const commentListApi = async (token,skip) => {
  try {
    const res = await axios.get(url+`/6543be0db2cb205663bf3ce1/comments/?limit=10&skip=${skip}`,{
      headers: {
        Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
      }
    })
    return res.data
  } catch (error) {
    console.error("댓글 불러오기 실패")
  }
}
// 댓글 삭제
export const commentDelApi = async(commentId,token) => {
  try {
    const res = await axios.delete(url+`/6543be0db2cb205663bf3ce1/comments/${commentId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
      }
    })
    console.log(res.data)

    return res.data
  } catch (error) {
    console.error("댓글 삭제 실패")
  }
}