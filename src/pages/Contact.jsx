import React, { useState } from 'react'
import '../styles/Contacto.css'
import { useForm } from 'react-hook-form'
import { useFetch } from '../hook/usefetch'





export const Contact = () => {
 const {  register, handleSubmit, reset } = useForm()
 const [Estado, setEstado] = useState()

 const [Envio, getEnviar ]=useFetch()

 console.log('esto es envio',Envio)
 
 const Submit = (data)=>{
 getEnviar(data)
 console.log('paso')

 
 }
 


  return (
    <>
    <h1><b>//</b> Contacto</h1>
    <div className='Container_contacto'>


    <div>
      <h2>JAIRO RINCÓN GUTIÉRREZ</h2>
      <p>Cel: +57- 3126346336</p>
      <p>rincon303@hotmail.com</p>
      <p>Colombia-Cartagena</p>
    </div>
    <div className='Container_form'>      
      <form className='contact' onSubmit={handleSubmit(Submit)}>
        <div className='info_input'>
        <label htmlFor="Nombre">Nombre:</label>
        <input {...register('Nombre')} type='text' placeholder='Nombre' name='Nombre'/>
        </div>
        <div className='info_input'>
        <label htmlFor="Apellidos">Apellidos:</label>
        <input {...register('apellido')}type='text' placeholder='Apellidos' name='apellido'/>
        </div>
        <div className='info_input'>
        <label htmlFor="empresa">Empresa:</label>
        <input  {...register('empresa')} type='text' placeholder='Nombre de la empresa'name='empresa'/>
        </div>
        <div className='info_input'>
        <label htmlFor="texto">Email: </label>
        <input  {...register('email')} type='email' placeholder='Email' name='email'/>
        </div>
        <div className='info_input'>
        <label htmlFor="mensage">Nota:</label>
        <textarea  {...register('mensage')} className ="text_tarea" name="mensage" id=""></textarea>
        </div>
       <button className="boton" type='submi'>Enviar</button>
        
      </form>
      <hr/>
    </div>
    </div> 
  </>
  )
}


