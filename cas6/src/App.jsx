import React, { useEffect, useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ChildComponent } from './components/ChildComponent';
import { NotFound } from './components/NotFound';
import { Users } from './components/Users';


export function App() {

  const [users, setUsers] = useState([]);

  function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json))
      .catch(err => alert(err));
  }

  useEffect(() => {
    setTimeout(() => { getUsers() }, 500)
  }, []) //componentDidMount

  return (
    <div id='app'>
      {/* <button onClick={getUsers}> Fetch Users</button> */}
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='us' element={<ChildComponent />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users usersList={users} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


// <Switch>
//     <Route path='/' component={Home} />
//     <Route path='/about' component={About} />
//     <Route path='/contact' component={Contact} />
// </Switch> v5 implementation of react-router-dom