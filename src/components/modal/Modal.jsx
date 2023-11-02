import React, { useEffect, useRef,useHistory, useState } from "react";
import { Sect1 } from "./ModalStlye";
import bar from "../../assets/images/bar.png";
import { postDel } from "../../api/PostApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "../../state/AuthAtom";
import { postIdState } from "../../state/PostAtom";

export default function Modal({ modalOpen, setIsOpenModal, children}) {
const wrapperRef = useRef();
// const token = useRecoilValue(tokenState);
// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2M2I1YjJjYjIwNTY2Mzg1Yjg1OSIsImV4cCI6MTcwMzUxOTIwNCwiaWF0IjoxNjk4MzM1MjA0fQ.IS2RZrkHzjCI5JcgHdRCOx0ZpCy6uyT9G0nHQHYKhxQ";
// const postId = useRecoilValue(postIdState)
// const [postId, setPostId] = useRecoilState(postIdState)
const postId2 = useRecoilValue(postIdState)

useEffect(() => {
    document.addEventListener("onclick", handleClickOutside);

return () => {
    document.removeEventListener("onclick", handleClickOutside);
};
});
const handleClickOutside = (event) => {
    event.stopPropagation()
    if (wrapperRef.current && !wrapperRef.current.contains(event.currentTarget)) {
        setIsOpenModal(false);
    }else {
        setIsOpenModal(true);
    }
};

const xClose = () => {
    setIsOpenModal(false);
};

const postDelete = async (e) => {
    e.stopPropagation()
    try {
        await postDel(postId2)
        console.log(postId2)
    } catch(error) {
        console.log(error)
    }
}
// useEffect(()=>{
//     fetchData()
// },[refresh])
// const handleAddFriend = () => {
//     setRefresh(refresh=>refresh* -1)
// }

return (
//     <div ref={wrapperRef} value={modalOpen}>
//     {children}
//     <Sect1>
//     <div className='container'>
//         <div className='barr'>
//         <button className='btn' onClick={xClose}>
//             <img src={bar} alt='' />
//         </button>
//         </div>
//         <div className='letter'>
//         <p>로그아웃하시겠어요?</p>
//         <button onClick={xClose}>취소</button>
//         {/* <button onClick={handleLogout}>삭제</button> */}
//         </div>
//     </div>
//     </Sect1>
// </div>
<div ref={wrapperRef} value={modalOpen}>
{children}
    <Sect1>
    <div className='container'>
        <div className='barr'>
        <button className='btn' onClick={xClose}>
            <img src={bar} alt='' />
        </button>
        </div>
        <div className='letter'>
        <button>신고하기</button>
        {/* <button onClick={postDelete}>삭제</button> */}
        </div>
    </div>
    </Sect1>
</div>
);
}
