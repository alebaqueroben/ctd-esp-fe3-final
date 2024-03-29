import React from "react";
import Card from "../Components/Card";
import { DentistaContext } from '../utils/global.context'
import { useContext } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const {state}  = useContext(DentistaContext);
  return (
    <div className='div'>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
         
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
      </div>
    </div>
  );
};

export default Favs;
