// 버튼을 클릭하면 1씩 증가하는 프로그램
import React, {useState} from 'react'; // useState: state를 사용하게 해 줌.리액트에서 제공하는 유용한 함수 중 하나 (리액트훅)
import './App.css';

function App() {
  let count = 0;
  const [count2, setCount2] = useState(0); // 초기값: 0
  const increase = () => {
    count = count + 1;
    setCount2(count2 + 1) // state는 함수.
    console.log("count work?", count, "state count2", count2)
    // count의 초기값은 1, count2의 초기값은 0
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
