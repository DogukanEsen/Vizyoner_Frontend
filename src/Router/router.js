import Login from '../screen/Login'
import Register from '../screen/Register'
import Home from '../screen/Home'
import Instational from '../screen/Instational'
import Profile from '../screen/Profile'
import Companies from '../screen/Companies'
import Info from '../screen/Info'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { InstallMobileOutlined } from '@mui/icons-material';
import Instational_main from '../screen/Instational_main'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/kurumsal" element={<Instational/>}/>
        <Route path="/profil" element={<Profile/>}/>
        <Route path="/sirketler" element={<Companies/>}/>
        <Route path="/ilanlar" element={<Info/>}/>
        <Route path ="/kurumsalana" element={<Instational_main/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}