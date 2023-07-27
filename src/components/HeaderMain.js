import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { PiBagSimple } from 'react-icons/pi';
import { PiNewspaperBold } from 'react-icons/pi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiBadgeCheck } from 'react-icons/bi';
import { BiMessage } from 'react-icons/bi';
import { BiBell } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { PiProjectorScreenChartBold } from 'react-icons/pi';


export default function header() {
  return (
    <div className="bg-[#0073b5] p-1 " >

      <div className="flex justify-between items-center h-18 max-w-[1240px] mx-auto px-4  ">
        <a href="#"><img src="https://vizyonergenc.com/v2/images/logo2.png" width={100} /> </a>

        <ul className="flex -ml-10">

          <li className="p-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <AiOutlineHome color="white" />
              </a>
              <a className="text-white mt-1 text-xs" href="#">Anasayfa</a>
            </div>
          </li>

          <li className="p-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <PiBagSimple color="white" />
              </a>
              <a className="text-white mt-1 text-xs" href="#">İlanlar</a>
            </div>
          </li>

          <li className="p-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <AiOutlineUnorderedList color="white" />
              </a>
              <a className="text-white mt-1 text-xs" href="#">Firmalar</a>
            </div>
          </li>

          <li className="p-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <PiNewspaperBold color="white" />
              </a>
              <a className="text-white mt-1 text-xs" href="#">Başvurularım</a>
            </div>
          </li>

          <li className="p-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <PiProjectorScreenChartBold color="white" />
              </a>
              <a className="text-white mt-1 text-xs" href="#">Projelerim</a>
            </div>
          </li>

          <li className="p-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <BiBadgeCheck color="white" />
              </a>
              <a className="text-white mt-1 text-xs" href="#">İlan Eşleşmelerim</a>
            </div>
          </li>
          <li className="p-2">< a href="#"><img className="h-10" src="https://vizyonergenc.com/images/kok_logo_renkli_png.png" width={40}></img></a></li>
          <li className="p-2">< a href="#"><img className="h-10" src="https://vizyonergenc.com/images/kalfa_logo_renkli.png" width={40}></img></a></li>
          
          <li className="p-2">
            <input
              type="search"
              placeholder=" Ara"
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
            />
          </li>
        </ul>

        <ul className="flex">
          <li className="p-2 mx-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <BiMessage color="white" size={25} />
                <a className="text-white mt-1 text-xs" href="#"></a>
              </a>
            </div>
          </li>

          <li className="p-2 mx-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <BiBell color="white" size={25} />
                <a className="text-white mt-1 text-xs" href="#"></a>
              </a>
            </div>
          </li>

          <li className="p-2 mx-2">
            <div className="flex flex-col items-center">
              <a href="#">
                <AiOutlineUser color="white" size={25} />
                <a className="text-white mt-1 text-xs" href="#"></a>
              </a>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}