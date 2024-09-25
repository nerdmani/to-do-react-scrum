import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditTask.css';

const EditTask = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { task, index } = location.state; 

    const [updatedTask, setUpdatedTask] = useState(task.task);
    const [updatedDate, setUpdatedDate] = useState(task.date);
    const [updatedTime, setUpdatedTime] = useState(task.time);
    const [updatedDesc, setUpdatedDesc] = useState(task.desc);

    const handleUpdate = () => {
        if (!updatedTask || !updatedDate || !updatedTime || !updatedDesc) {
            Swal.fire('Erro', 'Todos os campos devem ser preenchidos!', 'error');
            return;
        }
    
        const updatedTaskData = { task: updatedTask, date: updatedDate, time: updatedTime, desc: updatedDesc };
        
        navigate('/', { state: { updatedTaskData, index } });
    };

    return (
            <div className='d-flex flex-column align-items-center container page-app'>
                <h1 className='my-4'>Editar Tarefa</h1>
                <div className='card p-4 todo-card'>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título"
                            value={updatedTask}
                            onChange={(e) => setUpdatedTask(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            className="form-control"
                            value={updatedDate}
                            onChange={(e) => setUpdatedDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tempo"
                            value={updatedTime}
                            onChange={(e) => setUpdatedTime(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="Descrição"
                            value={updatedDesc}
                            onChange={(e) => setUpdatedDesc(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary my-3" onClick={handleUpdate}>
                        Atualizar
                    </button>
                    <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
                        Cancelar
                    </button>
                </div>
            </div>
    );
};

export default EditTask;
