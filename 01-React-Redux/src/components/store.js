import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// configureStore(): store를 쉽게 설정할 수 있게 해주는 함수. 객체를 전달해서 구성. reducer가 필수로 있어야 함
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
