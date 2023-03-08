import React from 'react'
import { NavLink} from 'react-router-dom'
import './home.scss'
import logoPizza from '../../assets/pizza.png'
import passwordLogo from '../../assets/contraseña.png'
import userLogo from '../../assets/usuario.png'


const Home = () => {
  
  

  return (
    <article className='home'>
      <div className='home__login'>
        <figure>
          <img src={logoPizza} alt="logoPizza" />
          <h2>PiSassScript</h2>
        </figure>
        <h3>Inicia sesión en tu cuenta</h3>
        <p>Disfruta de la mejor Pizza creada para las personas amantes del código.</p>
        <form >
          <label>
            <img src={userLogo} alt="user" />
            <input type="text" placeholder='Usuario' />
          </label>
          <label>
            <img src={passwordLogo} alt="password" />
            <input type="password" placeholder='Contraseña' />

          </label>
          <button className='home__login__btn'>
            <NavLink to='infoHome/details' className='home__login__btn__link'>Inicio de sesión</NavLink>
          </button>
          <strong>Restablecer contraseña</strong>
        </form>

        <section className='home__login__section'>
          <small>¿No tienes una cuenta?</small>
          <NavLink to='signUp' className='home__login__section__link'>Registrate Aquí</NavLink>


        </section>


      </div>


    </article>
  )
}

export default Home