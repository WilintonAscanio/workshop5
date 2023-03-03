import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './home.scss'

const Home = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque cumque nesciunt repellendus modi, fuga explicabo ipsam commodi hic officiis eveniet voluptatem pariatur mollitia sint eius incidunt nemo alias dignissimos assumenda.</p>
      
      <NavLink to='infoHome'>Inicio de sesión</NavLink>
      <NavLink to='signUp'>Registrate Aquí</NavLink>
    </div>
  )
}

export default Home