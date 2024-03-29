import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from './utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { DentistaContext } from './utils/global.context';
import { useContext } from 'react';

function App() {
 const {state}  = useContext(DentistaContext);
 console.log(state.theme)



 return (

<div className={`app ${state.theme}`}>
      <Navbar/>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.detail} element={<Detail/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
          <Route path='*' element={<h1>Página no encontrada. ERROR 404</h1>}/>
        </Routes>
        <Footer/>
      </div>
  
  );
}

export default App;
