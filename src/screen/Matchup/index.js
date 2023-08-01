import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

function App() {
  return (
    <div>
      <HeaderMain />

      <Grid fluid className="app-main">
        <Col xs={3} /> {/* Empty left column */}
        <Col xs={7} className="content-column ">
          <h1 className="dark:text-white font-bold text-3xl p-2 text-center">
            SİZİN İÇİN ÖNERİLEN İLANLAR
          </h1>
          <div className="grid grid-cols-1 grid-cols-1 gap-5 p-8 ">
            <div className="bg-white rounded-lg  border-2 w-full h-45">
              <div className="grid grid-cols-1 grid-cols-1 gap-5 p-5 ">
                <div className="bg-white rounded-lg w-full h-45 ">
                  {" "}
                  <div className="bg-white rounded-lg w-full h-125">
                    <h3 className="text-xl font-semibold text-blue-500">
                      HAVELSAN
                    </h3>
                    <h4 className="text-l font-semibold text-blue-500">
                      Kıdemli İş Geliştirme Uzmanı
                    </h4>
                    <br></br>
                  </div>
                  <div className="bg-white  w-full h-45 rounded-lg border-2">
                    {" "}
                    <div className="flex mt-2 max-w-[450px]">
                      <AiOutlineEnvironment className="text-2xl" />
                      <p className="text-s">Ankara</p>
                    </div>
                    <div className="flex mt-2 max-w-[450px]">
                      <FaCalendarAlt className="text-2xl" />
                      <p className="text-s">01.07.2023-02.09.23</p>
                    </div>
                    <div className="flex mt-2 max-w-[450px]">
                      <FaClock className="text-2xl " />
                      <p className="text-s">Tam Zamanlı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-2 w-full h-45">
              <div className="grid grid-cols-1 grid-cols-1 gap-5 p-5 ">
                <div className="bg-white rounded-lg w-full h-45 ">
                  {" "}
                  <div className="bg-white rounded-lg w-full h-125">
                    <h3 className="text-xl font-semibold text-blue-500">
                      HAVELSAN
                    </h3>
                    <h4 className="text-l font-semibold text-blue-500">
                      Kıdemli İş Geliştirme Uzmanı
                    </h4>
                    <br></br>
                  </div>
                  <div className="bg-white  w-full h-45 rounded-lg border-2">
                    {" "}
                    <div className="flex mt-2 max-w-[450px]">
                      <AiOutlineEnvironment className="text-2xl" />
                      <p className="text-s">Ankara</p>
                    </div>
                    <div className="flex mt-2 max-w-[450px]">
                      <FaCalendarAlt className="text-2xl" />
                      <p className="text-s">01.07.2023-02.09.23</p>
                    </div>
                    <div className="flex mt-2 max-w-[450px]">
                      <FaClock className="text-2xl " />
                      <p className="text-s">Tam Zamanlı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={3} /> {/* Empty right column */}
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
