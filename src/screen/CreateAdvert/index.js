import React from "react";
import CreateAdvert from  '../../components/CreateAdvert'
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";



function index() {
  return (
    < div>
      <Navbar/>
      <Sidebar/>
      <CreateAdvert/>
    </div>
  );
}

export default index;