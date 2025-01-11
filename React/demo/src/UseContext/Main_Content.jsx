import React from 'react'
import ChaildA from './Props_drlling/ChaildA'
import Header from '../Layout/Coman/Header'
import A from './Context/A'

function Main_Content() {
  return (
    <div>
        <Header />
        {/* props drlling data */}
        {/* props :- data trnsfer one compo to other compo use */}
      {/* <ChaildA /> */}

    {/* use Context :- Create , provide , useContext hooks(use) */}
    <A />

    </div>
  )
}

export default Main_Content
