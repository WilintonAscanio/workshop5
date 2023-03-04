import React, { createContext, useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { getPizzas } from '../../services/getPizzas'
import './infoHome.scss'

export const Context = createContext()


const InfoHome = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    getPizzas()
      .then((response) => {
        setData(response)
        console.log(response);
      })
      .catch((error) => { console.log(error); })

  }, [])

  return (

    <Context.Provider value={{
      data
    }}>
      <div className='infoHome'>Hola Jose
        <Outlet />

        <section>
          <NavLink to='/infoHome' >Home</NavLink>
          <NavLink to='searchPizza'> Buscar</NavLink>

        </section>
      </div>

    </Context.Provider>


  )
}

export default InfoHome