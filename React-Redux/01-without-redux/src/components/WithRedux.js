import React, { useState } from 'react';
import '../styles/normal.css';

export default function WithRedux() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h1>Left3 : </h1>
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
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {}}></input>
    </div>
  );
}
