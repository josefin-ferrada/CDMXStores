import React, { Component } from 'react';
import { deleteFav } from './../actions/modal';
import {connect} from 'react-redux';



class FavoriteContainer extends Component {
  render() {
    return (
      <div>
        Aquí irá mi barra lateral con los favoritos
        { this.props.newStores.map((stores,i) =>(
          <h3>{stores.nameStore}</h3>))}
        
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

