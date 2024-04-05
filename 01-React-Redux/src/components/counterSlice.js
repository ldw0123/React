import { createSlice } from '@reduxjs/toolkit';

// slice: 리듀서와 액션을 "슬라이스"라는 단위로 관리
// createSlice: 슬라이스를 쉽게 생성할 수 있게 해 주는 함수
// createSlice의 객체 인자들: name(이름), initialState(state의 초기값), reducers(리듀서. 복수형!)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // action 타입이 up일 때 다음 함수가 실행됨
    up: (state, action) => {
      console.log('action: ', action);
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions; // actions에 있는 이름들 중에서 up을 export시킴
