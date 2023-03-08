import React, { useContext, useEffect, useState } from 'react'
import './details.scss'
import { Context } from './InfoHome'
import offer from '../../assets/oferta.png'
import { getPizzas } from '../../services/getPizzas'


const Details = () => {

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
    <article className='details'>
      <div className='details__info'>
        <section className='details__info__top'>
          <strong>Pizzas disponibles</strong>
          {/* <small>Ver todas</small> */}
          <div>
            <section>
              <h3>Pizzas para FrontEnds</h3>
              <strong>45% OFF</strong>
            </section>
            <section>
              <h3>Pizzas para Backends</h3>
              <strong>25% OFF</strong>
            </section>

          </div>

        </section>
        <div className='details__info__pizzas'>

          {data &&
            data.map((pizza, index) => (
              <section key={index}>
                <figure>
                  <img src={pizza.type[0].imgP} alt="pizza" />
                </figure>
                <div>
                  <p>{pizza.description}</p>
                  <button><span>$ {pizza.price} </span>COL</button>
                </div>
              </section>

            ))}
        </div>


      </div>



    </article>
  )
}

export default Details