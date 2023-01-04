import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from './Components/Header/Header'
import  AllSongs  from '../src/Components/Pages/AllSongs'
import  MyChart  from '../src/Components/Pages/MyChart'

import React from 'react';
import ReactDOM  from 'react-dom';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import reducer from '../src/reducer'
import { Provider } from 'react-redux';

import './App.css';

const App = () =>{

  return (
   <Router>
      <div className="App">
        <div className='container'>
          <header className="App-header">
            <Header/>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<AllSongs/>}/>
              <Route path="/my-chart" element={<MyChart/>}/>
            </Routes>
          </main>
        </div>
      </div>
   </Router>
  );
  
}

export default App;
