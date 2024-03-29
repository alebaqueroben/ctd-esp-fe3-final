const Reducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, data: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
                //Realizar una operación utilizando .filter()
            return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload) };
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
}

export default Reducer