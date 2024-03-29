import { createContext, useEffect, useReducer, useContext } from "react";
import Reducer from '../reducers/reducer'
import axios from "axios";
import App from "../App";

export const DentistaContext = createContext();

const Context = () => {

  const initialState = {
    //theme:  "light",
    data: [],
    favs: JSON.parse(localStorage.getItem('favs'))  || []
}
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  
  const [state, dispatch] = useReducer(Reducer, initialState);
  
 /* const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  */
  useEffect(()  => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data);
      dispatch({type: 'GET_LIST', payload: res.data});
      })
    .catch(error => console.error('Error fetching data:', error))
}, []);

  return (
    <DentistaContext.Provider value={{state, dispatch/* toggleTheme*/}}>
    <App />
    </DentistaContext.Provider>
  );
};

export default Context
export const useDentistaState = ()  => useContext(DentistaContext)