import React from 'react'

function Font() {
  return (
    <div>
      <h1 className='font-sans text-xs'>Hello Font data</h1>
      <h1 className='font-serif text-xl text-left'>Hello Font data</h1>
      <h1 className='font-mono text-4xl text-center overline'>Hello Font data</h1>
      <h1 className='font-sans text-6xl text-right underline decoration-orange-600 decoration-dotted'>Hello Font data</h1>
      <h1 className='font-serif text-7xl uppercase '>Hello Font data</h1>
      <h1 className='font-mono text-9xl text-[rgb(162,223,105)] capitalize'>hello font data</h1>
      {/* <h1 className='font-sans text-[200px]'>Hello Font data</h1> */}
      <h1 className='font-serif italic border-4 border-double rounded-2xl border-black'>Hello Font data</h1>
      <h1 className='font-mono'>Hello Font data</h1>
    </div>
  )
}

export default Font
