import React, { useEffect, useState } from "react";
import { Grid, Col } from "react-flexbox-grid";
import "./styles.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { getApplications } from "../../services/ApplicationService";
import { Link } from "react-router-dom";
function App() {
  const [applicationsData, setApplications] = useState([]);

  //AUTH
  const fetchApplications = () => {
    getApplications(localStorage.getItem("tokenKey"))
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => console.log({ error }));
  };
  useEffect(() => {
    fetchApplications();
  }, []);
  useEffect(() => {
    console.log("applications state güncellendi:", applicationsData);
  }, [applicationsData]);
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
            {applicationsData.map((application, index) => (
              <Link to={"/ilan/" + application.advert.id}>
                <div className="bg-white  w-full h-45 rounded-lg border-2">
                  <div className="bg-white rounded-lg w-full h-45 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                      {application.advert.company.name}
                    </h3>
                    <h4 className="text-l font-semibold text-blue-500">
                      {application.advert.title}
                    </h4>
                  </div>
                  <div className="bg-white w-full h-45   p-4">
                    <div className="flex mt-2 max-w-[450px]">
                      <AiOutlineEnvironment className="text-2xl" />
                      <p className="text-s">{application.advert.location}</p>
                    </div>
                    <div className="flex mt-2 max-w-[450px]">
                      <FaCalendarAlt className="text-2xl" />
                      <p className="text-s">
                        {application.advert.startDate}
                        ---------
                        {application.advert.endDate}---------
                        {application.advert.updateDate}
                      </p>
                    </div>
                    <div className="flex mt-2 max-w-[450px]">
                      <FaClock className="text-2xl" />
                      <p className="text-s">{application.advert.category}</p>
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
              </Link>
            ))}
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
