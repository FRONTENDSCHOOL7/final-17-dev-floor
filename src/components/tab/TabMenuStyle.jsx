import styled from "styled-components";

export const Tab = styled.div`
  background-color: #fff;
  max-width: 720px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  button {
    background: #fff;
    border-style: none;
    margin-top: 12px;
    img {
      width: 24px;
      height: 24px;
    }
  }

  /* button:hover {
  } */
  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
  }
`;
