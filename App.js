import React, {useState} from 'react'; // useState: state를 사용하게 해 줌.리액트에서 제공하는 유용한 함수 중 하나 (리액트훅)
import './App.css';

function App() {
  let count = 0;
  const [count2, setCount2] = useState(0); // 초기값: 0
  const increase = () => {
    count = count + 1;
    setCount2(count2 + 1) // state는 함수.
    console.log("count work?", count, "state count2", count2)
  }
  return(
   <main>
    <div>{count}</div>
    <div>state:{count2}</div>
    <button count onClick={increase}>증가</button>
   </main>
  );
}

export default App;
