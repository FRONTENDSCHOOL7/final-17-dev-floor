import React, { useEffect } from "react";
import back from "../../assets/images/icon-arrow-left.png";
import upload from "../../assets/images/upload-file.png";
import { Body, Sect1, Sect2 } from "./PostWriteStyle";
import { useRecoilValue } from "recoil";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  postPostApi,
  imageApi,
  postDetail,
  postCorrection,
} from "../../api/PostApi";
import { tokenState } from "../../state/AuthAtom";
import { postIdState } from "../../state/PostAtom";

export default function PostWrite() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [apiImage, setApiImage] = useState("");
  const [detail, setDetail] = useState([]);
  const postId = useRecoilValue(postIdState);
  const proImg = localStorage.getItem("myProfileImg");

  const fileRef = useRef(null);
  const navigate = useNavigate();
  const token = useRecoilValue(tokenState);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickImage = (e) => {
    fileRef.current?.click(e.target.files?.[0]);
  };
  const handleBack = () => {
    navigate(-1)
  }
  // 해당 유저 게시글
  const postFetch = async () => {
    try {
      const result = await postDetail(postId, token);
      setDetail(result.post);
      setContent(result.post.content);
      setApiImage(result.post.image);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeFile = async (e) => {
    // 이미지 미리보기
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
    // 이미지 api 요청
    try {
      const result = await imageApi(file);
      setApiImage("https://api.mandarin.weniv.co.kr/" + result.filename);
    } catch (error) {
      console.log(error);
    }
  };

  // 게시글 등록 api 요청
  const onClickUpLoad = async (e) => {
    e.preventDefault();
    try {
      const result = await postPostApi(content, apiImage, token);
      navigate("/myprofile");
    } catch (error) {
      console.log(error);
    }
  };

  // 게시글 수정 api 요청
  const onClickCorrection = async (e) => {
    e.preventDefault();
    try {
      const result = await postCorrection(postId, content, apiImage, token);
      console.log(result.post);
      navigate("/myprofile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postFetch();
  }, []);

  console.log(detail?.content);
  return (
    <Body>
      <Sect1>
        <button onClick={handleBack}>
          <img src={back} alt='' />
        </button>
        <button
          className='upload'
          onClick={detail ? onClickCorrection : onClickUpLoad}
        >
          {detail ? "수정하기" : "작성하기"}
        </button>
      </Sect1>
      <Sect2>
        <div className='write-main'>
          <img src={proImg} alt='' className='profile-img' />
          <div className='writeBox'>
            <input
              placeholder='게시글 입력하기...'
              onChange={onChangeContent}
              defaultValue={detail?.content} //  input tag에서 처음 보여줄 값, 수정가능(value에 넣으면 수정 불가)
            />
            <input
              style={{ display: "none" }}
              type='file'
              onChange={onChangeFile}
              ref={fileRef}
            />
            <div>{apiImage && <img src={apiImage}></img>}</div>
          </div>
        </div>
        <div className='write-bottom'>
          <button className='send' onClick={onClickImage}>
            <img src={upload} alt='' className='profile-img' />
          </button>
        </div>
      </Sect2>
    </Body>
  );
}
