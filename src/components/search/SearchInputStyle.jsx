import styled from "styled-components";

export const SearchBox = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;
export const SearchInputBox = styled.div`
  width: 100%;
  background: var(--bgColor);
  border-bottom: 1px solid var(--borderColor);
`;
export const SearchInputInner = styled.div`

    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 10px;
`
export const SearchPrev = styled.div`
  button {
    height: 100%;
    img {
      vertical-align: top;
    }
  }
`;
export const SearchUser = styled.div`
    width: 100%;
    height: 32px;
    background: var(--whiteColor);
    border-radius: 32px;
    input {
        background: none;
        padding: 8px 0 10px 10px;
    }
`
export const SearchUserList = styled.div`
  padding: 0 20px;
  height: calc(100% - 111px);
  overflow: hidden;
  .userBox {
    padding: 10px 0;
    display: flex;
    gap: 7px;
    .userImg {
      width: 50px;
      height: 50px;
      img {width: 100%;}
    }
    .userPost {
      padding-bottom: 3px;
      p {
        color: var(--disableColor);
      }
    }
  }
`;
