import '../src/reducers';
import initialState from './../store';

describe('reducers', () => {
  it('debería retornar el estado inicial', () => {
    expect(modal(undefined, {})).toMatchSnapshot();
  });

  it('should handle TODO_REQUEST', () => {
    expect(
      modal(initialState,
        {
          type: 'ADD_TO_FAV',
        }),
    ).toMatchSnapshot();
  });
});