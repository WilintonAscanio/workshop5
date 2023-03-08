import React, { createContext, useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { getPizzas } from '../../services/getPizzas'
import './infoHome.scss'
import profile from '../../assets/hombre.png'
import search from '../../assets/search.svg'

export const Context = createContext()


const InfoHome = () => {
  const [data, setData] = useState([])
  const [width, setWidth] = useState(window.innerWidth)

  const changeWidth = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener("resize", changeWidth)


  useEffect(() => {

    getPizzas()
      .then((response) => {
        setData(response)
        console.log(response);
      })
      .catch((error) => { console.log(error); })

  }, [])

  if (width > 800) {
    return (

      <Context.Provider value={{
        data
      }}>
        <article className='infoHome'>
          <header className='infoHome__user'>
            <div>
              <NavLink to='/infoHome/details' style={{
                textDecoration: 'none',
                color: 'white',
              }} >Home</NavLink>
              <p>¡Qué bueno verte Cris!</p>
            </div>
            <div className='infoHome__user__search'>
              <section className='search'>
                <img src={search} alt="buscar" />
                <NavLink to='searchPizza' style={{
                  textDecoration: 'none',
                  color: 'black',
                }}>Buscar Pizza</NavLink>
              </section>
              <figure>
                <img src={profile} alt="userPhoto" />
              </figure>


            </div>

          </header>

          <Outlet />


        </article>

      </Context.Provider>


    )

  }
  else {
    return (

      <Context.Provider value={{
        data
      }}>
        <article className='infoHome'>
          <header className='infoHome__user'>
            <div>
              <h3>Home</h3>
              <p>¡Qué bueno verte Cris!</p>
            </div>
            <figure>
              <img src={profile} alt="userPhoto" />
            </figure>
          </header>

          <Outlet />

          <section className='infoHome__footer'>
            <NavLink to='/infoHome/details' className='infoHome__footer__buttons' ><span className="material-symbols-outlined">
              menu_book
            </span> Home</NavLink>
            <NavLink to='searchPizza' className='infoHome__footer__buttons'><span className="material-symbols-outlined">
              search
            </span> Buscar</NavLink>

          </section>
        </article>

      </Context.Provider>


    )

  }


}

export default InfoHome