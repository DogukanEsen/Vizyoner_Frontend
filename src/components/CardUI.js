import React from 'react';
import { AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillYoutube,AiFillGithub } from 'react-icons/ai';
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles.css";


function App() {
  return (
    
    <Grid fluid className="app-main">
      <Col className="nav-column " xs={12} sm={3}>
      <div className='flex items-center justify-center sticky top-0 p-5  '>
          <div className="bg-white w-2/3 md:w-11/12   rounded-lg shadow-lg hover:shadow-teal-600 ">
            <div className='flex items-center justify-center pt-5 flex-col'>
            <img  className="rounded-full w-40 "src="https://media.licdn.com/dms/image/D4D03AQGMTN0aBCU1Qg/profile-displayphoto-shrink_800_800/0/1689426716772?e=1695859200&v=beta&t=p7QsEIXLp6ZoJ8sxTE-KUkHOdR9hH_nXLMwmJ85o-Z8" />
           <h1 className='text-gray-800 font-semibold text-xl mt-5'>Saliha Yıldırım</h1>
           <h1 className='text-gray-800 text-sm p-1 '>Elazığ,Türkiye</h1>
           <h1 className='text-gray-800 text-sm p-1'>Yazılım Mühendisi</h1>
           <h1  className='text-gray-800 text-sm p-4 text-center'>merhaba özelliklerimin arasında hiçbir şey yok</h1>
 
           <div className='flex items-center justify-center mt-3 mb-6 flex-col'>
            <h1 className='text-gray-800 text-sm p-2 '><u>Bana Ulaşın</u></h1>
            <div className='flex mt-2 max-w-[100px] '>
             <AiFillFacebook className='text-3xl '/>
            <AiFillLinkedin className='text-3xl '/>
            <AiFillInstagram className='text-3xl '/>
            <AiFillYoutube className='text-3xl'/>
            <AiFillGithub className='text-3xl'/>              
            </div>
           </div>
          </div>  
          <hr/>
          <div className="col-xs-12 text-xs text-center ">
          <ul class="flex flex-wrap gap-1">
               <li class="p-2 text-blue-600 font-bold">Kariyer</li>
                 <li class="p-2 text-blue-600 font-bold">Blog</li>
                 <li class="p-2 text-blue-600 font-bold">Etkinlik</li>
                 <li class="p-2 text-blue-600 font-bold">SSB Katalog</li>
                 <li class="p-2 text-blue-600 font-bold">Hakkında</li>
                 <li class="p-2 text-blue-600 font-bold">Misyon - Vizyon</li>
                 <li class="p-2 text-blue-600 font-bold">Hizmet Koşulları</li>
                 <li class="p-2 text-blue-600 font-bold">KVKK Sözleşmesi</li>
                 <li class="p-2 text-blue-600 font-bold">Sık Sorulan Sorular</li>
                <li class="p-2 text-blue-600 font-bold">Bize Ulaş</li>
                   </ul>
                </div>
                <hr/>
               <p className='text-xs text-center '>Vizyoner Genç
                 SAVUNMA SANAYİİ BAŞKANLIĞI T.C. Cumhurbaşkanlığı - Savunma Sanayii Başkanlığı himayesinde yürütülmektedir.
                  © 2023 Vizyoner Genç</p>          
                </div>
        
      </div>
      </Col>
  
      <Col className="content-column" xs>
        
        <h1 className='dark:text-white font-bold text-4xl p-2 text-center'>İLANLAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 ">
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg  hover:shadow-teal-500  w-full h-45 ">
            <img
              className="w-full h-45 object-cover mb-4"
              src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
              alt="ilan"
            />
            <h3 className="text-lg font-semibold">Havelsan</h3>
            <p>Kıdemli İş Geliştirme Uzmanı</p>
          </div>
          </div>
       
      </Col>
    </Grid>
       
  );
}

export default App;