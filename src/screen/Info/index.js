import React, { useEffect, useState } from "react";
import HeaderMain from "../../components/HeaderMain";
import resim1 from "./image/image.jpg";
import resim2 from "./image/image2.jpg";
import { BsFillBuildingFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { getAdvertByID } from "../../services/AdvertService";

export default function () {
  const { id } = useParams();
  const [advertData, setAdverts] = useState([]);
  const [companyData, setCompany] = useState([]);
  const getAdvert = (id) => {
    getAdvertByID(id).then((res) => {
      setAdverts(res.data);
      setCompany(res.data.company);
    });
  };
  useEffect(() => {
    getAdvert(id);
  }, []);
  return (
    <div className="bg-white ">
      <HeaderMain />
      <div className=" bg-gray-100 h-42 shadow-lg  columns-2  flex justify-end">
        <div className=" rounded-lg h-32 mt-7 flex items-center">
          <img
            className="h-32 object-cover mb-4"
            src={
              advertData.image === null
                ? "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
                : advertData.image
            }
            alt="ilan"
          />
        </div>
        <div className="text-left mt-2 p-8">
          <h3 className="text-lg font-semibold p-1">{companyData.name}</h3>
          <div className="flex">
            {" "}
            <p className="p-1">
              <BsFillBuildingFill />
            </p>
            <p className="p-1">{advertData.title}</p>
          </div>
          <div className="flex">
            {" "}
            <p className="p-1">
              <HiLocationMarker />
            </p>
            <p className="p-1">{advertData.location}</p>
          </div>
          <div className="flex">
            {" "}
            <p className="p-1">
              <SlCalender />
            </p>
            <p className="p-1"> {advertData.endDate}</p>
          </div>
        </div>
        <div className="ml-72">
          <img className="h-48 opacity-25 " src={resim1} alt="ilan" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 content-right-offset margin-bottom-20">
            <div style={{ display: "flex " }}>
              <img
                className="p-6"
                src={advertData.image === null ? resim2 : advertData.image}
                alt="ilan2"
              />
              <Link to={"/basvuruform/" + id} style={{ marginTop: "30px" }}>
                <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                  Başvur
                </button>
              </Link>
            </div>

            <div>
              <p>{advertData.title}</p>

              <p>{advertData.description}</p>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
