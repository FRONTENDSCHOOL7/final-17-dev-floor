import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Splash />} />
          <Route path='/home' exact element={<LoginHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/homefeed' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/chatroom' element={<ChatRoom />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post' element={<Post />} />
          <Route path='/postwrite' element={<PostWrite />} />
          <Route path='/myprofile' element={<MyProfile/>} />
          <Route path='/404' element={<Error />} />
          <Route path='/followers' element={<Followers />} />
          <Route path='/following' element={<Following />} />
          <Route path='/product' element={<AddProduct />} />
          <Route path='/modify' element={<ProfileModification />} />
          <Route path='/join-profile' element={<ProfileJoin/>} />
          <Route path='/editproduct' element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
