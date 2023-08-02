import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import resim1 from './image/image.jpg'
import resim2 from './image/image2.jpg'
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

export default function
  () {
  return (
    <div className='bg-white '>
      <HeaderMain />
      <div className=" bg-gray-100 h-42 shadow-lg  columns-2  flex justify-end" >
        <div className=" rounded-lg h-32 mt-7 flex items-center">
          <img
            className="h-32 object-cover mb-4"
            src="https://kpm.metu.edu.tr/wp-content/uploads/2023/02/HAVELSAN_DIKEY_LOGO-Revahe-Ehaver-1024x675.png"
            alt="ilan" />
        </div>
        <div className='text-left mt-2 p-8'>
          <h3 className="text-lg font-semibold p-1">Havelsan</h3>
          <p className='p-1'>< BsFillBuildingFill /> </p>
          <p className='p-1'><HiLocationMarker /></p>
          < p className='p-1'><SlCalender /></p>
        </div>
        <div className='ml-72'>
          <img className="h-48 opacity-25 " src={resim1} alt="ilan" />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 col-lg-7 content-right-offset margin-bottom-20'>
            <div style={{ display: 'flex' }}>
              <img className="p-6" src={resim2} alt="ilan2" />
              <Link to="/basvuruform" style={{ marginTop: '30px' }}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Başvur
                </button>
              </Link>
            </div>

            <div>
              <p>
                R-Force Genç Yetenek Programımız başlıyor! Kariyerine Roketsan’da başlamaya ve Roketsan’ın ayrıcalıklarını keşfetmeye hazırsan seni de aramızda görmekten mutluluk duyarız.
              </p>

              <p><br /></p>
              <li>Üniversitelerin Bilgisayar Mühendisliği, Elektrik-Elektronik Mühendisliği, Endüstri Mühendisliği, Havacılık ve Uzay Mühendisliği, Makine Mühendisliği,
                Uçak Mühendisliği bölümlerinin birinde 3. veya 4. sınıf öğrencisiysen,</li>
              <li>Genel not ortalaman 3.00 ve üzerinde ise,</li>
              <li>Haftada en az 1 gün Roketsan’da çalışabileceksen</li>

              <p><br /></p>
              <p>
                Hadi şimdi kariyerin için büyük bir adım at, R-Forcer olma fırsatını kaçırma! Alanında en iyilerle eşsiz bir deneyim elde etmek için başvurunu bekliyoruz.
              </p>
              <p><br /></p>

            </div>

          </div>



        </div>
      </div>
      <Footer />
    </div>

  )
}
