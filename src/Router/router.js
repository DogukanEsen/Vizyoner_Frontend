import Login from "../screen/Login";
import Register from "../screen/Register";
import Home from "../screen/Home";
import Instational from "../screen/Instational";
import Profile from "../screen/Profile";
import Companies from "../screen/Companies";
import Announcement from "../screen/Announcement";
import Matchup from "../screen/Matchup";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { Announcement, InstallMobileOutlined } from "@mui/icons-material";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/anasayfa/" element={<Home />} />
        <Route path="/kurumsal" element={<Instational />} />
        <Route path="/ilanlar" element={<Announcement />} />
        <Route path="/eşleşme" element={<Matchup />} />
      </Routes>
    </BrowserRouter>
  );
}
