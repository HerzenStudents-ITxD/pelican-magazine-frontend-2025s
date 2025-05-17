import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home_guest';
import Homereg from './pages/home_user';
import SignIn from './pages/sign_in'; // Переименовано для единообразия
import Registration from './pages/registration';
import Forgot_password from './pages/forgot_password';
import New_password from './pages/new_password';
import Profile from './pages/profile';
import Editprof from './pages/prof_sett';
import Writeart from './pages/write_art';
import Readart from './pages/read_art';
import Liked_arts from './pages/liked_arts';
import ModeratorDashboard from './pages/moderatorDashboard';
import EmailConfirmation from './pages/emailConfirmation';
import TwoFAPage from './pages/twoFAPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Home />} />
        <Route path="/moderator" element={<ModeratorDashboard />} />
        <Route path="/mainreg" element={<Homereg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpass" element={<Forgot_password />} />
        <Route path="/newpass" element={<New_password />} />
        <Route path="/editprof" element={<Editprof />} />
        <Route path="/writeart" element={<Writeart />} />
        <Route path="/readart" element={<Readart />} />
        <Route path="/likedarts" element={<Liked_arts />} />
        
        {/* Новые маршруты */}
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/twofa-verify" element={<TwoFAPage />} />
      </Routes>
    </div>
  );
}

export default App;