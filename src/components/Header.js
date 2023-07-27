import { Link } from 'react-router-dom'; 

export default function Header() {
  return (
    <div className="bg-zinc-200  p-1  shadow-lg " >
      <div className="flex justify-between items-center h-22 max-w-[1240px] mx-auto px-3  ">
        <a href="#"><img src="https://vizyonergenc.com/v2/images/logo.png" alt="vizyoner genç"/></a> 
        <a href="#"><img className="h-10" src="https://vizyonergenc.com/images/SSB_amblem_2022.png"/></a>
        <ul className="flex ">
          <li className="p-2"><a href="#">İlanlar</a></li>
          <li className="p-2"><a href="#">Firmalar</a></li>
          <li className="p-2"><a href="#">Blog</a></li>
          <li className="p-2">< a href="#">Etkinlik</a></li>
          <li className="p-2"><a href="#">Bir Fikrim Var!</a></li>
          <li className="p-2">< a href="#"><img className="h-10" src="https://vizyonergenc.com/images/kok_logo_renkli_png.png"></img></a></li>
          <li className="p-2">< a href="#"><img  className="h-10"src="https://vizyonergenc.com/images/kalfa_logo_renkli.png"></img></a></li>
          <li className="p-2"><a href="#">Bize Ulaş</a></li>
          <Link to={"/kurumsal/"}><li className="p-2">Kurumsal Giriş</li></Link> 
          </ul>  
      </div>
      </div>
  )
}
