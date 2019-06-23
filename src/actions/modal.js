import { ADD_TO_FAV, DELETE_FAV } from './actionTypes';
import store from './../store'; 

 export const setFav = dispatch => (name, address) =>{
    console.log(store.getState())
     dispatch({
        type: ADD_TO_FAV,
        payload : {
            
            nameStore: name,
            addRess: address,
        }
     })
 }

 export const deleteFav = dispatch => (name) =>{
     dispatch({
         type: DELETE_FAV,
         payload: {
            name: name
         }
     })
 }