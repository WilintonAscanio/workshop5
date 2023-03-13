import React, { createContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { getPizzas } from '../../services/getPizzas'
import './infoHome.scss'
import search from '../../assets/search.svg'

export const Context = createContext()


const InfoHome = () => {
  const [data, setData] = useState([])
  const [width, setWidth] = useState(window.innerWidth);
  const [infoUser, setInfoUser] = useState([])

  const navigate = useNavigate()

  const changeWidth = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener("resize", changeWidth)


  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('user')) || []
    setInfoUser(info)
   

    getPizzas()
      .then((response) => {
        setData(response)
      })
      .catch((error) => { console.log(error); })

  }, [])

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')

  }

  if (width > 800) {
    return (

      <Context.Provider value={{
        data
      }}>
        <article className='infoHome'>
          {infoUser.map((element, index) => (
            <header className='infoHome__user' key={index}>
              <div>
                <NavLink className='navlinks' to='/infoHome/details'>
                  <span className="material-symbols-outlined">
                    house
                  </span> Home</NavLink>
                <p>¡Qué bueno verte <strong>{element.name.toUpperCase()}</strong>!</p>
              </div>
              <div className='infoHome__user__search'>
                <section className='search'>
                  <NavLink className='navlinks' to='searchPizza'><img src={search} alt="buscar" /> Buscar Pizza</NavLink>
                  <NavLink to='/chart' className='navlinks'><span className="material-symbols-outlined">
                    shopping_cart
                  </span></NavLink>
                  <small onClick={logout}><span className="material-symbols-outlined">
                    logout
                  </span> Salir</small>



                </section>
                <figure>
                  <img src={element.url} alt="userPhoto" />
                </figure>


              </div>

            </header>
          ))}


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
          {infoUser.map((element, index) => (
            <header className='infoHome__user' key={index}>
              <div>
                <h3>Home</h3>
                <p>¡Qué bueno verte <strong>{element.name.toUpperCase()}</strong>!</p>
              </div>
              <figure>
                <img src={element.url} alt="userPhoto" />
              </figure>
            </header>

          ))}


          <Outlet />

          <section className='infoHome__footer'>
            <NavLink to='/infoHome/details' className='infoHome__footer__buttons' ><span className="material-symbols-outlined">
              menu_book
            </span> Home</NavLink>
            <NavLink to='/chart' className='navlinks'><span className="material-symbols-outlined">
              shopping_cart
            </span></NavLink>
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