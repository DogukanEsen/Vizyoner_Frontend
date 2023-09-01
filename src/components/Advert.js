import { AiOutlineSearch } from "react-icons/ai";
import { Grid, Col } from "react-flexbox-grid";
import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { getAllAdverts } from "../services/AdvertService";

function App() {
  const containerStyle = {
    margin: "0 100px", // Adjust the margin value as per your preference
  };

  const [advertData, setAdverts] = useState([]);
  const fetchAdverts = async () => {
    getAllAdverts()
      .then((res) => setAdverts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAdverts();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterOptions = [
    "Tüm İlanlar",
    "Staj İlanları",
    "İş ilanları",
    "Yarışma",
  ];

  const filteredAdvert = advertData.filter(
    (advert) =>
      advert.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterOption === "all" || advert.category === filterOption)
  );

  return (
    <div style={containerStyle}>
      <Grid fluid className="app-main">
        <Col
          className="nav-column"
          xs={12}
          sm={3}
          style={{ marginTop: "75px", paddingRight: "10px" }}
        >
          <div className="flex items-center justify-center sticky top-0 p-5">
            <div className="bg-white w-2/3 md:w-11/12 rounded-lg shadow-lg hover:shadow-gray-400">
              <br />
              <div className="flex items-center">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "35px",
                    backgroundColor: "#f2f2f2",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <input
                    type="search"
                    placeholder=" İlan adı..."
                    style={{
                      width: "80%",
                      height: "36px",
                      borderRadius: "5px",
                      border: "none",
                      padding: "5px",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "16px",
                      color: "#333",
                      backgroundColor: "#f2f2f2",
                      marginTop: "2px",
                      marginLeft: "20px",
                      borderRadius: "35px",
                    }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <a
                    href="#"
                    style={{
                      marginLeft: "10px",
                      fontSize: "24px",
                      color: "#333",
                    }}
                  >
                    <AiOutlineSearch />
                  </a>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div className="col-xs-12 text-xs text-center">
                <ul className="flex flex-wrap gap-1 justify-center">
                  <li
                    key="all"
                    className={`p-2 font-bold ${
                      filterOption === "all" ? "text-blue-600" : ""
                    }`}
                    onClick={() => setFilterOption("all")}
                  >
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Tüm İlanlar
                    </a>
                  </li>
                  <li
                    key="staj"
                    className={`p-2 font-bold ${
                      filterOption === "staj" ? "text-blue-600" : ""
                    }`}
                    onClick={() => setFilterOption("staj")}
                  >
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Staj İlanları
                    </a>
                  </li>
                  <li
                    key="is"
                    className={`p-2 font-bold ${
                      filterOption === "is" ? "text-blue-600" : ""
                    }`}
                    onClick={() => setFilterOption("is")}
                  >
                    <a href="#" style={{ color: "#31a8e0" }}>
                      İş İlanları
                    </a>
                  </li>
                  <li
                    key="yarisma"
                    className={`p-2 font-bold ${
                      filterOption === "yarisma" ? "text-blue-600" : ""
                    }`}
                    onClick={() => setFilterOption("yarisma")}
                  >
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Yarışma
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <hr />
              <br />
              <div className="col-xs-12 text-xs text-center ">
                <ul class="flex flex-wrap gap-1 justify-center">
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Kariyer
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Blog
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Etkinlik
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      SSB Katolog
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Hakkında
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Misyon - Vizyon
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Hizmet Koşulları
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      KVKK Sözleşmesi
                    </a>
                  </li>
                  <li class="p-2 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Sık Sorulan Sorular
                    </a>
                  </li>
                  <li class="p-2 text-blue-600 font-bold">
                    <a href="#" style={{ color: "#31a8e0" }}>
                      Bize Ulaş
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <hr />
              <br />
              <p className="text-xs text-center">
                <span style={{ color: "#444" }}>Vizyoner Genç</span>
                <br />
                <div className="flex">
                  <img
                    src="https://vizyonergenc.com/v2/images/SSB_amblem_2022.png"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "10px",
                    }}
                    alt="SSB_amblem"
                  />
                  <span style={{ color: "#444" }}>
                    T.C. Cumhurbaşkanlığı - Savunma Sanayii Başkanlığı
                    himayesinde yürütülmektedir.
                  </span>
                  <br />
                </div>
                <span style={{ color: "#444" }}>© 2023 Vizyoner Genç</span>
              </p>
              <br />
            </div>
          </div>
        </Col>
        <Col className="content-column" xs style={{ paddingRight: "17px" }}>
          <br />
          <h1 className="dark:text-black font-bold font-roboto text-4xl p-2 text-center">
            İlanlar
          </h1>
          <br />
          <hr />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
            {filteredAdvert.map((advert, index) => (
              <Link to={"/ilan/" + advert.id}>
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-gray-500 w-full h-45"
                >
                  <img
                    className="w-full h-45 object-cover mb-4"
                    src={"data:image/png;base64," + advert.image}
                    alt="ilan"
                  />
                  <h3 className="text-lg font-semibold">{advert.title}</h3>
                  <br />
                </div>
              </Link>
            ))}
          </div>
        </Col>
      </Grid>
    </div>
  );
}

export default App;
