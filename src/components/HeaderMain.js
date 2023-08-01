import React, { useState, useEffect, useRef } from "react";
import { AiOutlineHome, AiOutlineUnorderedList, AiOutlineQuestionCircle, AiOutlineUser, AiOutlineSetting, AiOutlinePoweroff } from 'react-icons/ai';
import { PiBagSimple, PiNewspaperBold, PiProjectorScreenChartBold } from 'react-icons/pi';
import { BiBadgeCheck, BiMessage, BiBell } from 'react-icons/bi';
import { MdFace } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const dropdownRef = useRef(null); 

  const headerStyle = {
    zIndex: 9,
    position: "relative",
  };

  const handleLogoutClick = () => {
    window.location.href = "http://localhost:3000";
  };

  const handleUserIconClick = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setUserDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#0073b5] p-1" style={headerStyle}>
        <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4">
          <a href="#">
            <Link to="/anasayfa">
              <img src="https://vizyonergenc.com/v2/images/logo2.png" width={100} alt="Logo" />
            </Link>
          </a>

          <ul className="flex -ml-10">
            {[
              { icon: AiOutlineHome, label: "Anasayfa", link: "/anasayfa" },
              { icon: PiBagSimple, label: "İlanlar", },
              { icon: AiOutlineUnorderedList, label: "Firmalar", link: "/firmalar" },
              { icon: PiNewspaperBold, label: "Başvurularım", link: "/basvurularim" },
              { icon: PiProjectorScreenChartBold, label: "Projelerim", link: "/projelerim" },
              { icon: BiBadgeCheck, label: "İlan Eşleşmelerim", link: "/ilan-eslesmelerim" }
            ].map((item, index) => (
              <li key={index} className="p-2">
                <div className="flex flex-col items-center">
                  <Link to={item.link}>
                    {React.createElement(item.icon, { color: "white" })}
                  </Link>
                  <Link to={item.link} className="text-white mt-1 text-xs">
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}

            <li className="p-2">
              <a href="#">
                <Link to="https://kok.vizyonergenc.com">
                  <img className="h-10" src="https://vizyonergenc.com/images/kok_logo_beyaz.png" width={40} alt="Image1" />
                </Link>
              </a>
            </li>
            <li className="p-2">
              <a href="#">
                <Link to="https://kalfa.vizyonergenc.com">
                  <img className="h-10" src="https://vizyonergenc.com/images/kalfa_logo_beyaz.png" width={40} alt="Image2" />
                </Link>
              </a>
            </li>

            <li className="p-2">
              <input
                type="search"
                placeholder=" Ara"
                style={{
                  width: '80%',
                  height: '36px',
                  borderRadius: '5px',
                  border: 'none',
                  padding: '5px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  backgroundColor: '#f2f2f2',
                  marginTop: '2px',
                  marginLeft: '20px',
                  borderRadius: '35px',
                }}
              />
            </li>
          </ul>

          <ul className="flex">
            <li key={0} className="relative p-2 mx-2">
              <div className="flex flex-col items-center">
                <a href="#">
                  <BiBell color="white" size={25} />
                </a>
                <a className="text-white mt-1 text-xs" href="#">
                </a>
              </div>
            </li>
            <li key={1} className="relative p-2 mx-2">
              <div className="flex flex-col items-center">
                <a href="#">
                  <BiMessage color="white" size={25} />
                </a>
              </div>
            </li>
            <li key={2} className="relative p-2 mx-2" ref={dropdownRef}>
              <div className="flex flex-col items-center">
                <a href="#" onClick={handleUserIconClick}>
                  {React.createElement(AiOutlineUser, { color: "white", size: 25 })}
                </a>
                <a className="text-white mt-1 text-xs" href="#">
                </a>
                {isUserDropdownOpen && (
                  <ul
                    className="absolute top-10 right-0 bg-white rounded-md shadow-md p-2"
                    style={{ width: "130px" }}
                  >
                    <li className="p-2">
                      <div className="flex items-center">
                        <MdFace size={20} color="black" />
                        <Link to="/profil" className="text-black ml-2 ">
                          Profilim
                        </Link>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="flex items-center">
                        <AiOutlineSetting size={20} color="black" />
                        <a className="text-black ml-2 " href="#">
                          Ayarlar
                        </a>
                      </div>
                    </li>
                    <li className="p-2">
                      <div className="flex items-center" onClick={handleLogoutClick}>
                        <AiOutlinePoweroff size={20} color="black" />
                        <a className="text-black ml-2" href="#">
                          Çıkış Yap
                        </a>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;