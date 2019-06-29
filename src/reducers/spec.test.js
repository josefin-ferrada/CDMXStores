import modal from './modal';
import reducers from './../reducers';

test('reducers', () => {
  let state;
  state = reducers({modal:{favStore:[]}}, {type:'ADD_TO_FAV',payload:{nameStore:'Red Barn Stores 2041-TOLTECAS',addRess:'AV. HIDALGO S/N  COL. INDUSTRIAL TLAXCOLPAN CP 54030 , TLALNEPANTLA DE BAZ, EDO. DE MEX.'}});
  expect(state).toEqual({modal:{favStore:[{nameStore:'Red Barn Stores 2041-TOLTECAS',addRess:'AV. HIDALGO S/N  COL. INDUSTRIAL TLAXCOLPAN CP 54030 , TLALNEPANTLA DE BAZ, EDO. DE MEX.'}]}});
});
test('reducers', () => {
    let state;
    state = reducers({modal:{favStore:[{nameStore:'Red Barn Stores 2041-TOLTECAS',addRess:'AV. HIDALGO S/N  COL. INDUSTRIAL TLAXCOLPAN CP 54030 , TLALNEPANTLA DE BAZ, EDO. DE MEX.'}]}}, {type:'DELETE_FAV',payload:{nameStore:'Red Barn Stores 2041-TOLTECAS'}});
    expect(state).toEqual({modal:{favStore:[]}});
  });
  

describe('modal Reducer', () => {

    it('Debería retornar el estado por defecto', () => {
        const newState = modal(undefined, {});
        expect(newState).toEqual({"favStore": []});
    });
    
})