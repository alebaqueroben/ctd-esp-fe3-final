
import { Link } from "react-router-dom";


const Card =({item}) => {
const {name, username} = item
//const {dispatch} = useDentistaState()
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
    <img src='../assets/doctor.jpg' alt="foto"/>
    <h3>Nombre: {name}</h3>
    <h4>Usuario: {username}</h4>
    <Link to={'/dentist/' + item.id}>Ver detalle</Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
