import React, { useEffect, useState } from 'react'
import { getPizza } from '../../services/getPizza'
import { NavLink } from "react-router-dom";
import "./infoPizza.scss";
import { Carousel } from 'react-responsive-carousel';
import Swal from 'sweetalert2';


const InfoPizza = () => {
  const [data, setData] = useState([])
  const [width, setWidth] = useState(window.innerWidth)
  const [counter, setCounter] = useState(1)

  const handlePlus = () => {
    setCounter(counter + 1)


  }
  const handleMinus = () => {
    const value = counter > 0 ? counter - 1 : 0
    setCounter(value)


  }
  localStorage.setItem('quantity', JSON.stringify(counter))

  const addChart = () => {
    const pizzas = JSON.parse(localStorage.getItem('chartPizzas')) || []
    const arrayFilter = pizzas.filter(pizza => Number(pizza.id) === data[0].id)
    if (!arrayFilter.length) {
      pizzas.push(...data)
      localStorage.setItem('chartPizzas', JSON.stringify(pizzas))
      Swal.fire({
        icon :'success',
        text: 'Pizza agregada'
      })

    }
    else {
      Swal.fire({
        icon :'info',
        text: 'Ya tienes esta pizza en tu carrito'
      })

    }

  }

  const changeScreen = () => {
    setWidth(window.innerWidth)
  }
  window.addEventListener('resize', changeScreen)

  useEffect(() => {
    const id = Number(localStorage.getItem('id')) || []
    getPizza(id)
      .then((response) => {
        setData(response)
      })
      .catch((error) => { console.log(error) })

  }, [])

  const pizzaSelect = () => {
    localStorage.setItem('pizza', JSON.stringify(data))
  }

  return (

    <>
      {data.map((element, index) => (
        <article className="infooPizza" key={index}>
          <div className="infooPizza__div">

            <Carousel emulateTouch={true}

              showArrows={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              width={"100%"}
              infiniteLoop={true}
              key={index}>
              <figure className='infooPizza__div__figura' style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img})`
              }}>
                <NavLink className='infooPizza__div__navclass' to='/infoHome/details'>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>Todas las pizzas
                </NavLink>
              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img2})`
              }}>
                <NavLink className='infooPizza__div__navclass' to='/infoHome/details'>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>Todas las pizzas
                </NavLink>
              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img3})`

              }}>      <NavLink className='infooPizza__div__navclass' to='/infoHome/details'>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>Todas las pizzas
                </NavLink>
              </figure>

            </Carousel>

          </div>

          {width > 800 ? <>
            <div className="infooPizza__master">
              <h1>{element.name}</h1>
              <div className="infooPizza__master__reviews">
                <button className='infooPizza__master__reviews__btn'>${element.price}</button>
                <button className='infooPizza__master__reviews__btn2'>
                  <span className="material-symbols-outlined">
                    star
                  </span>
                  {element.reviews} reviews
                </button>
              </div>
              <h3>Descripción</h3>
              <p>
                {element.details}
              </p>
              <footer>
                <span onClick={handleMinus}>-</span>
                <p>{counter}</p>
                <span onClick={handlePlus}>+</span>
                <span className="material-symbols-outlined" onClick={addChart}>shopping_cart</span>

                <NavLink to="/chart" className='navlink' onClick={pizzaSelect()}> Pagar</NavLink>

              </footer>

            </div>

          </> : <>
            <div className="infooPizza__master">
              <h1>{element.name}</h1>
              <div className="infooPizza__master__reviews">
                <button className='infooPizza__master__reviews__btn'>${element.price}</button>
                <button className='infooPizza__master__reviews__btn2'>
                  <span className="material-symbols-outlined">grade</span>
                  <h6>{element.reviews} reviews</h6>
                </button>
              </div>
              <h3>Descripción</h3>
              <p>
                {element.details}
              </p>

            </div>
            <footer>
              <small onClick={handleMinus} >-</small>
              <p>{counter}</p>
              <small onClick={handlePlus}>+</small>
              <span className="material-symbols-outlined" onClick={addChart}>shopping_cart</span>

              <NavLink to="/chart" className='navlink' onClick={pizzaSelect()}> Pagar</NavLink>
            </footer>
          </>}


        </article>

      ))}

    </>

  );
};

export default InfoPizza;



