import React from "react";
import CompInfo from  '../../components/CompInfo'
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

function index() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <CompInfo/>
    </div>
  );
}

export default index;