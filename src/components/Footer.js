import { FaRegEnvelope } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';


console.log();

function Footer() {
  return (

    <div className="w-full mx-auto py-4 px-36 grid  gap-8 text-gray-600 bg-black" style={{ backgroundColor: '#303030' }}>
      <div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
        <div className="flex gap-x-4 text-gray-700">


          <div>
            <a>
              <img src="https://vizyonergenc.com/v2/images/logo2.png"></img>
              <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">

              </a>
              <br />
              <div className="h-[1px] bg-gray-100" style={{ width: "825%" }}></div>
            </a>
          </div>

          <ul className="flex -ml-10" style={{ justifyContent: 'flex-end' }}>
            <li className="p-2">
              <div className="flex flex-col items-center" style={{ marginLeft: '750px' }}>
              <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                  <FaTwitter color="white" size={25} />
                </a>
              </div>
            </li>

            <li className="p-2">
              <div className="flex flex-col items-center" >
              <a href="https://facebook.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                  <BsFacebook color="white" size={25} />
                </a>
              </div>
            </li>

            <li className="p-2">
              <div className="flex flex-col items-center">
              <a href="https://linkedin.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin color="white" size={25} />
                </a>
              </div>
            </li>

            <li className="p-2">
              <div className="flex flex-col items-center">
              <a href="https://youtube.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                  <FaYoutube color="white" size={25} />
                </a>
              </div>
            </li>

            <li className="p-2">
              <div className="flex flex-col items-center">
              <a href="https://instagram.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram color="white" size={25} />
                </a>
              </div>
            </li>

            <li className="p-2">
              <div className="flex flex-col items-center">
                <a href="#">
                  <AiFillQuestionCircle color="white" size={25} />
                </a>
              </div>
            </li>
          </ul>

        </div>
      </div>

      <div className="container mx-auto grid gap-y-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
          <nav>
            <h3 className="text-lg text-gray-300 font-bold">
              Vizyoner Genç'i indirin!
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3">

              <li>
                <a href="#">
                  <img
                    src="https://vizyonergenc.com/v2/images/appstore.png"
                    width="150px" height="45px" style={{ marginTop: "15px" }}
                    alt="" />

                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://vizyonergenc.com/v2/images/playstore.png"
                    width="150px" height="45px" style={{ marginTop: "15px" }}
                    alt="" />
                </a>
              </li>

            </ul>
          </nav>
          <nav>
            <br />
            <br />
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:underline">Kariyer</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline ">Etkinlik</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Sık Sorulan Sorular</a>
              </li>

            </ul>
          </nav>
          <nav>
            <br />
            <br />
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:underline">Hakkında</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Misyon - Vizyon</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">Hizmet Koşulları</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">KVKK Sözleşmesi</a>
              </li>

            </ul>
          </nav>
          <nav>
            <h3 className="text-lg text-gray-300 mb-4" style={{ fontWeight: 'bold' }}>
              Vizyoner Genç Bülten
            </h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a className="text-gray-400 ">Haftalık bülten, yeni iş ilanı bildirimlerini almak için üye olabilirsiniz.</a>

                <div className="flex items-center">
                  <input type="email" placeholder="E-posta adresinizi girin" className="border-gray-300 rounded px-2 py-1 mt-5 " />
                  <a href="#" style={{ marginLeft: '10px', marginTop: '10px' }}>
                    <FaRegEnvelope color="white" size={25} className="mt-2" />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-[1px] bg-gray-100"></div>
        <div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
          <div className="flex gap-x-4 text-gray-700">
            <div>
              <a className="text-gray-400 ">Vizyoner Genç, T.C. Cumhurbaşkanlığı - Savunma Sanayii Başkanlığı himayesinde yürütülmektedir.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer