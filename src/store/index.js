import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //herramienta navegador
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index';//meter reducers
import state from './initialState';//store

export default createStore(//crea el almacen con los reducers y composewith devtools para debuguear la app
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);