import { Link, useNavigate } from 'react-router-dom';

import './chart.scss';


import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';


const Chart = () => {
  const navigate = useNavigate();
  const [dataPizza, setDataPizza] = useState([])
  const [quantity, setQuantity] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('pizza')) || {}
    setDataPizza(data)
    const quantity = Number(JSON.parse(localStorage.getItem('quantity'))) || ''
    setQuantity(quantity)

  }, [])



  const onSubmit = () => {
    navigate('/animation')
  };



  return (
    <section className='chart'>
      <div className='chart__container'>
        <Link to='/infoHome/details' className='chart__btn'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/8482/8482632.png'
            alt='Icono de regresar'
            width='30'
          />
          Regresar
        </Link>

        {dataPizza.map((element, index) => (
          < article className = 'product' key={index}>
          <img
            src={element.img}
            alt='Imagen de un trozo de pizza'
            className='product__img'
            width='160'
          />

          <div className='product-content'>
            <h3 className='product-content__title'>{element.name}</h3>

            <div className='product-content__details'>
              <strong>x{quantity}</strong>
              <strong>${element.price * quantity}</strong>
            </div>
          </div>
        </article>
        ))}



      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <h1 className='form__title'>Información de pago</h1>

        <div className='form-content'>
          <label className='input-container'>
            <span className='input-container__label'>Nombre completo</span>

            <input
              placeholder='Ingresa tu nombre'
              className={`input-container__input ${errors.creditCardNumber && 'input-container__input-error'
                }`}
              type='text'
              {...register('name', {
                required: true,
              })}
            />
          </label>

          {errors.name && (
            <p style={{ color: 'red' }}>El nombre completo es requerido</p>
          )}

          <label className='input-container'>
            <span className='input-container__label'>
              Numero de tarjeta de crédito
            </span>
            <input
              placeholder='1234 1234 1234 1234'
              className={`input-container__input ${errors.creditCardNumber && 'input-container__input-error'
                }`}
              type='text'
              {...register('creditCardNumber', {
                required: true,
                pattern: /\d{4}\s\d{4}\s\d{4}\s\d{4}/,
              })}
            />
          </label>

          {errors.creditCardNumber && (
            <p style={{ color: 'red' }}>El número de tarjeta no es válido</p>
          )}

          <div className='form-content__double'>
            <label className='input-container'>
              <span className='input-container__label'>Vencimiento</span>
              <input
                placeholder='MM/YY'
                className={`input-container__input ${errors.creditCardNumber && 'input-container__input-error'
                  }`}
                type='date'
                {...register('date', {
                  required: true,
                  validate: (value) => {
                    const currentDate = new Date();
                    const selectedDate = new Date(value);
                    return selectedDate < currentDate;
                  },
                })}
              />
            </label>

            <label className='input-container'>
              <span className='input-container__label'>CVV</span>
              <input
                className={`input-container__input ${errors.creditCardNumber && 'input-container__input-error'
                  }`}
                type='number'
                {...register('cardSecurityCode', {
                  required: true,
                  minLength: 3,
                  maxLength: 3,
                })}
              />
            </label>
          </div>

          {errors.date?.type === 'required' && (
            <p style={{ color: 'red' }}>La fecha requerida</p>
          )}

          {errors.date?.type === 'validate' && (
            <p style={{ color: 'red' }}>
              Ingresa un número de seguridad válido
            </p>
          )}

          {errors.cardSecurityCode && (
            <p style={{ color: 'red' }}>
              El número de seguridad no es válido
            </p>
          )}

          <label className='input-container'>
            <span className='input-container__label'>Dirreción</span>
            <input
              placeholder='Av.morelos #123'
              className={`input-container__input ${errors.creditCardNumber && 'input-container__input-error'
                }`}
              type='text'
              name='address'
              {...register('address', {
                required: true,
              })}
            />
          </label>

          {errors.address && (
            <p style={{ color: 'red' }}>La dirección es requerida</p>
          )}
        </div>

        <button className='form-btn' type='submit'>
          Pagar ahora
        </button>
      </form>
    </div>
    </section >
  );
};

export default Chart;
