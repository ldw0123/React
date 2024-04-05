import React, { useState } from 'react';
import '../styles/normal.css';
import { createStore } from 'redux'; // store 생성
// Provider: 최상위 컴포넌트인 App 컴포넌트를 Provider로 감싸주어야 한다. provider를 통해 어느 컴포넌트에서라도 store에 접근할 수 있게 된다
import { Provider, useSelector, useDispatch, conect } from 'react-redux';

function reducer(currentState, action) {
  // reducer 선언
  // reducer: store 안의 state(인자 1. currentState) 를 어떻게 변경(인자2. action) 할 것인가를 결정
  if (currentState === undefined) {
    // state 가 정의되지 않았다면
    return {
      number: 1, // 기본 state 값 선언
    };
  }

  const newState = { ...currentState }; // 과거의 객체(currentState)를 현재 객체(newState)로 복제 (불변성 유지)
  if (action.type === 'PLUS') {
    // action의 type이 PLUS라면, newState의 number를 1 증가
    newState.number++;
  }
  return newState; // 새로운 state 값 반환
}

const store = createStore(reducer); // store를 수정하면 안 되기 때문에 상수로 선언

export default function WithRedux() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1: </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  console.log('3');
  // useSelector(): store의 상태를 조회할 수 있는 React Hook. 함수의 인자로 상태를 선택하는 함수를 넘겨주면, 이 함수를 통해 선택된 상태를 컴포넌트와 연결해준다. 이때, 상태가 변경될 때마다 컴포넌트도 리렌더링이 된다
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  // useDispatch(): store의 dispatch를 사용할 수 있게 해주는 React Hook. 이를 통해, 액션을 디스패치하여 상태를 변경할 수 있다
  // dispatch는 reducer를 호출해서 state 값을 바꾼다
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      ></input>
    </div>
  );
}
