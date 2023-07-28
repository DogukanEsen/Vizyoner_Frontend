import React from 'react'
import { useState } from 'react';
import Validation from './Validation';

export default function Index() {
   const [values, setValues] = useState({
    email: '',
    password: ''
  });

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
        <div className="bg-zinc-100  p-2 " >
      <div className="flex gap-60 items-center h-22 max-w-[1240px] px-2  ">
        <a href="#"><img className="max-w-[250px] "src="https://kurumsal.vizyonergenc.com/img/brand/logo.png" alt="logo" /></a> 
        <a href="#"><img className="h-20" src="https://kurumsal.vizyonergenc.com/img/brand/ssblogo.svg" alt="logo"/></a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto">
         
      <div className="bg-zinc-100 flex flex-col justify-center sm-block">
        <form className="max-w-[400px] w-full mx-auto bg-zinc-100 p-8 px-8 roundend-lg" onSubmit={handleSubmit}>
          
          <div className="flex flex-col text-gray-400 py-3">
            <label className="font-bold">E-posta Adresi</label>
            <input className="rounded-lg text-gray-400 mt-2 p-2" type="email" placeholder='E-postanızı giriniz' value={values.email} name='email' onChange={handleChange} />
            {errors.email && <p style={{ color: "red", fontSize: "17px" }}>{errors.email}</p>}
          </div>
          <div className="flex flex-col text-gray-400 py-3">
            <label className="font-bold">Şifre</label>
            <input className="rounded-lg text-gray-400 mt-2 p-2" type="password" placeholder='Şifrenizi giriniz' value={values.password} name='password' onChange={handleChange} />
            {errors.password && <p style={{ color: "red", fontSize: "17px" }}>{errors.password}</p>}
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex-items-center'>
              <input className="mr-2" type="checkbox" />
              Beni Hatırla
            </p>
            <a href="#"><p>Şifreni mi unuttun?</p></a>
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
          <p>Hesabınız yok mu?  <u>Kayıt olun..</u></p>
          </div>
          <div><button className="w-full my-5 py-2 bg-green-500 shadow-lg hover:shadow-teal-600/60 font-semibold rounded-lg" type="submit">Oturum Aç</button></div>
        </form>
        </div>
        <div>
            <img src="https://kurumsal.vizyonergenc.com/img/brand/login_bg.svg" alt="kurumsal"/>
    </div>   
      </div>
      </div>
    </div>
    
  )
}
