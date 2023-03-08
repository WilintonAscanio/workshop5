import React from "react";
import { NavLink } from "react-router-dom";
import "./chart.scss";

const Chart = () => {
  return (
    <article className="chart">
      <div className="chart__div">
          <NavLink className="chart__div__nav" to="/infoHome">
          <span class="material-symbols-outlined">chevron_left</span>
          Carrito de compras
        </NavLink>
        <figure> 
      <div></div>
        
      <section> 
        <small> Master pizza</small>
        <strong>x2 <span> $178</span></strong>


      </section>

        </figure>
        <form className="form">
          <h3 className="pagar__informacion">Información de pago</h3>
          <label className="pagar__label">
            Nombre completo
            <input
              name="name"
              type="text"
              placeholder="Ingrese su nombre"
              className="pagar__input"
            />
          </label>
          <label className="pagar__label">
            Numero de Tarjeta de Crédito
            <input
              name="numeroTarjeta"
              type="number"
              placeholder="12334 1234 1234 1234 "
              className="pagar__input"
            />
          </label>
          <section>
            <label className="pagar__label">
              Fecha de vencimiento
              <input
                name="fechaV"
                ype="date"
                min="2022-11"
                max="2026-10"
                className="pagar__input"
              />
            </label>
            <label className="pagar__label">
              CVV
              <input
                name="cvv"
                type="number"
                maxLength={3}
                className="pagar__input"
              />
            </label>
          </section>
          <label className="pagar__label">
            Dirección
            <input
              name="direccion"
              type="text"
              placeholder="av.moreno #123"
              className="pagar__input"
            />
          </label>

          <button type="submit" className="pagar__button">
            Pagar ahora
          </button>
        </form>{" "}
      </div>
    </article>
  );
};

export default Chart;
