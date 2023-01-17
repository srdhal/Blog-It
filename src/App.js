import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './componenets/NavComp';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
    <NavComp/>
      <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
