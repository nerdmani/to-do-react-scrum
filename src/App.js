import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import CreateAdd from './pages/create/CreateAdd'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<></>} />
        <Route path="/create" element={<CreateAdd/>} />
      </Routes>
    </Router>
  );
};

export default App;
