import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Chat from "./pages/chat/Chat";
import Post from "./pages/post/Post";
import PostWrite from "./pages/post/PostWrite";
import Profile from "./pages/profile/Profile";
import MyProfile from "./pages/profile/MyProfile";
import Error from "./pages/404/Error";
import ProfileModification from "./pages/profile-modification/ProfileModification";
import LoginHome from "./pages/login/LoginHome";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LoginHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/home' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/post' element={<Post />} />
          <Route path='/postWrite' element={<PostWrite />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/404' element={<Error />} />
          {/* <Route path='/followers' element={<Followers />} />
          <Route path='/addproduct' element={<AddProduct />} /> */}
          <Route
            path='/profile-modification'
            element={<ProfileModification />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
