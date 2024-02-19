import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state, action) {
  return state;
}

const initialState = { value: 0 };
const store = createStore(reducer, initialState);
function Counter() {
  return (
    <div>
      <button>+</button> 0
    </div>
  );
}

export default function ReduxToolkit() {
  return (
    <>
      <h2>Redux Toolkit</h2>
      <Provider store={store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider>
    </>
  );
}
