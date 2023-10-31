import styled from "styled-components";

export const Sect1 = styled.div`
  .container {
    width: 720px;
    height: 110px;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .barr {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .letter {
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
  }
`;
