import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/login/Login";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";
import Error from "./pages/404/Error";
import ProfileModification from "./pages/profile-modification/ProfileModification";
import LoginHome from "./pages/login/LoginHome";
import Home from "./pages/home/Home";
import Followers from "./pages/follow/Followers";
import AddProduct from "./pages/addproduct/AddProduct";
import Post from "./pages/post/Post";
import PostWrite from "./pages/post/PostWrite";
import ChatRoom from "./pages/chat/ChatRoom";
import Following from "./pages/follow/Following";
import Join from "./pages/join/Join";
import Splash from "./pages/splash/Splash";
import { ProfileJoin } from "./pages/join/ProfileJoin";
import MyProfile from "./pages/profile/MyProfile";
import EditProduct from './pages/editproduct/EditProduct';
import { tokenState } from "./state/AuthAtom";
import { useRecoilValue } from "recoil";

function App() {
  const token = useRecoilValue(tokenState);

  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Splash />} />
          <Route path='/home' exact element={token ? <Home/> : <LoginHome />} />
          <Route path='/login' element={token ? <Home/> : <Login />} />
          <Route path='/join' element={token ? <Home/> : <Join />} />
          <Route path='/homefeed' element={<Home />} />
          <Route path='/chat' element={token ? <Chat /> : <Navigate to='/login'/>} />
          <Route path='/chatroom' element={token ? <ChatRoom /> : <Navigate to='/login'/>} />
          <Route path='/profile' element={token ? <Profile /> : <Navigate to='/login'/>} />
          <Route path='/post' element={token ? <Post /> : <Navigate to='/login'/>} />
          <Route path='/postwrite' element={token ? <PostWrite /> : <Navigate to='/login'/>} />
          <Route path='/myprofile' element={token ? <MyProfile/> : <Navigate to='/login'/>} />
          <Route path='/404' element={<Error />} />
          <Route path='/followers' element={token ? <Followers /> : <Navigate to='/login'/>} />
          <Route path='/following' element={token ? <Following /> : <Navigate to='/login'/>} />
          <Route path='/product' element={token ? <AddProduct /> : <Navigate to='/login'/>} />
          <Route path='/modify' element={token ? <ProfileModification /> : <Navigate to='/login'/>} />
          <Route path='/join-profile' element={token ? <ProfileJoin/> : <Navigate to='/login'/>} />
          <Route path='/editproduct' element={token ? <EditProduct/> : <Navigate to='/login'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
