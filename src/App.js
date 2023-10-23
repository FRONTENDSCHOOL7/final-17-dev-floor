import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/login/Login";
import Join from './pages/join/Join';
import Home from './pages/Home/Home';
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <div className='App'>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/join' element={<Join/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/profile' element={<Join/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
