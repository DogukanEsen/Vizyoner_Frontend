import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import { useState } from "react";
import Validation from "../screen/Login/Validation";
import axios from "axios";
import { loginUser } from "../services/AuthService";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../toasts/Toast";

const slideImages = [
  {
    url: "https://media.licdn.com/dms/image/D4D22AQG_7i1KHQEAGg/feedshare-shrink_800/0/1685541970635?e=1692835200&v=beta&t=q6OPZoXwudMAlcnbrX0Ig0Nk1wnGrwJ7DB6jBoqaPq8",
    //caption: 'İlk Slayt'
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQHmPh9O14-LUA/feedshare-shrink_2048_1536/0/1689841293586?e=1692835200&v=beta&t=K3X2dGcKta-bUXq2jtytWV1iyucJDRc-ylq7M4loaGw",
    //caption: 'İkinci Slayt'
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQFqZmhSS29t-Q/feedshare-shrink_800/0/1688980662169?e=1692835200&v=beta&t=1hhzzvV7Ds_ueV7fxNu6-WELXgC_rabiI-3AHmV2io4",
    //caption: 'Üçüncü Slayt'
  },
  {
    url: "https://vizyonergenc.com/storage/posts/July2023/bNARrYSar3W6fEmJxdCy.jpg",
    // caption: 'Dördüncü Slayt'
  },
  {
    url: "https://vizyonergenc.com/storage/posts/July2023/s2LAV4JbfeClIB3AWfA3.jpg",
    //caption: 'Beşinci Slayt'
  },
  {
    url: "https://vizyonergenc.com/storage/1401761/j2YAyrHc1YKTVjCZNxjMmq3P9h4eFUbA8J7qaWZW.jpeg",
    //caption: 'Altıncı Slayt'
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  marginLeft: "30px",
};

const spanStyle = {
  fontSize: "20px",
  background: "#efefef",
  color: "#000000",
};

export default function Herosection() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  //AUTH begins

  const sendRequest = () => {
    loginUser({
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        toastSuccess("Kayıt başarılı.");
        localStorage.setItem("tokenKey", response.data.token);
        localStorage.setItem("currentUser", response.data.userId);
      })
      .catch((err) => {
        toastError(err);
        console.log(err);
      });
    localStorage.setItem("email", values.email);
  };
  const handleLogin = () => {
    sendRequest();
  };
  //AUTH ends
  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto">
      <div className="slide-container" style={{ marginLeft: "40px" }}>
        <Fade>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div
                style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
              >
                <span style={spanStyle}>{image.caption}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>

      <div className="bg-zinc-100 flex flex-col justify-center sm-block">
        <form
          className="max-w-[400px] w-full mx-auto bg-zinc-100 p-8 px-8 roundend-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-green-700">
            Vizyoner Genç'e Giriş Yap!
          </h2>
          <div className="flex flex-col text-gray-400 py-5">
            <label className="font-bold">E-posta Adresi</label>
            <input
              className="rounded-lg text-gray-400 mt-2 p-2"
              type="email"
              placeholder="E-postanızı giriniz"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.email && (
              <p style={{ color: "green", fontSize: "17px" }}>{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col text-gray-400 py-3">
            <label className="font-bold">Şifre</label>
            <input
              className="rounded-lg text-gray-400 mt-2 p-2"
              type="password"
              placeholder="Şifrenizi giriniz"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.password && (
              <p style={{ color: "green", fontSize: "17px" }}>
                {errors.password}
              </p>
            )}
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex-items-center">
              <input className="mr-2" type="checkbox" />
              Beni Hatırla
            </p>
            <a href="#">
              <p>Şifreni mi unuttun?</p>
            </a>
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p>
              Hesabınız yok mu?{" "}
              <Link to={"/register/"}>
                <u>Kayıt olun..</u>
              </Link>
            </p>
          </div>
          <div>
            <button
              className="w-full my-5 py-2 bg-green-500 shadow-lg hover:shadow-teal-500/60 font-semibold rounded-lg"
              type="submit"
              onClick={() => handleLogin()}
            >
              Oturum Aç
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
