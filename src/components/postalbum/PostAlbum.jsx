import React from "react";
import hamburger from "../../assets/images/icon-post-list-off.png";
import album from "../../assets/images/icon-post-album-on.png";
import layer from "../../assets/images/iccon-img-layers.png";

import { AlbumImg, Sect3 } from "./PostAlbumStyle";

export default function PostAlbum() {
  return (
    <Sect3>
      <div className='album-btns'>
        <button>
          <img src={hamburger} alt='' />
        </button>
        <button>
          <img src={album} alt='' />
        </button>
      </div>
      <AlbumImg>
        <div className='img-content img-layer'>
          <img src='https://via.placeholder.com/114x114' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114 ' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114 ' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114' alt='' />
        </div>
        <div className='img-content'>
          <img src='https://via.placeholder.com/114x114' alt='' />
        </div>
      </AlbumImg>
    </Sect3>
  );
}
