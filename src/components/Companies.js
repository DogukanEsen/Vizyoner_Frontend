import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles.css";

function App() {
    const companiesData = [
        { title: "Havelsan", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "Aselsan", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "Roketsan", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "SAVUNMA SANAYİİ BAŞKANLIĞI", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "Aselsannet", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "ASARTECH", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "BİAS Mühendislik", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "BAYKAR Makina", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
        { title: "Aerotim MÜHENDİSLİK", logoUrl: "https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png" },
    ];

    const containerStyle = {
        margin: '0 100px', 
    };

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCompanies = companiesData.filter((company) =>
        company.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={containerStyle}>
            <Grid fluid className="app-main">
                <Col className="nav-column" xs={12} sm={3} style={{ marginTop: '75px', paddingRight: '10px' }}>
                    <div className='flex items-center justify-center sticky top-0 p-5  '>
                        <div className="bg-white w-2/3 md:w-11/12   rounded-lg shadow-lg hover:shadow-gray-400 ">
                            <br />
                            <div className='flex items-center '>
                                <div style={{ display: 'flex', alignItems: 'center', borderRadius: '35px', backgroundColor: '#f2f2f2', marginLeft: '10px', marginRight: '10px' }}>
                                    <input
                                        type="search"
                                        placeholder=" Firma ara..."
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
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <a href="#" style={{ marginLeft: '10px', fontSize: '24px', color: '#333' }}>
                                        <AiOutlineSearch />
                                    </a>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="col-xs-12 text-xs text-center ">
                                <ul class="flex flex-wrap gap-1 justify-center">
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Kariyer</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Blog</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Etkinlik</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>SSB Katolog</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Hakkında</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Misyon - Vizyon</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }} >Hizmet Koşulları</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>KVKK Sözleşmesi</a></li>
                                    <li class="p-2 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Sık Sorulan Sorular</a></li>
                                    <li class="p-2 text-blue-600 font-bold"><a href="#" style={{ color: '#31a8e0' }}>Bize Ulaş</a></li>
                                </ul>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <p className='text-xs text-center'>

                                <span style={{ color: '#444' }}>Vizyoner Genç</span><br />
                                <div className="flex ">
                                    <img
                                        src="https://vizyonergenc.com/v2/images/SSB_amblem_2022.png"
                                        style={{ width: '25px', height: '25px', marginLeft: '10px' }}
                                    />
                                    <span style={{ color: '#444' }}>T.C. Cumhurbaşkanlığı - Savunma Sanayii Başkanlığı himayesinde yürütülmektedir.</span><br />
                                </div>
                                <span style={{ color: '#444' }}>© 2023 Vizyoner Genç</span>
                            </p>
                            <br />
                        </div>
                    </div>

                </Col>

                <Col className="content-column" xs style={{  paddingRight: '17px' }}>
                    <br />
                    <h1 className='dark:text-black font-bold font-roboto text-4xl p-2 text-center'>Firmalar</h1>
                    <br />
                    <hr />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
                        {filteredCompanies.map((company, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-gray-500 w-full h-45">
                                <img
                                    className="w-full h-45 object-cover mb-4"
                                    src={company.logoUrl}
                                    alt="firma"
                                />
                                <h3 className="text-lg font-semibold">{company.title}</h3>
                                <br />
                            </div>
                        ))}
                    </div>

                </Col>
            </Grid>
        </div>
    );
}

export default App;