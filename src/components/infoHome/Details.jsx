import React, { useContext } from 'react'
import './details.scss'
import { Context } from './InfoHome'

const Details = () => {

  const { data } = useContext(Context)
  return (
    <div>Details
      {data.map((pizza, index) => (
        <div key={index}>
          <small>{pizza.id}</small>
          <figure>
            <img src={pizza.type[0].imgP} alt="pizza" />
          </figure>
        </div>

      ))}
    </div>
  )
}

export default Details