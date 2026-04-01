import React from 'react';
import {Welcome} from './components/Welcome';
import {Student} from './components/Student';
import {StudentFunction} from './components/StudentFunction';

export function App(){

var name = "Nikola";
var lastName = "Nikolovski";
var age = 30;  
var student = {
  name: "Ivan",
  address: "Skopje",
  college: "UKIM",
  index:141088
}

  return(
    <div>
      <Welcome name="Filip" lastName = "Dzukovski" age={29}/>
      <h2>App</h2>
      <Welcome name={name} lastName={lastName} age={age}/>
      <Student student={student}/>
      <StudentFunction student={student}/>
    </div>
  )

}