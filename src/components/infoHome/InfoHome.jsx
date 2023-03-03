import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './infoHome.scss'

const InfoHome = () => {
  return (
    <div className='infoHome'>Hola Jose
      <Outlet />

      <button>home</button>
      <NavLink to='searchPizza'> Buscar</NavLink>
    </div>
  )
}

export default InfoHome