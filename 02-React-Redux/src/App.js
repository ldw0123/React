import './App.css';
import ReduxToolkit from './components/ReduxToolkit';
import WithoutRedux from './components/WithoutRedux';
import WithRedux from './components/WithRedux';

function App() {
  return (
    <div className="App">
      <h2>Redux 없는 React 프로젝트</h2>
      <WithoutRedux />
      <br />
      <hr />
      <br />
      <h2>Redux가 가미된 React 프로젝트</h2>
      <WithRedux />
      <br />
      <hr />
      <br />
      <ReduxToolkit />
      <br />
      <br />
    </div>
  );
}

export default App;
