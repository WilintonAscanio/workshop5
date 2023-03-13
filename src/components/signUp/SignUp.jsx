import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../services/createUser'
import './signUp.scss'

const SignUp = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    createUser(data)
    localStorage.setItem('user', JSON.stringify(data))
    Swal.fire({
      icon:'success',
      text :'Registro exitoso'
    })
    navigate('/')

  }

  return (
    <article className='signUp'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Registrarse</h2>
          <label>
            Nombre
            <input type="text" placeholder='Ingrese su nombre' {...register('name', {
              required: 'Ingrese un nombre'
            })} />
          </label>
          {errors.name && (
            <span>{errors.name.message}</span>
          )}
          <label>
            Username
            <input type="text" placeholder='Escriba su username' {...register('username', {
              required: 'Ingrese un username'
            })} />

          </label>
          {errors.username && (
            <span>{errors.username.message}</span>
          )}
          <label>
            Contraseña
            <input type="password" placeholder='Ingrese su contraseña' {...register('password', {
              required: 'Ingrese la contraseña'
            })} />
          </label>
          {errors.password && (
            <span>{errors.password.message}</span>
          )}
          <label>
            Foto
            <input type="url" placeholder='Ingrese un enlace' {...register('url', {
              required: 'Ingrese una url válida'
            })} />
          </label>
          {errors.url && (
            <span>{errors.url.message}</span>
          )}
          <button type='submit'> Registrarse </button>
        </form>
        <button onClick={() => navigate('/')}>Iniciar Sesión</button>

      </div>

    </article>
  )
}

export default SignUp
