import React from 'react'

const Formulario = ({ nombre, setNombre, contraseña, setContraseña }) => {

    return (
        <div>
            <label htmlFor='nombre'>Nombre</label>
            <input
                type="text"
                className='form-control m-b3'
                placeholder='Ingresa Texto'
                id='nombre'
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
            >
            </input>

            <label htmlFor='nombre'>Contraseña</label>
            <input
                type="password"
                className='form-control m-b3'
                placeholder='Ingresa Contraseña'
                id='password'
                value={contraseña}
                onChange={(e) => { setContraseña(e.target.value) }}
            >
            </input>

        </div>
    )
}

export default Formulario