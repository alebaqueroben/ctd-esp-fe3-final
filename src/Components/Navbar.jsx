import { routes } from '../utils/routes'
import { Link, useNavigate } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const navigate = useNavigate()
  return (
    <nav className="">
      <button onClick={() => navigate(-1)}>go back</button>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.contact}><h3>Contacto</h3></Link>
        <Link to={routes.favs}><h3>Destacados</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>change theme</button>
    </nav>
  )
}

export default Navbar