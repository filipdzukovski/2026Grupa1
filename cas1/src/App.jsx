import React from 'react'; //const React = require('react');
import {Hello} from './components/Hello';
// import {Goodbye} from './components/Goodbye';

export function App() {

  const broj = 1;
  let fraza = 'string vrednost';
  var karakter = 'c';

  return (
    <> 
      <h1>Hello from my App</h1>
      <Hello/>
      <p>This is a paragraph</p>
      <Hello/>
      <p>{5+3}</p>
      <h4>Brojot koj sto sum go napisal e: {broj}</h4>
      <h6>Fraza na denot: {fraza}</h6>
      <h1>{karakter}</h1>
      {/* <Goodbye/> */}
    </>
  )

}

//export default App;