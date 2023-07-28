import Login from '../screen/Login'
import Register from '../screen/Register'
import Home from '../screen/Home'
import Instational from '../screen/Instational'
import Profile from '../screen/Profile'
import Companies from '../screen/Companies'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { InstallMobileOutlined } from '@mui/icons-material';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/anasayfa/" element={<Home />} />
        <Route path="/kurumsal" element={<Instational/>}/>
        <Route path="/profil" element={<Profile/>}/>
        <Route path="/sirketler" element={<Companies/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}