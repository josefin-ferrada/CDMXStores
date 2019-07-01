import React, { Component } from 'react';
import { deleteFav } from './../actions/modal';
import {connect} from 'react-redux';
import './FavoriteContainer.css'



export class FavoriteContainer extends Component {
  render() {
    return (
      <div className="">
        <h2>Tiendas Favoritas</h2>
        { this.props.newStores.map((stores,i) =>(
          <div className="card-fav" key={i}>
          <p>Nombre: {stores.nameStore}</p>
          <p>Dirección: {stores.addRess}</p>
          <button className="btn btn-primary" onClick={() => this.props.delete(stores.nameStore)} >Borrar</button>
          </div>))}
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    newStores: state.modal.favStore,
  };
}
const mapDispatchToProps = (dispatch) => {
  
  return {
   
    delete: deleteFav(dispatch)
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteContainer);

