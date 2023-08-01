import React from "react";
import { Grid, Col } from "react-flexbox-grid";
import "./styles.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function App() {
  return (
    <div>
      <HeaderMain />
      <Grid fluid className="app-main">
        {/* Left empty column */}

        <Col xs={3} />

        {/* Middle content column */}
        <Col xs={6.5} className="content-column">
          <div className="grid grid-cols-1 gap-5 p-8">
            <div className="bg-sea-green bg-white rounded-lg border-2 w-full h-45">
              <div className="grid grid-cols-1 gap-5 p-5">
                <h className="gray-text">
                  Tamamlanmayan başvuru süreçleri için firmalardan sonuç
                  listesinin iletilmesi beklenmektedir. Sonuç aşamaları firma
                  tarafından yürütülmekte olup ilanı yayınlayan firmaların sonuç
                  açıklama işlemi için bizlere kabul listelerini iletmeleri
                  gerekmektedir.
                </h>

                <h className="gray-text">Anlayışınız için teşekkür ederiz.</h>
                <div className="bg-white rounded-lg w-full h-45"></div>
              </div>
            </div>
          </div>
          <h1 className="dark:text-white font-bold text-2xl p-2 text-center">
            SİZİN İÇİN ÖNERİLEN İLANLAR
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
                <div className="bg-white w-full h-15 rounded-lg border-2">
                  <div className="flex mt-2 max-w-[750px] text-center">
                    <FaEye className="text-xl" />
                    <p className="text-s">Başvuruyu gör</p>
                  </div>
                </div>

                <div className="bg-white w-full h-45 rounded-lg border-2">
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
                  <div className="bg-white w-full h-15 rounded-lg border-2">
                    <div className="flex mt-2 max-w-[750px] text-center">
                      <FaEye className="text-xl" />
                      <p className="text-s">Başvuruyu gör</p>
                    </div>
                  </div>

                  <div className="bg-white w-full h-45 rounded-lg border-2">
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

        {/* Right sidebar column */}
        <Col
          xs={2}
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
              T.C. Cumhurbaşkanlığı - Savunma Sanayii Başkanlığı himayesinde
              yürütülmektedir.
              <br />© 2023 Vizyoner Genç
            </div>
          </div>
        </Col>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
