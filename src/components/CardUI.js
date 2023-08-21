import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
import { Link } from "react-router-dom";

function App() {
  // const [adverts, setAdverts] = useState([]); // useState fonksiyonunu düzgün bir şekilde kullanın
  // const fetchAdverts = async () => {
  //   try {
  //     const response = await axios.get(
  //       " http://localhost:8080/api/adverts/getAllAdverts"
  //     );
  //     setAdverts(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-7 content-right-offset margin-bottom-20"></div>
        <Grid fluid className="app-main">
          <Col className="nav-column " xs={12} sm={3}>
            <div className="flex items-center justify-center sticky top-0 p-5  ">
              <div className="bg-white w-2/3 md:w-11/12   rounded-lg shadow-lg hover:shadow-teal-600 ">
                <div className="flex items-center justify-center pt-5 flex-col">
                  <img
                    className="rounded-full w-40 "
                    src="https://media.licdn.com/dms/image/D4D03AQGMTN0aBCU1Qg/profile-displayphoto-shrink_800_800/0/1689426716772?e=1695859200&v=beta&t=p7QsEIXLp6ZoJ8sxTE-KUkHOdR9hH_nXLMwmJ85o-Z8"
                  />
                  <h1 className="text-gray-800 font-semibold text-xl mt-5">
                    Saliha Yıldırım
                  </h1>
                  <h1 className="text-gray-800 text-sm p-1 ">Elazığ,Türkiye</h1>
                  <h1 className="text-gray-800 text-sm p-1">
                    Yazılım Mühendisi
                  </h1>

                  <div className="flex items-center justify-center mt-3 mb-6 flex-col">
                    <h1 className="text-gray-800 text-sm p-2 font-bold">
                      <u>Bana Ulaşın</u>
                    </h1>
                    <div className="flex mt-2 max-w-[100px] ">
                      <AiFillFacebook className="text-3xl " />
                      <AiFillLinkedin className="text-3xl " />
                      <AiFillInstagram className="text-3xl " />
                      <AiFillYoutube className="text-3xl" />
                      <AiFillGithub className="text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className="content-column" xs>
            {/* buraya listeleme kısmını koydummmmmmmmmmmmmmm*/}
            <div className=" p-2 ">
              <p className=" font-semibold text-xl">Önerilen İlanlar</p>
              <Link to="/ilanlar/">
                <div className=" flex bg-white shadow-lg  hover:shadow-teal-500  ">
                  <img
                    className="w-[80px]"
                    src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
                    alt="ilan"
                  />
                  <p className="p-4">R-FORCE Genç Yetenek Programı 2023</p>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
              {/* {adverts.map((advert) => (
                <Link to="/ilanlar/" key={advert.id}>
                  {console.log(advert)}
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-teal-500 w-full h-45 flex items-center justify-center">
                    <img
                      className="w-full h-45 object-cover mb-4"
                      src={"data:image/png;base64," + advert.image}
                      alt="ilan"
                    />
                    <h3 className="text-lg font-semibold">{advert.title}</h3>
                  </div>
                </Link>
              ))} */}
            </div>
          </Col>
        </Grid>
      </div>
    </div>
  );
}

export default App;
