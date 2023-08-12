import Advert from "../screen/Advert";
import CreateAdvert from "../screen/CreateAdvert";
import { InstallMobileOutlined } from "@mui/icons-material";
import Login from "../screen/Login";
import Register from "../screen/Register";
import Home from "../screen/Home";
import Instational from "../screen/Instational";
import Profile from "../screen/Profile";
import Companies from "../screen/Companies";
import Info from "../screen/Info";
import InstationalMain from "../screen/InstationalMain";
import CompInfo from "../screen/CompInfo";
import Matchup from "../screen/Matchup";
import MyApplication from "../screen/MyApplication";
import Application from "../screen/Application";
import Instationalregister from "../screen/Instationalregister";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/kurumsal" element={<Instational />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/firmalar" element={<Companies />} />
        <Route path="/ilanlar1" element={<Advert />} />
        <Route path="/ilanolusturma" element={<CreateAdvert />} />
        <Route path="/firmabilgi" element={<CompInfo />} />
        <Route path="/sirketler" element={<Companies />} />
        <Route path="/ilanlar" element={<Info />} />
        <Route path="/kurumsalana" element={<InstationalMain />} />
        <Route path="/ilan-eslesmelerim" element={<Matchup />} />
        <Route path="/basvurular" element={<MyApplication />} />
        <Route path="/basvuruform" element={<Application />} />
        <Route
          path="/kurumsal/kurumsalkayit"
          element={<Instationalregister />}
        />
      </Routes>
    </BrowserRouter>
  );
}
