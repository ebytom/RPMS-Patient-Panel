import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Login from './Pages/Login';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
