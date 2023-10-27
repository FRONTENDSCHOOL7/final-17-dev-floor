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
    position: relative;
    div {
      width: 24px;
      height: 24px;
      img {
      width: 100%;
    }}
  }
  .onHover {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  .profile {
    position: absolute;
    top: 0;
    left: 1px;
    display: none;
  }
  .post {
    position: absolute;
    top: 0;
    left: 12.5px;
    display: none;
  }

  button:hover {
    .onHover {
      display: block;
    }
    p {
      color: #12184e;
    }
  }
  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
  }
`;
