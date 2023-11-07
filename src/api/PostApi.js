import axios from "axios";
import { tokenState } from "../state/AuthAtom";
import { useRecoilValue } from "recoil";

const url = "https://api.mandarin.weniv.co.kr/post";
const url2 = "https://api.mandarin.weniv.co.kr/image/uploadfiles";

// 게시글 등록
export const postPostApi = async (content, image, token) => {
  const getPost = {
    post: {
      content: content,
      image: image,
    },
  };
  try {
    const res = await axios.post(url, getPost, {
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

// 게시글 수정
export const postCorrection = async (postId, content, image, token) => {
  const putPost = {
    post: {
      content: content,
      image: image,
    },
  };
  try {
    const res = await axios.put(url + `/${postId}`, putPost, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log("실패", error);
    alert("업로드 실패");
  }
};

// 이미지
export const imageApi = async (files) => {
  const formData = new FormData();
  if (files.length >= 1) {
    for (let i = 0; i < files.length; i++) {
      console.log("콘솔창확인", files[i]);
      formData.append("image", files[i]);
    }
  } else {
    formData.append("image", files);
  }
  try {
    const res = await axios.post(url2, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    alert("업로드 실패");
  }
};

// 팔로잉 게시글 목록
export const postGet = async (token, skip) => {
  try {
    const res = await axios.get(url + `/feed/?limit=10&skip=${skip}`, {
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

// 해당 유저 게시글
export const postDetail = async (post_id, token) => {
  try {
    const res = await axios.get(url + `/${post_id}`, {
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

// 해당 유저 게시글 목록
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
export const postDel = async (post_id, token) => {
  try {
    const res = await axios.delete(url + `/${post_id}`, {
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
export const postCommentApi = async (postId, commentContent, token) => {
  try {
    const res = await axios.post(
      url + `/${postId}/comments`,
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
export const commentListApi = async (postId, token, skip) => {
  try {
    const res = await axios.get(
      url + `/${postId}/comments/?limit=10&skip=${skip}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("댓글 불러오기 실패");
  }
};
// 댓글 삭제
export const commentDelApi = async (postId, commentId, token) => {
  try {
    const res = await axios.delete(url + `/${postId}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.error("댓글 삭제 실패");
  }
};

// 6.1 좋아요

export const likeApi = async (postId, token) => {
  try {
    const res = await axios.post(
      url + `/${postId}/heart`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.error("좋아요 실패");
  }
};

// 6.2 좋아요 취소

export const unlikeApi = async (postId, token) => {
  try {
    const res = await axios.delete(url + `/${postId}/unheart`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
