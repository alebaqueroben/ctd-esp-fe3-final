
import { useContext } from 'react';
import Card from '../Components/Card'


import { DentistaContext } from '../utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const {state}  = useContext(DentistaContext);
//const { data } = state;


  return (
    <main className="" >
      <div className="card-grid">
        
        {/*list.map((dentista) => <Card  key={dentista.id} item={dentista}/>)*/}
        {/* Aqui deberias renderizar las cards */}
       
        {state.data.map((item) => <Card key={item.id} item={item}/>)}

      </div>
    </main>
  )
  
}

export default Home