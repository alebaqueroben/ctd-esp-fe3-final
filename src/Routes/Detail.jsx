import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState({});
  const {id}= useParams()
  
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() =>  {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setDentista(res.data))
    .catch(error => console.error('Error fetching data:', error))
  },[id]);


  return (
    <>
      <h1>Detalle del dentista</h1>
      <div className="card">
        <h3>{dentista.name}</h3>
        <h3>{dentista.email}</h3>
        <h3>{dentista.phone}</h3>
        <h3>{dentista.website}</h3>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail