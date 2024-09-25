import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import CreateAdd from '../src/pages/create/CreateAdd'; 

const App = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home taskList={taskList} />} />
                <Route path="/create" element={<CreateAdd setTaskList={setTaskList} />} />
            </Routes>
        </Router>
    );
}

export default App;
