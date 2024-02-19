import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

function reducer(state, action) {
  if (action.type == 'up') {
    return { ...state, value: state.value + action.step };
  }
  return state;
}

const initialState = { value: 0 };
const store = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'up', step: 2 });
        }}
      >
        2씩 증가하는 버튼
      </button>{' '}
      {count}
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
