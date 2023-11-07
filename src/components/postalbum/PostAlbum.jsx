import React from "react";
import { AlbumImg } from "./PostAlbumStyle";
import { useState } from "react";
import { useEffect } from "react";
import { postUserApi } from "../../api/PostApi";
import { useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";
import { tokenState } from "../../state/AuthAtom";
import { accountNameState } from "../../state/AuthAtom";

export default function PostAlbum() {
  const accounName = useRecoilValue(accountNameState);
  const [postData, setPostData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [ref, inView] = useInView();
  const token = useRecoilValue(tokenState);

  // 유저 게시글 목록 api 요청
  const postFetch = async () => {
    try {
      const result = await postUserApi(accounName, token, skip);

      const filterReultData = result.post.filter(
        (el) => el.image && el.image.includes("https")
      );

      let imageArray = [];
      for (let el of filterReultData) {
        imageArray.push(el.image);
      }

      setPostData((postData) => {
        return [...postData, ...imageArray];
      });

      setSkip((skip) => skip + 20);
    } catch (error) {
      console.log("실패했습니다");
    }
  };
  console.log("데이터확인", postData);

  // iinView && !isend가 true 일 때만 데이터를 불러옴!
  // 페이지 시작 시 렌더링
  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      postFetch();
    }
  }, [inView]);

  return (
    <AlbumImg>
      {postData?.map((img, idx) => {
        return (
          <div key={idx}>
            {img.split(",").length > 1 ? (
              img.split(",").map((el, idx) => {
                return (
                  <div key={idx}>
                    <img src={el} alt='' />
                  </div>
                );
              })
            ) : (
              <img src={img} alt='' />
            )}
          </div>
        );
      })}
      <div ref={ref}></div>
    </AlbumImg>
  );
}
