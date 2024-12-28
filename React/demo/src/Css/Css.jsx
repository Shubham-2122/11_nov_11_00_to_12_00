import React from 'react'
import "./style.css";

function Css() {


    // internal css as object/varibale
    let internal = {
        background : 'blue',
        color: 'white'
    }

  return (
    <div>
      {/* inline css */}

        {/* as object */}
        <h1 style={{background:'red',color:'white'}}>hello this css inline css</h1>
        {/* <h1>hello this inline css</h1> */}


      {/* internal css */}
      <h1 style={internal}>Internal css allow</h1>
      
      
      {/* external css */}

      <h2>Hello this h2 tah external css</h2>

      <h1 id='name'>Hellosad asjdb jasd</h1>
    </div>
  )
}

export default Css
