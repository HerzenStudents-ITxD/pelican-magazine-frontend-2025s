import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home_guest';
import Homereg from './pages/home_user';
import Sign_in_page from './pages/sign_in';
import Registration from './pages/registration';
import Forgot_password from './pages/forgot_password';
import New_password from './pages/new_password';
import Profile from './pages/profile';
import Editprof from './pages/prof_sett';
import Writeart from './pages/write_art';
import Readart from './pages/read_art';
import Liked_arts from './pages/liked_arts';
import ModeratorDashboard from './pages/ModeratorDashboard'; // если файл с маленькой буквы


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Home />} />
        <Route path="/moderator" element={<ModeratorDashboard />} />
        <Route path="/mainreg" element={<Homereg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Sign_in_page />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpass" element={<Forgot_password />} />
        <Route path="/newpass" element={<New_password />} />
        <Route path="/editprof" element={<Editprof />} />
        <Route path="/writeart" element={<Writeart />} />
        <Route path="/readart" element={<Readart />} />
        <Route path="/likedarts" element={<Liked_arts />} />
      </Routes>
      

    </div>
  );
}

export default App;