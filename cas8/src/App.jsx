import React, { useState,useEffect } from 'react';
import { Todos } from './components/Todos';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Gallery } from './components/Gallery';
import axios from 'axios';

export function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);
  const [editTodo, setEditTodo] = useState(null);//{id,text,done}


  const [photos,setPhotos] = useState([]);

  useEffect(()=>{
    axios('https://picsum.photos/v2/list')
        .then(res=>setPhotos(res.data))
        .catch(err=>alert)
  },[])

  function addTodo() {
    let newObj = {
      id: Math.ceil(Math.random() * 10000),
      text: newTodo,
      done: false
    }

    setTodos([...todos, newObj]);
    setNewTodo('')
  }

  function markAsDone(todo) {
    setTodos([...todos.map(item => item.id === todo.id ?
      { id: item.id, text: item.text, done: !item.done }
      :
      item

    )])
  }

  function deleteTodo(todoId) {
    setTodos([...todos.filter(item => item.id !== todoId)])
  }

  function handleEdit(id, text) {
    setEditTodo({ id, text })

  }

  function handleCancel() {
    setEditTodo(null);
  }

  function handleSave() {
    if (editTodo) {
      setTodos([...todos.map(item => item.id === editTodo.id ? { ...item, text: editTodo.text } : item)])
    }
    setEditTodo(null)
  }
  const completedElements = todos.filter(todo => todo.done).length;
  return (
    <div id='app'>
      {/* <input
        type='text'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
        placeholder='Add TODO'
      />
      <button onClick={addTodo}>Add Todo</button>

      <h3>Number of Completed Items: {completedElements}</h3>

      <button onClick={() => { setShowCompleted(!showCompleted) }}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button> */}




      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' 
        element={<Gallery listOfPhotos={photos}/>} 
        
        />
        {/* <Route path='/todos' element={
          <Todos
            listOfTodos={
              showCompleted ? todos : todos.filter(todo => !todo.done)
            }
            markAsDone={markAsDone}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            handleSave={handleSave}
          />} /> */}
      </Routes>
    </div>
  )
}