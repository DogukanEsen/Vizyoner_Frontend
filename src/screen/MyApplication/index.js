import React, { useEffect, useState } from "react";
import { Grid, Col } from "react-flexbox-grid";
import "./styles.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from "axios";

function App() {
  const [applications, setApplications] = useState([]);
  const fetchApplications = async () => {
    axios
      .get("http://localhost:8080/user/a", {
        headers: {
          Authorization: localStorage.getItem("tokenKey"), // Değiştirmeniz gereken oturum açma anahtarı (token) veya kimlik doğrulama bilgileri
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json)
      .then((response) => setApplications(response))
      .catch((error) => console.log({ error }))
      .then(console.log(applications));
  };

  useEffect(() => {
    fetchApplications();
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
        </Col>

        {/* Middle content column */}
        <Col xs={7} className="content-column">
          <div className="grid grid-cols-1 gap-5 p-8"></div>
          <h1 className="dark:text-white font-bold text-2xl p-2 text-center">
            BAŞVURULARIM
          </h1>
          <div className="grid grid-cols-1 gap-1 p-8">
            <div className="bg-white rounded-lg w-full h-45 rounded-lg border-2">
              <div className="bg-white rounded-lg w-full h-45 p-4">
                <h3 className="text-xl font-semibold text-blue-500">
                  HAVELSAN
                </h3>
                <h4 className="text-l font-semibold text-blue-500">
                  Kıdemli İş Geliştirme Uzmanı
                </h4>
              </div>

              <div className="bg-white w-full h-45   p-4">
                <div className="flex mt-2 max-w-[450px]">
                  <AiOutlineEnvironment className="text-2xl" />
                  <p className="text-s">Ankara</p>
                </div>
                <div className="flex mt-2 max-w-[450px]">
                  <FaCalendarAlt className="text-2xl" />
                  <p className="text-s">01.07.2023-02.09.23</p>
                </div>
                <div className="flex mt-2 max-w-[450px]">
                  <FaClock className="text-2xl" />
                  <p className="text-s">Tam Zamanlı</p>
                </div>
                <div className="flex mt-2 max-w-[450px]">
                  <p className="text-s"></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1 p-4 max-w-[350px] text-center">
                <div className="bg-light-grey bg-white w-full h-15 rounded-lg-more border-2 center-content">
                  <div className="flex mt-2 max-w-[750px] text-center">
                    <FaEye className="text-xl" />
                    <p className="green text-s">Sonuçları gör</p>
                  </div>
                </div>

                <div className="bg-light-grey bg-white w-full h-45 rounded-lg-more border-2 center-content">
                  <div className="flex mt-2 max-w-[750px] text-center">
                    <FaClock className="text-xl" />
                    <p className="text-l">Başvuruldu</p>
                  </div>
                </div>
              </div>
              <div className="bg-white  w-full h-45 border-2">
                <div className="bg-white rounded-lg w-full h-45 p-4">
                  <h3 className="text-xl font-semibold text-blue-500">
                    ASELSAN
                  </h3>
                  <h4 className="text-l font-semibold text-blue-500">
                    Yazılım Geliştirme Uzmanı
                  </h4>
                </div>

                <div className="bg-white w-full h-45 p-4">
                  <div className="flex mt-2 max-w-[450px]">
                    <AiOutlineEnvironment className="text-2xl" />
                    <p className="text-s">Ankara</p>
                  </div>
                  <div className="flex mt-2 max-w-[450px]">
                    <FaCalendarAlt className="text-2xl" />
                    <p className="text-s">05.08.2023-0.10.23</p>
                  </div>
                  <div className="flex mt-2 max-w-[450px]">
                    <FaClock className="text-2xl" />
                    <p className="text-s">Yarı Zamanlı</p>
                  </div>
                  <div className="flex mt-2 max-w-[450px]">
                    <p className="text-s"></p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1 p-4 max-w-[350px] text-center">
                  <div className="bg-light-grey bg-white w-full h-15 rounded-lg-more border-2 center-content">
                    <div className="flex mt-2 max-w-[750px] text-center">
                      <FaEye className="text-xl" />
                      <p className="green text-s">Sonuçları gör</p>
                    </div>
                  </div>

                  <div className="bg-light-grey bg-white w-full h-45 rounded-lg-more border-2 center-content">
                    <div className="flex mt-2 max-w-[750px] text-center">
                      <FaClock className="text-xl" />
                      <p className="text-l">Başvuruldu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        {/* Left empty column */}

        {/* <Col xs={3} /> */}
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
