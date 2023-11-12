import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/registration/Registration';
import UserProfile from './pages/userProfile/UserProfile';
import HomeComponent from './pages/home/Home';
import NavigationBarComponent from './pages/navigationBar/NavigationBar';
import UserSettings from './pages/userSettings/userSettings';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<><NavigationBarComponent /><UserProfile /></>} />
          <Route path="/home" element={<><NavigationBarComponent /><HomeComponent /></>} />
          <Route path="/settings" element={<><NavigationBarComponent /><UserSettings /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
