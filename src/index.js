import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update imports

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <Router>
    <Routes>
      <Route path=".vercel.app/location/:id" element={<App />} /> {/* Wrap Route inside Routes */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
