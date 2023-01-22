import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/registration/Registration';
import UserProfile from './components/userProfile/UserProfile';
import HomeComponent from './components/home/Home';
import NavigationBarComponent from './components/navigationBar/NavigationBar';
import UserSettings from './components/userSettings/userSettings';

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
