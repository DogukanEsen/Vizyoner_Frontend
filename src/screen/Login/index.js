import React from "react";
import Header from '../../components/Header'
import Mobileapp from '../../components/Mobileapp'
import Footer from '../../components/Footer'
import Herosection from "../../components/Herosection";





function index() {
  return (
    < div>
      <Header/>
      <Herosection/>
      <Mobileapp/>
      <Footer/>
    </div>
  );
}

export default index;
