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
      <NavLink className='infooPizza__div__navclass' to='/infoHome'>
            <span class="material-symbols-outlined">
arrow_back_ios
</span>Todas las pizzas
</NavLink>
              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img2})`
              }}>
      <NavLink className='infooPizza__div__navclass' to='/infoHome'>
            <span class="material-symbols-outlined">
arrow_back_ios
</span>Todas las pizzas
</NavLink>
              </figure>
              <figure style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1)2%, rgba(32,32,32,0) 38%), url(${element.img3})`

              }}>      <NavLink className='infooPizza__div__navclass' to='/infoHome'>
              <span class="material-symbols-outlined">
  arrow_back_ios
  </span>Todas las pizzas
  </NavLink>
              </figure>

            </Carousel>

          </div>

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
            <span className="material-symbols-outlined menos">minimize</span>
            <p>1</p>
            <span className="material-symbols-outlined mas">add</span>
            <span className="material-symbols-outlined">shopping_cart</span>

            <button>
              <NavLink to="/chart" className='navlink'> Pagar</NavLink>
            </button>
          </footer>
        </article>

      ))}

    </>

  );
};

export default InfoPizza;






//  const Cart = () => {
//    const [cartItems, setCartItems] = useState([]);

//    const addToCart = (product) => {
//      setCartItems([...cartItems, product]);
//    };

//    const removeFromCart = (product) => {
//      const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
//      setCartItems(updatedCartItems);
//    };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id}>
//               <p>{item.name} - ${item.price}</p>
//               <button onClick={() => removeFromCart(item)}>Remove</button>
//             </div>
//           ))}
//           <p>Total: ${calculateTotal()}</p>
//         </div>
//       )}
//     </div>
//   );
//  };

//  export default Cart;