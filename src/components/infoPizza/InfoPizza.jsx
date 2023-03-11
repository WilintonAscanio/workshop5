import React, { useEffect, useState } from 'react'
import { getPizza } from '../../services/getPizza'
import { NavLink } from "react-router-dom";
import "./infoPizza.scss";
import { Carousel } from 'react-responsive-carousel';


const InfoPizza = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const id = Number(localStorage.getItem('id')) || []
    getPizza(id)
      .then((response) => {
        setData(response)
      })
      .catch((error) => { console.log(error) })

  }, [])

  return (

    <>
      {data.map((element, index) => (
        <article className="infooPizza" key={index}>
          <div className="infooPizza__div">
            <h1>Hola</h1>

            <Carousel emulateTouch={true}
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              width={"100%"}
              infiniteLoop={true}
              key={index}>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img})`
              }}>

              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img2})`
              }}>

              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img3})`

              }}>
              </figure>

            </Carousel>
          </div>

          <div className="infooPizza__master">
            <h1>{element.name}</h1>
            <div className="infooPizza__master__reviews">
              <button>${element.price}</button>
              <button>
                <span className="material-symbols-outlined">grade</span>{" "}
                <h6>{element.reviews} reviews</h6>
              </button>
            </div>
            <h3>Descripción</h3>
            <p>
              {element.details}
            </p>

          </div>
          <footer>
            <span className="material-symbols-outlined menos">minimize</span>
            <p>1</p>
            <span className="material-symbols-outlined mas">add</span>
            <span className="material-symbols-outlined">shopping_cart</span>

            <button>
              <NavLink to="/chart"> Pagar</NavLink>
            </button>
          </footer>
        </article>

      ))}

    </>

  );
};

export default InfoPizza;
