import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateAdd from './pages/create/CreateAdd'; 
import EditTask from './pages/edit/EditTask';
import View from './pages/view/View';
import useAuth from './hooks/useAuth';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';

const PrivateRoute = ({ children }) => {
    const { signed } = useAuth();

    return signed ? children : <Navigate to="/login" />;
};

const App = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <Router>
            <Fragment>
                <Routes>
                    {/* Rota de Login */}
                    <Route path="/login" element={<Login />} />

                    {/* Rota de Cadastro */}
                    <Route path="/signup" element={<Cadastro />} />

                    {/* Rotas Privadas */}
                    <Route path="/" element={<PrivateRoute><Home taskList={taskList} setTaskList={setTaskList} /></PrivateRoute>} />
                    <Route path="/create" element={<PrivateRoute><CreateAdd setTaskList={setTaskList} /></PrivateRoute>} />
                    <Route path="/edit" element={<PrivateRoute><EditTask /></PrivateRoute>} />
                    <Route path="/view" element={<PrivateRoute><View /></PrivateRoute>} />

                    {/* Rota padrão (fallback) */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Fragment>
        </Router>
    );
}

export default App;
