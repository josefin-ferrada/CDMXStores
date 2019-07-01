import { ADD_TO_FAV, DELETE_FAV } from  "../actions/actionTypes";


export default (
  state = {
    favStore: [    ]
  },
  action//viene de action file
) => {
  switch(action.type){

    case ADD_TO_FAV:
      return {
        ...state,
        favStore: state.favStore.concat([action.payload])
      }
      case DELETE_FAV:
        

        return {
          ...state,
        favStore: state.favStore.filter((store) => store.nameStore !== action.payload.nameStore) 
    
        
        }

    default: return state;//siempre poner default 
  }
}