import axios from "axios";
import { useState } from "react";

export const useFetch = ()=>{
const [Envio, setEnvio]=useState()

const ruta ='http://localhost:8080/api/v1/contact'

 const getEnviar = (data)=>{
    
    axios.post(ruta,data)
    .then(resp => setEnvio(resp.data))
    .catch(error => console.log(error))


 }

return [Envio, getEnviar]
    
}