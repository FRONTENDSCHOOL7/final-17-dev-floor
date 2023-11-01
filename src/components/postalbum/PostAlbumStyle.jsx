import styled from "styled-components";
import layer from "../../assets/images/iccon-img-layers.png";

// section 3

export const AlbumImg = styled.div`
  background-color: white;
  height: auto;
  position: relative;
  display: grid;
  margin-bottom: 60px;
  grid-template-columns: 228px 228px 228px;
  grid-template-rows: 228px 228px 228px;
  text-align: center;
  grid-gap: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 228px;
    height: 228px;
  }
  div {
    margin-top: 16px;
  }
`;
