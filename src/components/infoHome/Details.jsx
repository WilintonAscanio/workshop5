import React, { useContext, useEffect, useState } from 'react'
import './details.scss'
import { getPizzas } from '../../services/getPizzas'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'


const Details = () => {

  const [data, setData] = useState([])
  const [id, setId] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    
    getPizzas()
      .then((response) => {
        setData(response)
      })
      .catch((error) => { console.log(error); })

  }, [])

  const pizzaSelected = (id) => {
    console.log(id);
    setId(id)
    localStorage.setItem('id', JSON.stringify(id))
<<<<<<< Updated upstream
    navigate('/infoPizza')
=======
    navigate(`/infoPizza/${id} `)
>>>>>>> Stashed changes

    
  }



  return (
    <article className='details'>
      <div className='details__info'>
        <section className='details__info__top'>
          <strong>Pizzas disponibles</strong>
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
              <Carousel
                emulateTouch={true}
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                width={"100%"}
                infiniteLoop={true}
                key={index}
                className='details__info__pizzas__carousel'>
                <figure key={index} style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${pizza.img})`

                }} id = {pizza.id}>
                  <figcaption>
                    <p>{pizza.description}</p>
                    <button onClick={ () => pizzaSelected(pizza.id)}><span>$ {pizza.price} </span>COL</button>
                  </figcaption>
                </figure>
                <figure key={index} style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${pizza.img2})`

                }}>
                  <figcaption>
                    <p>{pizza.description}</p>
                    <button onClick={ () => pizzaSelected(pizza.id)}><span>$ {pizza.price} </span>COL</button>
                  </figcaption>
                </figure>
                <figure key={index} style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${pizza.img3})`

                }}>
                  <figcaption>
                    <p>{pizza.description}</p>
                    <button onClick={ () => pizzaSelected(pizza.id)}><span>$ {pizza.price} </span>COL</button>
                  </figcaption>
                </figure>

              </Carousel>






            ))}
        </div>


      </div>



    </article>
  )
}

export default Details