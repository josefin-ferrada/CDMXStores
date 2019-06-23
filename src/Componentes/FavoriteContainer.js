import React, { Component } from 'react';
import { deleteFav } from './../actions/modal';
import {connect} from 'react-redux';



class FavoriteContainer extends Component {
  render() {
    return (
      <div>
        Aquí irá mi barra lateral con los favoritos
        { this.props.newStores.map((stores,i) =>(
          <div key={i}>
          <h5>{stores.nameStore}</h5>
          <button onClick={() => this.props.delete(stores.nameStore)} >Borrar</button>
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

