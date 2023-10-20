import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  img {
    width: 160px;
    height: 120px;
    transform: translateY(-100%);
  }
  p {
    color: #767676;
    font-size: 14px;
    margin-top: -70px;
  }
  button {
    background: #7a8ccb;
    color: #fff;
    width: 120px;
    height: 44px;
    border-radius: 44px;
    margin-top: 20px;
  }
`;
