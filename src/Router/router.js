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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminRoute, AuthRoute, UserRoute } from "./routerByAuth";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kurumsal" element={<Instational />} />
        <Route
          path="/kurumsal/kurumsalkayit"
          element={<Instationalregister />}
        />
        <Route path="/ilanlar" element={<Advert />} />
        <Route path="/firmalar" element={<Companies />} />
        <Route path="/firmabilgi" element={<CompInfo />} />
        <Route path="/ilan/:id" element={<Info />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/ilan-eslesmelerim" element={<Matchup />} />
        <Route path="/basvurular" element={<MyApplication />} />
        <Route path="/basvuruform/:id" element={<Application />} />
        <Route path="/ilanolusturma" element={<CreateAdvert />} />
        <Route path="/kurumsalana" element={<InstationalMain />} />
        {/* Burada Raole göre giriş yerleri var çalışmıyor ama çok saçma. routeby' da admin'e undefined geliyor ama true false dönüyor. saçma. */}
        {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kurumsal" element={<Instational />} />
        <Route
          path="/kurumsal/kurumsalkayit"
          element={<Instationalregister />}
        />
        <Route path="/ilanlar1" element={<Advert />} />
        <Route path="/firmalar" element={<Companies />} />
        <Route path="/firmabilgi" element={<CompInfo />} />
        <Route path="/ilanlar" element={<Info />} />
        User Gerekenler
        <Route path="/anasayfa" element={<UserRoute />}>
          <Route path="/anasayfa" element={<Home />} />
        </Route>
        <Route path="/profil" element={<UserRoute />}>
          <Route path="/profil" element={<Profile />} />
        </Route>
        <Route path="/ilan-eslesmelerim" element={<UserRoute />}>
          <Route path="/ilan-eslesmelerim" element={<Matchup />} />
        </Route>
        <Route path="/basvurular" element={<UserRoute />}>
          <Route path="/basvurular" element={<MyApplication />} />
        </Route>
        <Route path="/basvuruform" element={<UserRoute />}>
          <Route path="/basvuruform" element={<Application />} />
        </Route>
        Admin Gerekenler
        <Route path="/ilanolusturma" element={<AdminRoute />}>
          <Route path="/ilanolusturma" element={<CreateAdvert />} />
        </Route>
        <Route path="/kurumsalana" element={<AdminRoute />}>
          <Route path="/kurumsalana" element={<InstationalMain />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
