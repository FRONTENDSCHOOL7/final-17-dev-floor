import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";
import MyProfile from "./pages/profile/MyProfile";
import ProfileModification from "./pages/profile-modification/ProfileModification";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route
            path="/profile-modification"
            element={<ProfileModification />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
