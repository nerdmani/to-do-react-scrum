import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import CreateAdd from '../src/pages/create/CreateAdd'; 
import EditTask from '../src/pages/edit/EditTask';
import View from './pages/view/View';

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Signin />;
}

const App = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home taskList={taskList} setTaskList={setTaskList} />} />
                <Route exact path='create' element={<Private Item={Home} />} />
                <Route path="/create" element={<CreateAdd setTaskList={setTaskList} />} />
                <Route path="/edit" element={<EditTask />} /> 
                <Route path="/view" element={<View/>} />
            </Routes>
        </Router>
    );
}

export default App;
