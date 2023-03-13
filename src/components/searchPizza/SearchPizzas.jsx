import React, { useContext, useEffect, useState } from 'react'
import './searchPizza.scss'
import search from '../../assets/search.svg'
import logoBusqueda from '../../assets/logoBusqueda.png'
import { Context } from '../infoHome/InfoHome'
import { getPizzas } from '../../services/getPizzas'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router'


const SearchPizzas = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const [pizzas, setPizzas] = useState({})
  const navigate = useNavigate()


  const inputValue = ({ target }) => {
    setInput(target.value)
    const arrayFiltered = data.filter(pizza => pizza.name.toLowerCase().includes(target.value.toLowerCase()))
    setPizzas(arrayFiltered)

  }
  useEffect(() => {

    getPizzas()
      .then((response) => {
        setData(response)
      })
      .catch((error) => { console.log(error); })

  }, [])

  const pizzaSelected = (id) => {
    localStorage.setItem('id', JSON.stringify(id))
    navigate('/infoPizza')


  }


  return (
    <article className='searchPizza'>
      <label>
        <input type="text" placeholder='Escriba el nombre de la pizza ' onChange={(e) => inputValue(e)} />
        <img src={search} alt="search" />
      </label>
      {!input ?
        <div className='searchPizza__empty'>
          <section>
            <img src={logoBusqueda} alt="busqueda" />
            <small>Busca la Pizza que más te gusta</small>
          </section>
        </div> :
        <div className='searchPizza__carousel'>
          {pizzas.map((pizza, index) => (
            <Carousel emulateTouch={true}
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              width={"100%"}
              infiniteLoop={true}
              key={index} className='searchPizza__carousel__info'>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${pizza.img})`
              }}>
                <figcaption>
                  <p>{pizza.name}</p>
                  <button onClick={ () => pizzaSelected(pizza.id)}>$ {pizza.price}</button>
                </figcaption>

              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${pizza.img2})`


              }}>
                <figcaption>
                  <p>{pizza.name}</p>
                  <button onClick={ () => pizzaSelected(pizza.id)}>$ {pizza.price}</button>
                </figcaption>

              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${pizza.img3})`

              }}>
                <figcaption>
                  <p>{pizza.name}</p>
                  <button onClick={ () => pizzaSelected(pizza.id)}>${pizza.price}</button>
                </figcaption>

              </figure>

            </Carousel>

          ))}

        </div>

      }

    </article >
  )
}

export default SearchPizzas