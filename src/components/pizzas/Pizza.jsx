import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './pizzas.scss'

const Pizza = () => {

  const { namePizza } = useParams()
  return (
    <div>Pizzas
      <NavLink to='/infoHome/infoPizza'> Info de la pizza</NavLink>
      <p>Hola</p>
    </div>


  )
}

export default Pizza