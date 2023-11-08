# dev-floor
<div>
    <img src="src/assets/images/readme.png"/>
</div>
<br>
테스트 계정

```
ID: dev_floor@test.com
PW: 123123123
```
## 0. 목차

1.  [프로젝트 소개](#1-프로젝트-소개)
2.  [팀원 소개](#2-팀원-소개)
3.  [기술 스택](#3-기술-스택)
4.  [구현 기능 및 역할](#4-구현-기능-및-역할)
5.  [기능 UI](#5-기능-UI)
6.  [커밋 컨벤션](#6-커밋-컨벤션)
7.  [협업 방식](#7-협업-방식)
8.  [아쉬운점 & 개선할점](#8-아쉬운점-&-개선할점)

## 1. 프로젝트 소개

### [프로젝트 소개]

개발바닥은 다양한 개발자들이 모여, 개발 정보 및 구직정보를 공유하며 소통하는 개발 커뮤니티 입니다.
개발 관련 물품을 추천하고, 자신의 구직 후기와 개발 정보를 기록하고, 공유 하는 등
직접적으로 개발 관련된 정보를 얻을 수 있으며, 댓글과 좋아요 기능으로
서로 소통할 수 있는 개발자 SNS입니다.


### [프로젝트 개발기간]
<img src="src/assets/images/calendar.png"/>

<br>

## 2. 팀원 소개
<table style="margin:0 auto;">
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/geunpyochoi"><img src="src/assets/images/geunpyo.jpeg" width="100px;" height="100px;" alt=""/><br /><b>FE 팀장 : 최근표</b></a><br /></td>
      <td align="center"><a href="https://github.com/kyokyoYa"><img src="src/assets/images/hyunwoo.jpeg" width="100px;" height="100px;" alt=""/><br /><b>FE 팀원 : 최현우</b></a><br /></td>
      <td align="center"><a href="https://github.com/leeheezin"><img src="src/assets/images/heejin.jpg" width="100px;" height="100px;" alt=""/><br /><b>FE 팀원 : 이희진</b></a><br /></td>
      <td align="center"><a href="https://github.com/dpfka97"><img src="https://avatars.githubusercontent.com/u/138556222?v=4" width="100px;" height="100px;" alt=""/><br /><b>FE 팀원 : 이예람</b></a><br /></td>
    </tr>
  </tbody>
</table>

<br>

## 3. 기술 스택
<table>
<tr>
 <td align="center" width="100px">사용 기술</td>
 <td width="800px">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
  <img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/axios-7F2B7B?style=for-the-badge&logo=axios&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"/>&nbsp
    </td>
</tr>
<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp  
 </td>
 <tr>
  <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>
<br>

- **Recoil**을 택한 이유
1. 편리한 비동기 처리
- useRecoilState나 useRecoilValue등의 API를 사용하여 비동기 데이터를 상태로 관리하면서도 간단하게 데이터 흐름을 제어할 수 있습니다.
- 비동기 처리시 async/await 문법을 사용할 수 있습니다.
2. 유연한 상태관리
- React의 UseState훅과 비슷하게 동작하고 직관적이면서 간단한 구조를 가져 코드의 양을 줄일 수 있었습니다.
- 프로젝트 규모가 크지 않아 Recoil이 Redux에 비해 적합하다 생각하였습니다.
- Recoil을 사용하면 컴포넌트 간에 상태와 로직을 공유하거나 분리할 수 있으며, 코드 구조를 더 유연하고, 설계할 수 있습니다.
3. 성능 최적화
- 특정 상태의 변경이 발생할 때 해당 상태를 사용하는 컴포넌트들만 다시 렌더링되도록 최적화가 되어있습니다.

4. TypeScript 호환 
- Recoil은 TypeScript와의 호환성이 좋아 추후 리팩토링을 타입스크립트로 진행할 예정으로 선택하였습니다. 
5. recoil-Persist
- 유저정보의 지속성을 위해 사용한 recoil-Persist
- recoil은 기본적으로 새로고침 또는 컴포넌트 언마운트 시 상태가 초기화되지만, recoil-persist를 사용하면서 세션 스토리지에 저장하여 지속성을 유지하였습니다.

    <br>
- axios 라이브러리 활용
  - 비동기로 HTTP 통신을 할 수 있어 return을 promise 객체로 해주기 때문에 response 데이터를 쉽게 다루기 위해 사용하였습니다.
  - Promise 기반의 API를 제공하여 비동기적인 방식으로 HTTP 요청을 처리하였습니다.
  - fetch와 비슷하지만, axios는 기본적으로 JSON타입을 사용할 수 있고,   코드를 간결하게 작성하여 가독성을 높일 수 있었습니다.
    <br><br>

- **Styled-components**을 택한 이유
    - 컴포넌트를 기반으로 스타일링 할 수 있어 재사용 할 수 있고, 코드 가독성과 유지보수성을 위해 사용했습니다.
<br>
<br>
## 4. 구현 기능 및 역할

### [구현 기능]
- **🔑Account**

  - 로그인/로그아웃
  - 로그인/ 회원가입/프로필 유효성 검사
  - 회원가입 진행
  - 프로필 정보 설정

- **📄 Post**
  - 게시글 등록/수정/삭제
  - 모달창
  - 이미지 3장 업로드
  - 모든 유저 게시글 목록
  - 해당 유저 게시글 목록
  - 게시글 상세페이지
  <!-- - 팔로잉 게시글 목록 -->

- **🛒 Product**
    - 상품 등록
    - 상품 수정
    - 상품 삭제

- **⌨️ Commemt**

  - 댓글 등록/수정/삭제

- **🔎 Search**

  - 유저 검색

- **👨‍💼 Profile**

  - 개인 프로필/프로필 유효성 검사
  - 프로필 수정
  - 팔로우/언팔로우
  - 팔로우/팔로잉 리스트

- **❤️ Like**

  - 게시물 좋아요 및 취소

<br/>

### [역할]
<div>
    <img src="src/assets/images/part.png"/>
</div>

### [폴더 구조]
```
📦src
 ┣ 📂api
 ┃ ┣ 📜AuthApi.js
 ┃ ┣ 📜PostApi.js
 ┃ ┣ 📜ProductApi.js
 ┃ ┗ 📜ProfileApi.js
 ┣ 📂assets
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📂feed
 ┃ ┃ ┣ 📜Feed.jsx
 ┃ ┃ ┗ 📜FeedStyle.jsx
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜ChatModal.jsx
 ┃ ┃ ┣ 📜ChatModalStyle.jsx
 ┃ ┃ ┣ 📜LogoutModal.jsx
 ┃ ┃ ┣ 📜LogoutModalStyle.jsx
 ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┣ 📜ModalComDel.jsx
 ┃ ┃ ┣ 📜ModalPostDel.jsx
 ┃ ┃ ┣ 📜ModalProduct.jsx
 ┃ ┃ ┣ 📜ModalStlye.jsx
 ┃ ┃ ┗ 📜PostModal.jsx
 ┃ ┣ 📂postalbum
 ┃ ┃ ┣ 📜PostAlbum.jsx
 ┃ ┃ ┗ 📜PostAlbumStyle.jsx
 ┃ ┣ 📂postlist
 ┃ ┃ ┣ 📜PostList.jsx
 ┃ ┃ ┗ 📜PostListStyle.jsx
 ┃ ┣ 📂product
 ┃ ┃ ┣ 📜Product.jsx
 ┃ ┃ ┗ 📜ProductStyle.jsx
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📜SearchInput.jsx
 ┃ ┃ ┗ 📜SearchInputStyle.jsx
 ┃ ┣ 📂tab
 ┃ ┃ ┣ 📜TabMenu.jsx
 ┃ ┃ ┗ 📜TabMenuStyle.jsx
 ┃ ┗ 📂topbar
 ┃ ┃ ┣ 📜TopBarBasic.jsx
 ┃ ┃ ┣ 📜TopBarFollowers.jsx
 ┃ ┃ ┣ 📜TopBarFollowing.jsx
 ┃ ┃ ┣ 📜TopBarModify.jsx
 ┃ ┃ ┣ 📜TopBarSave.jsx
 ┃ ┃ ┣ 📜TopBarSaveStyle.jsx
 ┃ ┃ ┗ 📜TopBarStyle.jsx
 ┣ 📂font
 ┃ ┗ 📜font.css
 ┣ 📂pages
 ┃ ┣ 📂404
 ┃ ┃ ┣ 📜Error.jsx
 ┃ ┃ ┗ 📜ErrorStyle.jsx
 ┃ ┣ 📂addproduct
 ┃ ┃ ┣ 📜AddProduct.jsx
 ┃ ┃ ┗ 📜AddProductStyle.jsx
 ┃ ┣ 📂chat
 ┃ ┃ ┣ 📜Chat.jsx
 ┃ ┃ ┣ 📜ChatRoom.jsx
 ┃ ┃ ┣ 📜ChatRoomStyle.jsx
 ┃ ┃ ┗ 📜ChatStyle.jsx
 ┃ ┣ 📂editproduct
 ┃ ┃ ┣ 📜EditProduct.jsx
 ┃ ┃ ┗ 📜EditProductStyle.jsx
 ┃ ┣ 📂follow
 ┃ ┃ ┣ 📜Followers.jsx
 ┃ ┃ ┣ 📜FollowersStyle.jsx
 ┃ ┃ ┣ 📜Following.jsx
 ┃ ┃ ┗ 📜FollowingStyle.jsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┗ 📜HomeStyle.jsx
 ┃ ┣ 📂join
 ┃ ┃ ┣ 📜EmailJoin.jsx
 ┃ ┃ ┣ 📜Join.jsx
 ┃ ┃ ┣ 📜JoinStyle.jsx
 ┃ ┃ ┗ 📜ProfileJoin.jsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┣ 📜LoginHome.jsx
 ┃ ┃ ┣ 📜LoginHomeStyle.jsx
 ┃ ┃ ┗ 📜LoginStyle.jsx
 ┃ ┣ 📂post
 ┃ ┃ ┣ 📜Post.jsx
 ┃ ┃ ┣ 📜PostStyle.jsx
 ┃ ┃ ┣ 📜PostWrite.jsx
 ┃ ┃ ┗ 📜PostWriteStyle.jsx
 ┃ ┣ 📂profile
 ┃ ┃ ┣ 📜MyProfile.jsx
 ┃ ┃ ┣ 📜MyProfileStyle.jsx
 ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┗ 📜ProfileStyle.jsx
 ┃ ┣ 📂profile-modification
 ┃ ┃ ┣ 📜ProfileModification.jsx
 ┃ ┃ ┗ 📜ProfileModificationStyle.jsx
 ┃ ┗ 📂splash
 ┃ ┃ ┗ 📜Splash.jsx
 ┣ 📂state
 ┃ ┣ 📜AuthAtom.js
 ┃ ┣ 📜FollowAtom.js
 ┃ ┣ 📜ModifyAtom.js
 ┃ ┣ 📜PostAtom.js
 ┃ ┗ 📜ProductAtom.js
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜webpack.config.js
```

## 5. 기능 UI

<table style="margin:0 auto;">
  <tbody>
    <tr>
      <td align="center">
      <p>시작 화면</p>
      <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/0b18da92-ce48-431a-b4d8-ca77936933b4" height="100%;" alt=""/><br /></td>
      <td align="center">
      <p>회원 가입</p>
      <a href="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/b5246db6-eeb6-4a70-8c0a-47fb97f40511" height="100%;" alt=""/><img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/b5246db6-eeb6-4a70-8c0a-47fb97f40511" height="100%;" alt=""/></a><br /></td>
      <td align="center">
      <p>프로필 설정</p>
      <a href="https://github.com/geunpyochoi"><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/28581469/281288881-0ef06d27-85e2-4ef2-96d1-e308e7e9d4c9.gif" height="100%;" alt=""/></a><br /></td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
      <tr>
        <td align="center">
          <p>로그인</p>
          <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/2a6d297b-4767-4050-b6fe-7458a12b20f6" style="height: 100%;">
        </td>
      <td align="center">
        <p>검색하기</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/407ceda8-f6fc-49c3-a18f-ed8944db5ce7" style="height: 100%;">
      </td>
      <td align="center">
        <p>마이 프로필</p>
          <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/41da3723-c6c4-444e-984c-3d050355de7e" style="height: 100%;">
      </td>
      </tr>
  </tbody>
</table>

<table>
<tbody>
  <tr>
      <td align="center">
        <p>팔로우 & 언팔로우</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/2b2b8f17-724e-4038-8100-9653ccd49ec5" style="height: 100%;">
      </td>
      <td align="center">
          <p>채팅리스트 & 채팅방</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/20ac2702-7e10-4c24-bb53-25c387292c1a" style="height: 100%;">
      </td>  
      <td align="center">
          <p>홈 피드</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/7ce30f2f-c13e-457f-bd5c-c659e1449c12" style="height: 100%;">
      </td> 
  </tr> 
</tbody>
</table>

<table>
<tbody>
  <tr>
      <td align="center">
          <p>좋아요</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/c89369b4-5936-4ecd-a056-053730a348e1" style="height: 100%;">
      </td>
      <td align="center">
          <p>게시글 상세</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/2740f709-0416-460c-b2da-8a6e12db629c" style="height: 100%;">
      </td>  
      <td align="center">
          <p>댓글 작성</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/5e26f3cf-0fe1-4c64-b965-a40cfee12ebe" style="height: 100%;">
      </td>  
  </tr>
</tbody>
</table>

<table>
<tbody>
  <tr>
      <td align="center">
          <p>댓글 삭제</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/d4acc08c-6acb-4ad5-bb3d-896010c5801d" style="height: 100%;">
      </td>
      <td align="center">
          <p>프로필 수정</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/f29af844-0e89-40a7-8bac-8bed82b6a050" style="height: 100%;">
      </td>  
      <td align="center">
          <p>게시글 등록/삭제/수정</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/9a84b639-43ba-4359-8f01-d3a3bf374ee7" style="height: 100%;">
      </td>  
  </tr>
</tbody>
</table>

<table>
<tbody>
    <tr>
        <td align="center">
            <p>게시글 리스트/ 앨범형</p>
          <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/4edac850-fc0b-4928-9da4-65011c98776e" style="height: 100%;">
        </td>
        <td align="center">
            <p>상품 등록/수정/이동/삭제</p>
          <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/20dd632c-0e60-4fc0-ba62-fc83c7ac1d99" style="height: 100%;">
        </td>  
        <td align="center">
            <p>로그아웃</p>
          <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/4baa3216-b42d-4e9e-9993-50132782e2cd" style="height: 100%;">
        </td>  
    </tr>
</tbody>
</table>

<table>
  <tbody>
    <tr>
      <td align="center" width="33%;">
          <p>404</p>
        <img src="https://github.com/FRONTENDSCHOOL7/final-17-dev-floor/assets/28581469/36c5ba5c-c3ef-4677-a0c0-78f63414067f" style="height: 100%;">
      </td>
      <td>
      </td>  
      <td>
      </td>  
    </tr>
  </tbody>
</table>

<br>

## 6. 커밋 컨벤션
<detail>
  <table>
    <tr>
      <th>커밋 메세지</th>
      <th>의미</th>
    </tr>
    <tr>
      <td>Feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td>BugFix</td>
      <td>버그 & 에러 수정</td>
    </tr>
    <tr>
      <td>Docs</td>
      <td>리드미 등 문서 수정</td>
    </tr>
    <tr>
      <td>Style</td>
      <td>코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우</td>
    </tr>
    <tr>
      <td>Design</td>
      <td>UI 디자인 변경</td>
    </tr>
    <tr>
      <td>Refactoring</td>
      <td>코드 리팩토링</td>
    </tr>
    <tr>
      <td>Chore</td>
      <td>기타 변경사항</td>
    </tr>
    <tr>
      <td>Rename</td>
      <td>파일명 혹은 폴더명 수정, 위치 옮기기</td>
    </tr>
    <tr>
      <td>Remove</td>
      <td>파일 삭제</td>
    </tr>
    <tr>
      <td>Move</td>
      <td>파일 혹은 폴더 위치 수정</td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>주석 추가 및 변경</td>
    </tr>
    <tr>
      <td>Distribution</td>
      <td>파일 배포</td>
    </tr>
  </table>
</detail>
<br>

## 7. 협업 방식
- **스크럼**

  스크럼을 매일 오전 10시에 각 구성원의 기능 계획을 공유하고, 오후 5시30분에 진행 상황과 겪은 문제, 해결 방안을 공유하였습니다.

- **라이브 쉐어**

  라이브 쉐어 프로그램을 사용하여 오류나 어려움이 있는 부분을 함께 해결하고, 기술적 중요도가 높은 파트에서는 함께 작업함으로써 전체 코드에 대한 각 구성원들의 이해도를 높였습니다.

- **깃플로우**

    main - 최종 머지하는 배포 branch<br>
    feature - 각자 기능 개발 완료후 합쳐지는 branch로 1명 조원의 승인후 merge합니다.

<br>

## 8. 아쉬운점 & 개선할점
1. 커스텀 훅을 활용하지 않고 중복 코드를 작성한 부분이 많아 코드 가독성과 유지보수가 어려워진 점이 아쉬웠습니다. 리팩토링때는 커스텀훅을 만들어 효율적으로 적용해볼 예정입니다.

2. GitHub 이슈를 활용하지 않았습니다. 이슈를 통해 프로젝트의 진행 상황을 효과적으로 추적하고 문제를 관리할 수 있었을 텐데, 이 기회를 놓친 것이 아쉬워서 추후 리팩토링때는 활용할 예정 입니다.

3. 리코일로 상태관리를 하면서 처음 적용하다보니 마구잡이로 구현하게 되어 중복도 많아져 오류가 생기기도 했습니다. 더 쳬게적이고 일관성있게 리팩토링 할 예정입니다.