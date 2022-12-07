import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/registration/Registration';
import UserProfile from './components/userProfile/UserProfile';

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
