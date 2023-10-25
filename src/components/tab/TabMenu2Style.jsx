import styled from "styled-components";
import home from "../../assets/images/icon-home.png";
import fillHome from "../../assets/images/icon-home-fill.png";
import chat from "../../assets/images/icon-message-circle-1.png";
import fillChat from "../../assets/images/icon-message-circle-fill.png";
import post from "../../assets/images/icon-edit.png";
import fillPost from "../../assets/images/icon-edit-fill.png";
import profile from "../../assets/images/icon-user.png";
import fillProfile from "../../assets/images/icon-user-fill.png";

export const Tab = styled.div`
  background-color: #fff;
  max-width: 720px;
  width: 100%;
  display: flex;
  max-height: 60px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  button {
    background: #fff;
    border-style: none;
    margin-top: 10px;
    position: relative;
  }
  .btn-home {
    background-image: url({home});
  }
`;
