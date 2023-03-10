import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './home.scss'
import logoPizza from '../../assets/pizza.png'
import passwordLogo from '../../assets/contraseña.png'
import userLogo from '../../assets/usuario.png'
import { useForm } from 'react-hook-form'
import { getUsers } from '../../services/getUsers'


const Home = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [auth, setAuth] = useState(false)


  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response)
      })
      .catch((error) => { console.log(error) })

  }, [])


  const onSubmit = (data) => {
    console.log(data);
    const userLogged = users.filter(user => user.username === data.username & user.password === data.password);
    if (userLogged) {
      setAuth(true) 
    }
    if (auth) {
      navigate('/infoHome/details')

    }
    else{
      console.log('Naranjas');
    }


  }



  return (
    <article className='home'>
      <div className='home__login'>
        <figure>
          <img src={logoPizza} alt="logoPizza" />
          <h2>PiSassScript</h2>
        </figure>
        <h3>Inicia sesión en tu cuenta</h3>
        <p>Disfruta de la mejor Pizza creada para las personas amantes del código.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <img src={userLogo} alt="user" />
            <input type="text" placeholder='Usuario' {...register('username', {
              required: true
            })} />
          </label>
          <label>
            <img src={passwordLogo} alt="password" />
            <input type="password" placeholder='Contraseña' {...register('password', {
              required: true
            })} />

          </label>
          <button className='home__login__btn'>
            Iniciar Sesión
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