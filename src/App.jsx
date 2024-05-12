import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import PublicProject from './page/PublicProject';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route exact path="/project/:namaResource" element={<PublicProject/>} />
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;