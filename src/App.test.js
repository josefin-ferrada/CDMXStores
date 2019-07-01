import React from 'react';
import { shallow, configure } from 'enzyme';
import { App } from './App';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { InMap } from './Componentes/Marker'

// tslint:disable-next-line:no-any
Enzyme.configure({ adapter: new Adapter() });

/* 
 it('renders welcome message', () => {
  const wrapper = shallow(<FavoriteContainer />);
  const welcome = <div className="">
  <h2>Tiendas Favoritas</h2>
  { this.props.newStores.map((stores,i) =>(
    <div className="card-fav" key={i}>
    <p>Nombre: {stores.nameStore}</p>
    <p>Dirección: {stores.addRess}</p>
    <button className="btn btn-primary" onClick={() => this.props.delete(stores.nameStore)} >Borrar</button>
    </div>))}
</div>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
}); 
 */
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
  
    expect(component).toMatchSnapshot();
  });
});
describe('Marker', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<InMap debug />);
  
    expect(component).toMatchSnapshot();
  });
});
