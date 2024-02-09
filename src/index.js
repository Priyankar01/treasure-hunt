import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <Router>
    <Routes>
      <Route path="/location/:id" element={<App />} /> 
    </Routes>
  </Router>,
  document.getElementById('root')
);