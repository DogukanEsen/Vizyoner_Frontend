import React from "react";
import Header from "../../components/Header";
import Mobileapp from "../../components/Mobileapp";
import Footer from "../../components/Footer";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import Validation from "../Register/Validation";
import axios from "axios";

const slideImages = [
  {
    url: "https://vizyonergenc.com/storage/posts/July2023/bNARrYSar3W6fEmJxdCy.jpg",
    //caption: 'İlk Slayt'
  },
  {
    url: "https://vizyonergenc.com/storage/posts/July2023/s2LAV4JbfeClIB3AWfA3.jpg",
    //caption: 'İkinci Slayt'
  },
  {
    url: "https://vizyonergenc.com/storage/1401761/j2YAyrHc1YKTVjCZNxjMmq3P9h4eFUbA8J7qaWZW.jpeg",
    //caption: 'Üçüncü Slayt'
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQG_7i1KHQEAGg/feedshare-shrink_800/0/1685541970635?e=1692835200&v=beta&t=q6OPZoXwudMAlcnbrX0Ig0Nk1wnGrwJ7DB6jBoqaPq8",
    //caption: 'Dördüncü Slayt'
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQHmPh9O14-LUA/feedshare-shrink_2048_1536/0/1689841293586?e=1692835200&v=beta&t=K3X2dGcKta-bUXq2jtytWV1iyucJDRc-ylq7M4loaGw",
    //caption: 'Beşinci Slayt'
  },
  {
    url: "https://media.licdn.com/dms/image/D4D22AQFqZmhSS29t-Q/feedshare-shrink_800/0/1688980662169?e=1692835200&v=beta&t=1hhzzvV7Ds_ueV7fxNu6-WELXgC_rabiI-3AHmV2io4",
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
  background: "#f4f4f5",
  color: "#f4f4f5",
};

function Index() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [Email, setEmail] = useState({});
  const [Password, setPassword] = useState({});
  const [Username, setUsername] = useState({});

  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };
  const instance = axios.create({
    baseURL: "http://localhost:8080", // Burada localhost ve 8080, isteğin gönderileceği sunucunun adresi ve portu
    headers: {
      "Content-Type": "application/json",
    },
  });
  const sendRequest = async (path) => {
    try {
      const response = await instance.post(
        "/auth/" + path,
        {
          firstname: Username,
          lastname: Username,
          email: Email,
          password: Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;
      localStorage.setItem("tokenKey", result.accessToken);
      localStorage.setItem("currentUser", result.userId);
      localStorage.setItem("email", Email);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRegister = () => {
    sendRequest("register/user");
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));
  }
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto">
        <div className="slide-container">
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
            className="max-w-[500px] w-full mx-auto bg-zinc-100 p-5 px-10 rounded-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl dark:text-white font-bold text-center text-green-600">
              Vizyoner Genç'e Kayıt Ol!
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-gray-400 py-3">
              <div className="flex flex-col w-full sm:pr-2">
                <label className="font-bold">Ad - Soyad</label>
                <input
                  className="rounded-lg text-gray-400 mt-2 p-2 "
                  type="text"
                  value={values.name}
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                    handleUsername(e.target.value);
                  }}
                />
                {errors.name && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {errors.name}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col text-gray-400 py-3  ">
              <label className="font-bold ">E-posta Adresi</label>
              <input
                className="rounded-lg text-gray-400 mt-2 p-2"
                type="email"
                value={values.email}
                name="email"
                onChange={(e) => {
                  handleChange(e);
                  handleEmail(e.target.value);
                }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "18px" }}>{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col text-gray-400 py-3">
              <label className="font-bold">Şifre</label>
              <input
                className="rounded-lg text-gray-400 mt-2 p-2"
                type="password"
                value={values.password}
                name="password"
                onChange={(e) => {
                  handleChange(e);
                  handlePassword(e.target.value);
                }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "18px" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex flex-col text-gray-400 py-3">
              <label className="font-bold">Şifre Tekrar</label>
              <input
                className="rounded-lg text-gray-400 mt-2 p-2"
                type="password"
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red", fontSize: "18px" }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="flex justify-center text-gray-400 py-2">
              <button
                className="w-full my-5 py-2 bg-green-500 shadow-lg hover:shadow-teal-600/60 font-semibold rounded-lg text-black"
                type="submit"
                onClick={() => handleRegister()}
              >
                Kayıt olun
              </button>
            </div>
          </form>
        </div>
      </div>
      <Mobileapp />
      <Footer />
    </div>
  );
}

export default Index;
