import { useContext } from 'react';
import { DentistaContext } from '../utils/global.context';
import Card from '../Components/Card'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const {state}  = useContext(DentistaContext);



  return (
    <main className='div'>
      <div className="card-grid">
        
        {/* Aqui deberias renderizar las cards */}
       
        {state.data.map((item) => <Card key={item.id} item={item}/>)}

      </div>
    </main>
  )
  
}

export default Home