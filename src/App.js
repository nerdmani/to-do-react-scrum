import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateAdd from './pages/create/CreateAdd';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home taskList={taskList} />} />
        <Route path="/about" element={<></>} />
        <Route 
          path="/create" 
          element={<CreateAdd setTaskList={setTaskList} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
