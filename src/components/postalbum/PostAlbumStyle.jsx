import styled from "styled-components";
import layer from "../../assets/images/iccon-img-layers.png";

// section 3

export const AlbumImg = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  grid-gap: 10px;
  max-height: 300px;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
