import './App.css';
import Normal from './components/Normal';
import WithRedux from './components/WithRedux';

function App() {
  return (
    <div className="App">
      <h2>Redux 없는 React 프로젝트</h2>
      <Normal />
      <br />
      <hr />
      <br />
      <h2>Redux가 첨가된 React 프로젝트</h2>
      <WithRedux />
    </div>
  );
}

export default App;
