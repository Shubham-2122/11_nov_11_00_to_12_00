// jsx :-  javscript syntax xml/extestion. 
// jsx file html return easy to use 
// js vs jsx 
// jsx litial (0.3s) js copmare
// varibale access jsx
// jsx allow {}

import React from 'react'

function Hello2() {

    let name1 = "Hetvi";

    let list = <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
        <li>Help</li>

    </ul>

    let totle = 5 + 5;

    let a = 20,b=30;
    // console.log(name1)

  return (
    <div>
      <h1>Hello this Hello 2 file</h1>

        <h1>hello name :- {name1}</h1>

        {list}

        <h2>hello total values :- {totle}</h2>

        <h2>hello value {(a<b?'true':'false')}</h2>

    </div>
  )
}

export default Hello2
