import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import App from './App';
import First from './First';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <Router>
    <Routes>
      <Route path='/' element={<First />}/>
      <Route path="/location/:id" element={<App />} /> 
    </Routes>
  </Router>,
  document.getElementById('root')
);