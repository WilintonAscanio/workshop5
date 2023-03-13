import { Link, useNavigate } from 'react-router-dom';

import './chart.scss';


import { useForm } from 'react-hook-form';


const Chart = () => {
const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = () => {
    navigate('/animation') 
   };



  return (
    <section className='chart'>
      <div className='chart__container'>
        <Link to='/' className='chart__btn'>
          <img
            src='https://www.iconpacks.net/icons/2/free-arrow-back-icon-3783-thumb.png'
            alt='Icono de regresar'
            width='30'
          />
          Regresar
        </Link>

        <article className='product'>
          <img
            src='https://cajasdepizza.com/wp-content/uploads/2019/11/Pizza-Slice-PNG-Transparent-Image.png'
            alt='Imagen de un trozo de pizza'
            className='product__img'
            width='160'
          />

          <div className='product-content'>
            <h3 className='product-content__title'>Super Pizza</h3>

            <div className='product-content__details'>
              <strong>x2</strong>
              <strong>$178</strong>
            </div>
          </div>
        </article>

        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <h1 lassName='form__title'>Información de pago</h1>

          <div className='form-content'>
            <label className='input-container'>
              <span className='input-container__label'>Nombre completo</span>

              <input
                placeholder='Ingresa tu nombre'
                className={`input-container__input ${
                  errors.creditCardNumber && 'input-container__input-error'
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
                className={`input-container__input ${
                  errors.creditCardNumber && 'input-container__input-error'
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
                  className={`input-container__input ${
                    errors.creditCardNumber && 'input-container__input-error'
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
                  className={`input-container__input ${
                    errors.creditCardNumber && 'input-container__input-error'
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
                className={`input-container__input ${
                  errors.creditCardNumber && 'input-container__input-error'
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
    </section>
  );
};

export default Chart;
