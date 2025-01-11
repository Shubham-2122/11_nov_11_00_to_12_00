import React from "react";
// import Class_compo from "./Component/Class-compo";
// import Fun_compo from "./Component/Fun_compo";
// import Hello from "./Jsx/Hello";
// import Hello2 from "./Jsx/Hello2";
// import Css from "./Css/Css";
import Main from "./Props/Main";
import Boostrap from "./boostrap/Boostrap";
import React_btn from "./boostrap/React-btn";
import Footer from "./boostrap/Footer";
import Main_state from "./State/Main-state";
import Simple_form from "./Form_hadling/Simple-form";
import Fromdata from "./Form_hadling/Fromdata";
import UseEffecth from "./useEffect/UseEffecth";
import UseTable from "./useEffect/UseTable";
import Card_data from "./useEffect/Card_data";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Layout/Pages/Contact";
import Help from "./Layout/Pages/Help";
import Notfount from "./Layout/Pages/Notfount";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import Main_Content from "./UseContext/Main_Content";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1 className="bg-danger">Hello this app page</h1> */}

        {/* component */}
        {/* <Class_compo /> */}
        {/* <Fun_compo /> */}

        {/* jsx compo */}
        {/* <Hello /> */}
        {/* <Hello2 /> */}

        {/* <Css /> */}


        {/* Props data */}

        {/* <Main /> */}

        {/* boostrap */}
        {/* <Boostrap /> */}
        {/* <React_btn /> */}
        {/* <Footer /> */}

        {/* useState */}
        {/* <Main_state /> */}

        {/* form hadling data */}
        {/* <Simple_form /> */}
        {/* <Fromdata /> */}

        {/* <UseEffecth /> */}
        {/* <UseTable /> */}
        {/* <Card_data /> */}

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route path="/about/about1" element={<About1 />} />
            <Route path="/about/about2" element={<About2 />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/context" element={<Main_Content />} />

          {/* not found *:- path another not found  */}
          <Route path="*" element={<Notfount />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
