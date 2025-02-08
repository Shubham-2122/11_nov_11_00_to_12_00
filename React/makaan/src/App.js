import React from "react";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Proerty_list from "./Website/Pages/Proerty_list";
import Propertytype from "./Website/Pages/Propertytype";
import Propertyagent from "./Website/Pages/Propertyagent";
import Testimonial from "./Website/Pages/Testimonial";
import Contact from "./Website/Pages/Contact";
import NotFound from "./Website/Pages/NotFound";
import Dashbaord from "./Admin/Apages/Dashbaord";
import ProertyManage from "./Admin/Apages/ProertyManage";
import Addproperty from "./Admin/Apages/Addproperty";
import Alogin from "./Admin/Apages/Alogin";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Home /> */}
      {/* <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/propertylist" element={<Proerty_list />} />
        <Route path="/propertytype" element={<Propertytype />} />
        <Route path="/propertyagent" element={<Propertyagent />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/Contact" element={<Contact />} />


        {/* Notfound */}
        <Route path="*" element={<NotFound />} />


        {/* admin routes */}
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/perotymanage" element={<ProertyManage />} />
        <Route path="/addpropty" element={<Addproperty />} />
        <Route path="/alogin" element={<Alogin />} />
      </Routes>
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
