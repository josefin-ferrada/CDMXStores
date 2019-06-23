import React, { Component } from 'react';
import './App.css';
import MyMapComponent from "./Componentes/Map"
import FavoriteContainer from "./Componentes/FavoriteContainer";
import store from './images/store.png'

class App extends Component {
  render() {
    return (
      
        <div className="App container">
        <div className="row">
          
          <div className="col-8">
          <MyMapComponent isMarkerShown/>
          </div>
          <div className="col-4 favoriteContainer">
          <nav className="navbar navbar-dark bg-dark"> <img alt="storeicon" src={store} width="50px"/>Tiendas de Ciudad de México</nav>
          <FavoriteContainer />
          </div>
        </div>
      
        
        
      </div>
    );
  }
}

export default App;
