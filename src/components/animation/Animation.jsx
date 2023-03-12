import React from 'react';
import './animation.scss';

const Animation = () => {
  return (
    <section className='checkout '>
      <div className='checkout__content'>
        <img
          src='https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-icono-de-circulo-de-marca-de-verificacion-curvo.png'
          alt='Check icon'
          width='120'
          className='check-icon animate__animated animate__rubberBand'
        />

        <div className='checkout-details'>
          <h1 className='checkout-details__title'>
            Tu pedido se realizó con éxito
          </h1>
          <p className='checkout-details__description'>
            Serás notificado cuando llegue el repartidor
          </p>
        </div>

        <button className='checkout-details__btn' type=''>
          Aceptar
        </button>
      </div>
    </section>
  );
};

export default Animation;
