import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import store from './store';
import { up } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log('state: ', state);
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
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
