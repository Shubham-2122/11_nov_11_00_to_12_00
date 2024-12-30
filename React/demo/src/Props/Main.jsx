import React from 'react'
import Class_props from './Class-props'
import Func_props from './Func-props'

function Main() {
  return (
    <div>
      <h1 className='bg-success'>Class component props</h1>
      <div className="container">
        <div className="row">
            <Class_props title="Card 1" desc="nature img data 1" img="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600" />

            <Class_props title="Card 2" desc="nature img data 2" img="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card 2" desc="nature img data 2" img="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card 2" desc="nature img data 2" img="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card 2" desc="nature img data 2" img="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Card 2" desc="nature img data 2" img="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>

      <h1 className='bg-success'>Function component props</h1>
      <div className="container">
        <div className="row">
            <Func_props title="card 1" desc="Nature img funtion 1" img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 2" desc="Nature img funtion 2" img="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 3" desc="Nature img funtion 3" img="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 4" desc="Nature img funtion 4" img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 5" desc="Nature img funtion 5" img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Func_props title="card 6" desc="Nature img funtion 6" img="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
    </div>
  )
}

export default Main
