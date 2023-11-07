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
  const [apiImage, setApiImage] = useState("");
  const [detail, setDetail] = useState([]);
  const postId = useRecoilValue(postIdState);
  const proImg = localStorage.getItem("myProfileImg");
  const [selectedImages, setSelectedImages] = useState([]);

  const fileRef = useRef(null);
  const navigate = useNavigate();
  const token = useRecoilValue(tokenState);

  console.log("postId", postId);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickImage = (e) => {
    fileRef.current?.click(e.target.files);
  };
  const handleBack = () => {
    navigate(-1);
  };

  // 게시글 상세
  const postFetch = async () => {
    try {
      const result = await postDetail(postId, token);
      console.log("게시글상세", result);
      setDetail(result.post);
      setContent(result.post.content);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(selectedImages);
  const onChangeFile = async () => {
    const files = fileRef.current.files;
    let file;
    let imagesArray = [...selectedImages];
    if (selectedImages.length <= 3) {
      for (let i = 0; i < files.length; i++) {
        file = files[i];
        imagesArray.push(file);
      }
      setSelectedImages(imagesArray);
      console.log("이미지배열확인", imagesArray);
    }
    // 이미지 api 요청
    try {
      const result = await imageApi(imagesArray);
      console.log("이미지통신확인", result);
      if (result.length > 1) {
        const data = result
          .map((image) => `https://api.mandarin.weniv.co.kr/${image.filename}`)
          .join(",");
        console.log("data", data);
        setApiImage(data);
      } else {
        const data2 = `https://api.mandarin.weniv.co.kr/${result[0].filename}`;
        setApiImage(data2);
      }
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
      console.log("게시글수정결과값", result);
      navigate("/myprofile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (postId) {
      postFetch();
    }
  }, []);
  return (
    <Body>
      <Sect1>
        <button onClick={handleBack}>
          <img src={back} alt='' />
        </button>
        <button
          className='upload'
          onClick={
            JSON.stringify(detail) !== "[]" ? onClickCorrection : onClickUpLoad
          }
        >
          {JSON.stringify(detail) !== "[]" ? "수정하기" : "작성하기"}
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
              multiple
              type='file'
              onChange={onChangeFile}
              ref={fileRef}
            />
            <div className='imageBox'>
              {detail?.image && selectedImages.length === 0 ? (
                detail.image.split(",").length > 1 ? (
                  detail.image.split(",").map((el, idx) => {
                    return (
                      <div key={idx}>
                        <img src={el} alt='' />
                      </div>
                    );
                  })
                ) : (
                  <img src={detail.image} alt='' />
                )
              ) : (
                selectedImages?.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <img src={URL.createObjectURL(item)} alt='' />
                    </div>
                  );
                })
              )}
            </div>
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
