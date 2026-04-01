import React from 'react';
import {Welcome} from './components/Welcome';
import {Student} from './components/Student';
import {StudentFunction} from './components/StudentFunction';
import {Comments} from './components/Comments';
import {FruitList} from './components/FruitList';

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
var hasComments = true;
var longComment = false;
 
var listaNaOvosje = ['apple','banana','orange'];

return(
    <div>
      <FruitList listaNaOvosje={listaNaOvosje}/>
      <hr/>
      <Welcome name="Filip" lastName = "Dzukovski" age={29}/>
      <h2>App</h2>
      <Welcome name={name} lastName={lastName} age={age}/>
      <Student student={student}/>
      <StudentFunction student={student}/>
      <hr/>
      <Comments hasComments={hasComments} longComment={longComment}/>
    </div>
  )

}