import React from "react";
import { NavLink } from "react-router-dom";
import "./infoPizza.scss";


const InfoPizza = () => {
  return (
    <article className="infooPizza">
      <section className="infooPizza__section">
      <div className="infooPizza__div">
        
          <NavLink className="infooPizza__div__nav" to="/infoHome/details">
            <span className="material-symbols-outlined">
              keyboard_double_arrow_left
            </span> Todas las pizzas
          </NavLink>
          <span className="material-symbols-outlined ">more_horiz</span>
</div>

      <div className="infooPizza__master">
        <h1>Master css Pizza</h1>
        <div className="infooPizza__master__reviews">
          <button className="infooPizza__master__reviews__btn">$89 MXN</button>
          <button className="infooPizza__master__reviews__btn2">
            <span className="material-symbols-outlined">grade</span>
            <h6>445 reviews</h6>
          </button>

        </div>
        <div className="infooPizza__master__description">    
          <h3>Descripcion</h3>
        <p>
          Deliciosa pizza clasica, con orilla de pan esponjoso. Es un manjar,si
          estas a punto de enviar cambios a produccion un viernes, necesesitaras
          una de estas.
        </p>
        </div>
        
      </div>
      </section>
<footer >
      
      <button>-</button>
      <p>2</p>
      <button>+</button>
      <span className="material-symbols-outlined">shopping_cart</span>

      
        <NavLink className="navlink"  to="/chart"> Pagar</NavLink>
      
      </footer>
    </article>
  );
};

export default InfoPizza;
