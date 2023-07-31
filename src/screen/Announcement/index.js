import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles.css";

function App() {
  return (
    <div>
      <HeaderMain />

      <Grid fluid className="app-main">
        <Col className="content-column" xs>
          <h1 className="dark:text-white font-bold text-4xl p-2 text-center">
            Genç Yetenek Programı 2023
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-15 p-5 ">
            <div className="bg-white rounded-lg   w-full h-45 ">
              <img
                className="w-95 h-auto mb-4"
                src="https://economicontr.com/wp-content/uploads/2023/05/aselsan-asels-bedelsiz.jpg"
                alt="ilan"
              />

              <h1 className="dark:text-white font-bold text-4xl p-2 text-center">
                ASELSAN
              </h1>
              <p>
                R-Force Genç Yetenek Programımız başlıyor! Kariyerine Aselsan’da
                başlamaya ve Aselsan’ın ayrıcalıklarını keşfetmeye hazırsan seni
                de aramızda görmekten mutluluk duyarız.
                <p>
                  Üniversitelerin Bilgisayar Mühendisliği, Elektrik-Elektronik
                  Mühendisliği, Endüstri Mühendisliği, Havacılık ve Uzay
                  Mühendisliği, Makine Mühendisliği, Uçak Mühendisliği
                  bölümlerinin birinde 3. veya 4. sınıf öğrencisiysen, Genel not
                  ortalaman 3.00 ve üzerinde ise, Haftada en az 1 gün Aselsan’da
                  çalışabileceksen, Hadi şimdi kariyerin için büyük bir adım at,
                  R-Forcer olma fırsatını kaçırma!
                </p>
                <p>
                  Alanında en iyilerle eşsiz bir deneyim elde etmek için
                  başvurunu bekliyoruz.
                </p>
                <p></p>
              </p>
            </div>
          </div>
        </Col>

        <Col className="nav-column " xs={100} sm={3}>
          <div className="flex items-center justify-center sticky top-0 p-5  ">
            <div className="bg-white w-2/3 md:w-11/12  ">
              <div className="flex items-center justify-center pt-5 flex-col">
                <img
                  className=" w-40 "
                  src="https://www.aselsan.com/assets/logo/aselsan-circle.svg"
                />
                <h1 className="text-gray-800 font-semibold text-xl mt-5">
                  İLAN BİLGİLERİ
                </h1>
                <h1 className="text-gray-800 text-l p-3 ">İlan No:3356</h1>
                <h1 className="text-gray-800 font-bold text-l p-3">
                  İlan Tipi:Tam zamanlı
                </h1>
                <h1 className="text-gray-800 text-sm p-4 text-center">
                  Başvuru Sayısı: 1000-5000{" "}
                </h1>

                <div className="flex items-center justify-center mt-3 mb-6 flex-col">
                  <h1 className="text-gray-800 text-m p-2 ">
                    <u>İletişim</u>
                  </h1>
                  <div className="flex mt-2 max-w-[150px] ">
                    <AiFillLinkedin className="text-7xl " />
                    <AiFillInstagram className="text-7xl " />
                    <AiFillFacebook className="text-7xl " />
                    <AiFillYoutube className="text-7xl" />
                  </div>
                </div>
              </div>
              <hr />

              <hr />
              <p className="text-m text-center [100px] ">
                14.07.2023 - 13.08.2023
              </p>
            </div>
          </div>
        </Col>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
