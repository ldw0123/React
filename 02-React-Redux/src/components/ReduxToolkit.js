import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/ReduxToolkit;';

// slice: 리듀서와 액션을 "슬라이스"라는 단위로 관리
// createSlice: 슬라이스를 쉽게 생성할 수 있게 해 주는 함수
// createSlice의 객체 인자들: name(이름), initialState(state의 초기값), reducers(리듀서. 복수형!)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // action 타입이 up일 때 다음 함수가 실행됨
    up: (state, action) => {
      state.value = state.value + action.step;
    },
  },
});
// configureStore(): store를 쉽게 설정할 수 있게 해주는 함수
configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

/* 
function reducer(state, action) {
  if (action.type == 'up') {
    return { ...state, value: state.value + action.step };
  }
  return state;
}
const initialState = { value: 0 };
const store = createStore(reducer, initialState);
*/

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
