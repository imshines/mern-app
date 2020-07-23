import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import EditExercise from './components/EditExercise';
import NewExercise from './components/NewExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Route path='/' exact component={Exercises} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={NewExercise} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
