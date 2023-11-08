import React, { useEffect, useRef } from "react";
import { Sect1 } from "./ModalStlye";
import bar from "../../assets/images/bar.png";

export default function ModalComDel({
    comModalOpen,
    setComModalOpen,
    children,
    commentDel
    }) {
    const wrapperRef = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    });
    const handleClickOutside = (event) => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        setComModalOpen(false);
        } else {
        setComModalOpen(true);
        }
    };

    const xClose = () => {
        setComModalOpen(false);
    };
    return (
        <div ref={wrapperRef} value={comModalOpen}>
        {children}
        <Sect1>
            <div className='container'>
            <div className='barr'>
                <button className='btn' onClick={xClose}>
                <img src={bar} alt='' />
                </button>
            </div>
            <div className='letter'>
                <button onClick={commentDel}>삭제</button>
            </div>
            </div>
        </Sect1>
        </div>
    );
}
