import React, { Component } from 'react';
import {  Marker } from "react-google-maps";
import stores from './../store_directory.json';
import './Marker.css';
import { deleteFav, setFav } from './../actions/modal';
import {connect} from 'react-redux';

class InMap extends Component {
  state = { show: false }

  showModal = (name,address) => {
    this.setState({ show: true, name, address});
  }
  
  hideModal = () => {
    this.setState({ show: false });
    
  }
    
  render() {
    return (
      <main>
        {stores.map((element, i) => (
          <Marker
            key={i}
            position={{ lat: element.Coordinates.lat, lng: element.Coordinates.lng }}
            title={element.Name}
            onClick={()=>this.showModal(element.Name,element.Address)}
          />))}
          <Modal 
            show={this.state.show} 
            handleClose={this.hideModal} >
            <p id={this.props.key}>{this.state.name}</p>
            <p>{this.state.address}</p>
          </Modal>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}>Cerrar
        </button>
        <button>Agregar a Favoritos</button>
      </section>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    newStores: state.modal.favStore,
  };
}
const mapDispatchToProps = (dispatch) => {
  
  return {
    set:  setFav(dispatch),
    delete: deleteFav(dispatch)
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InMap);
