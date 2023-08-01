import Advert from '../screen/Advert'
import CreateAdvert from '../screen/CreateAdvert'
import { InstallMobileOutlined } from '@mui/icons-material';
import Login from "../screen/Login";
import Register from "../screen/Register";
import Home from "../screen/Home";
import Instational from "../screen/Instational";
import Profile from "../screen/Profile";
import Companies from "../screen/Companies";
import Info from "../screen/Info";
import InstationalMain from "../screen/InstationalMain";
import CompInfo from "../screen/CompInfo";
import Announcement from "../screen/Announcement";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { Announcement, InstallMobileOutlined } from "@mui/icons-material";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/kurumsal" element={<Instational/>}/>
        <Route path="/profil" element={<Profile/>}/>
        <Route path="/firmalar" element={<Companies/>}/>
        <Route path="/ilanlar" element={<Advert/>}/>     
        <Route path="/ilanolusturma" element={<CreateAdvert/>}/>
        <Route path="/firmabilgi" element={<CompInfo/>}/>
        <Route path="/sirketler" element={<Companies/>}/>
        <Route path="/ilanlar" element={<Info/>}/>
        <Route path ="/kurumsalana" element={<InstationalMain/>}/>
      
        
        
        
      </Routes>
    </BrowserRouter>
  );
}
