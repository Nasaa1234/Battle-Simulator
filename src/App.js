import logo from './logo.svg';
import './App.css';
import hero from "./gif/hero.gif"
import Home from './pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateRoom from './pages/createRoom';
import JoinRoom from './pages/joinRoom';
function App() {
  return (
    <div className='App '>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/createRoom" element={<CreateRoom />} />
            <Route path="/joinRoom" element={<JoinRoom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
