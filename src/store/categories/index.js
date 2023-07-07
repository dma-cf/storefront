const initialState ={
    categories: [
      {name: 'electronics', displayName: 'Electronics', description: 'Electronic products'},
      {name: 'food', displayName: 'Food', description: 'Food products'},
      {name: 'clothing', displayName: 'Clothing', description: 'Clothing products'}    
    ],
    activeCategory: '',
}

function categoriesReducer(state=initialState, action){
  switch(action.type){
    case 'SET_CATEGORIES':
      return {
        ...state,
        activeCategory: action.payload
      }
    default:
      return state;
  }
}

export default categoriesReducer;