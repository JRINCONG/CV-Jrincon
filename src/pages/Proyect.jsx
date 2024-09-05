import React from 'react';
import {Proyectos} from '../util/Array_Proyectos';
import { Cards } from '../components/Cards';
import '../styles/Cards.css'



export const Proyect = () => {

  return (
    <>
    <div className='Proyectos'>
    <h1><b>// </b>Proyectos</h1>
    </div>
    <div className='Container_Proyect shadow-2xl'> 
         
        {
            Proyectos?.map((card)=>(      
                <Cards
                Card ={card}  
                array={card.Lenguajes}              
                />
            ))           
        }       
    </div>

  </>
  )
}


