import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Profile from "./pages/profile/Profile";
import MyProfile from "./pages/profile/MyProfile";
import ProfileModification from "./pages/profile-modification/ProfileModification";

function App() {
  return (
    <>
      <GlobalStyle />
      <ProfileModification />
    </>
  );
}

export default App;
