import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './shopping.scss'

const Shopping = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const chart = JSON.parse(localStorage.getItem('chartPizzas')) || []
        setData(chart)




    }, [])
    const pizzaSelected = (id) => {
        localStorage.setItem('id', JSON.stringify(id))
        navigate('/infoPizza')

    }


    return (
        <article className='shopping'>

            <div className='shopping__all'>
                <Link to='/infoHome/details' className='chart__btn'>
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/8482/8482632.png'
                        alt='Icono de regresar'
                        width='30'

                    />
                    Regresar
                </Link>

                {data.map((element, index) => (
                    <section key={index}>
                        <figure>
                            <img src={element.img} alt="pizza" />
                        </figure>
                        <div>
                            <small>{element.name}</small>
                            <p>{element.details}</p>
                            <button onClick={() => pizzaSelected(element.id)}>Comprar</button>

                        </div>


                    </section>


                ))}



            </div>

        </article>
    )
}

export default Shopping