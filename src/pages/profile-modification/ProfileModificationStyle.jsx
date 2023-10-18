import styled from "styled-components";
import upload from "../../assets/images/upload-file.png";

export const Body = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  img {
    width: 110px;
    height: 110px;
  }
  img::after {
    background-image: url(${upload});
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
