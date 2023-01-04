import { BrowserRouter as Router} from 'react-router-dom'
// import { Header } from './Components/Header/Header'
import  Nav from '../src/Components/Nav/Nav'
import Main from './Components/Main/Main';

import React from 'react';
import './App.css';

const App = () =>{

  return (
   <Router>
     <div className="outerWrap">
      <div className="App">
                  {/* <header className="App-header">
            <Header/>
          </header> */}
        <Nav />
        <Main />
      </div>
    </div>
   </Router>
  );
  
}

export default App;
