import React from 'react'
import '../styles/Contacto.css'
export const Contact = () => {
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
      <form action="" className='contact'>
        <div className='info_input'>
        <label htmlFor="Nombre">Nombre:</label>
        <input type='text' placeholder='Nombre' name='Nombre'/>
        </div>
        <div className='info_input'>
        <label htmlFor="Apellidos">Apellidos:</label>
        <input type='text' placeholder='Apellidos' name='apellido'/>
        </div>
        <div className='info_input'>
        <label htmlFor="empresa">Empresa:</label>
        <input type='text' placeholder='Nombre de la empresa'name='empresa'/>
        </div>
        <div className='info_input'>
        <label htmlFor="texto">Email: </label>
        <input type='' placeholder='Email' name='email'/>
        </div>
        <div className='info_input'>
        <label htmlFor="mensage">Nota:</label>
        <textarea className ="text_tarea" name="mensage" id=""></textarea>
        </div>
       <button className="boton" type='submi'>Enviar</button>
        
      </form>
      <hr/>
    </div>
    </div> 
  </>
  )
}


