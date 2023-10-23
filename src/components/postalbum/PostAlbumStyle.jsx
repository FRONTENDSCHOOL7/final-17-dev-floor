import styled from "styled-components";
import layer from "../../assets/images/iccon-img-layers.png";

// section 3

export const Sect3 = styled.div`
  .album-btns {
    display: flex;
    align-items: end;
    justify-content: right;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  }
  button {
    background: #fff;
    border: none;
  }
`;
export const AlbumImg = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  grid-gap: 10px;
  img {
    width: 228px;
    height: 228px;
  }
  /* .img-layer::before {
    background: url(${layer}) no-repeat;
    content: "";
    display: inline-block;
    background-size: 34px;
    height: 32px;
    width: 32px;
    margin: -50px -96px 30px 71px;
    position: relative;
  } */
`;
