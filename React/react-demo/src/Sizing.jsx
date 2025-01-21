import React from 'react'

function Sizing() {
    return (
        <div>
            <div className="main bg-slate-500 h-24 w-24">

            </div>

            <div className="main flex">
                <div className="bg-green-300 w-1/2">first</div>
                <div className='bg-blue-400 w-1/2'>second</div>
            </div>
            <div className="container bg-red-400 mx-auto w-10/12 opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo pariatur sequi quam veritatis minima, placeat optio, itaque fuga fugit est voluptatem dolor enim similique possimus aliquam, ducimus commodi maxime.
            </div>
            <div className="flex justify-around h-56 bg-slate-500 content-center">
                <div className="size-28 border-4 border-red-300 scale-75">1</div>
                <div className="size-28 border-4 border-red-300 scale-100 rotate-45">1</div>
                <div className="size-28 border-4 border-red-300 scale-125">1</div>
            </div>
            <div className="main size-52 md:bg-slate-400 hover:bg-red-400 hover:scale-75 hover:text-lime-400 mx-auto shadow-2xl shadow-teal-600 my-5">
                Hello this data
            </div>
            <button className='btn-blue'>Component</button>

            <button className='btn-blue'>Component 2</button>
        </div>
    )
}

export default Sizing
