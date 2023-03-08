import React from "react";
import { NavLink } from "react-router-dom";
import "./infoPizza.scss";
import imgopinion from "../../assets/img_opinion.png";


const InfoPizza = () => {
  return (
    <article className="infooPizza">
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
          <button>$89 MXN</button>
          <button>
            <span className="material-symbols-outlined">grade</span>{" "}
            <h6>445 reviews</h6>
          </button>
        </div>
        <h3>descripion</h3>
        <p>
          Deliciosa pizza clasica, con orilla de pan esponjoso. Es un manjar,si
          estas a punto de enviar cambios a produccion un viernes, necesesitaras
          una de estas.
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
  );
};

export default InfoPizza;
