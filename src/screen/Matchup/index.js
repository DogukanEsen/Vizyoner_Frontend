import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid, Col } from "react-flexbox-grid";
import "./styles.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { getAiAdverts } from "../../services/AdvertService";
import { Link } from "react-router-dom";

function App() {
  const [advertData, setAdvert] = useState([]);

  const getAdverts = () => {
    getAiAdverts(localStorage.getItem("tokenKey")).then((res) => {
      setAdvert(res.data.combined_jobs);
    });
  };

  useEffect(() => {
    getAdverts();
  }, []);

  return (
    <div>
      <HeaderMain />
      <Grid fluid className="app-main">
        {/* Right sidebar column */}
        <Col
          xs={3}
          className="content-left-offset padding-top-35 padding-bottom-5 left-align p-30"
          style={{ fontSize: "14px" }}
        >
          <div className="sidebar-widget">
            <div className="global-footer">
              <div className="col-s-12">
                <ul>{/* Sidebar links here */}</ul>
              </div>
            </div>
          </div>
          <div className="global-footer-alt">
            <div className="col-s-13 text-center text-blue-500">
              <a href="https://vizyonergenc.com/">Kariyer</a>{" "}
              <a href="https://vizyonergenc.com/">Blog</a>{" "}
              <a href="https://vizyonergenc.com/">Etkinlik</a> <br></br>
              <a href="https://vizyonergenc.com/">SSB Katalog</a>{" "}
              <a href="https://vizyonergenc.com/">Hakkında</a> <br></br>
              <a href="https://vizyonergenc.com/">Misyon Vizyon</a>{" "}
              <a href="https://vizyonergenc.com/">Hizmet_Koşulları</a> <br></br>
              <a href="https://vizyonergenc.com/">KVKK_Sözleşmesi</a> <br></br>
              <a href="https://vizyonergenc.com/">Sık Sorulan Sorular</a>{" "}
              <a href="https://vizyonergenc.com/">Bize Ulaş</a>
            </div>
          </div>
          <div className="global-footer-alt">
            <div className="col-s-13 text-center">
              <p>-------------------------------------</p>
              Vizyoner Genç
              <br />
              <img
                src="https://vizyonergenc.com/v2/images/SSB_amblem_2022.png"
                alt="SAVUNMA SANAYİİ BAŞKANLIĞI"
                data-tippy-placement="top"
                data-tippy-theme="light"
                data-tippy=""
                data-original-title="SAVUNMA SANAYİİ BAŞKANLIĞI"
                width="25px"
                style={{ margin: "0 auto" }}
              />
              T.C. Cumhurbaşkanlığı - Savunma Sanayii <br></br>Başkanlığı
              himayesinde yürütülmektedir.
              <br />© 2023 Vizyoner Genç
            </div>
          </div>
        </Col>

        {/* Middle content column */}
        <Col xs={7} className="content-column ">
          <h1 className="dark:text-black font-bold font-roboto text-4xl p-2 text-center">
            SİZE UYGUN İLAN EŞLEŞMELERİ
          </h1>
          <div className="grid grid-cols-1 gap-1 p-8 ">
            {advertData.map((advert) => (
              <Link to={"/ilan/" + advert["İLAN İD"]}>
                <div className="bg-white w-full h-45 rounded-lg border-2  shadow-lg  hover:shadow-teal-500">
                  <div className="bg-white rounded-lg w-full h-45 p-4">
                    <h2 className="text-xl font-semibold text-blue-500">
                      {advert["İLAN ADI"]}
                    </h2>
                    <h3 className="text-l font-semibold text-blue-500 mt-3">
                      {advert["İLAN ALAN"]}
                    </h3>
                  </div>

                  <div className="bg-white w-full h-45   p-4">
                    <div className="flex mt-2 max-w-[450px]">
                      <AiOutlineEnvironment className="text-2xl " />
                      <p className="text-s">{advert["İLAN KONUM"]}</p>
                    </div>
                    <div className="flex mt-3 max-w-[450px] ">
                      <FaCalendarAlt className="text-2xl " />
                      <p className="text-s">
                        {advert["İLAN BAŞLANGIÇ TARİHİ"]} -{" "}
                        {advert["İLAN BİTİŞ TARİHİ"]}
                      </p>
                    </div>
                    <div className="flex mt-3 max-w-[450px]">
                      <p className="text-s"></p>
                    </div>
                  </div>
                  <div className="bg-white  w-full h-45 border-2"></div>
                </div>
              </Link>
            ))}
          </div>
        </Col>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
