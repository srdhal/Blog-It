import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './componenets/NavComp';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import { useState } from 'react';

export default function App() {

  const [isAuth,setIsAuth]= useState(false)

  return (
    <div className="App">
    <NavComp setIsAuth={setIsAuth}/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </div>
  );
}

