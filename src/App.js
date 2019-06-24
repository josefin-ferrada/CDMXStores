import React, { Component } from 'react';
import './App.css';
import MyMapComponent from "./Componentes/Map"
import FavoriteContainer from "./Componentes/FavoriteContainer";
import cdmxstore from './images/cdmxstore.png'

class App extends Component {
  render() {
    return (
      
        <div >
          <nav className="navbar navbar-light mr-auto" Style="background-color: #FFFFF;"> <img alt="storeicon" src={cdmxstore} width="250px" /></nav>
        <div className="row favoriteContainer">
          
          <div className="col-8">
          <MyMapComponent isMarkerShown/>
          </div>
          <div className="col-4 ">
          
          <FavoriteContainer />
          </div>
        </div>
      
        
        
      </div>
    );
  }
}

export default App;
