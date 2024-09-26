import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditTask.css';
import InputMask from 'react-input-mask'; 

const EditTask = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { task, index } = location.state;

    const [updatedTask, setUpdatedTask] = useState(task.task);
    const [updatedDate, setUpdatedDate] = useState(task.date);
    const [updatedTime, setUpdatedTime] = useState(task.time);
    const [updatedDesc, setUpdatedDesc] = useState(task.desc);
    
    const calculateMaxDate = () => {
        const today = new Date();
        const maxDate = new Date(today.setFullYear(today.getFullYear() + 2)); 
        return maxDate.toISOString().split('T')[0]; 
    };

    const [maxDate, setMaxDate] = useState(calculateMaxDate());

    const handleUpdate = () => {
        const today = new Date();
        const selectedDate = new Date(updatedDate);

        if (!updatedTask || !updatedDate || !updatedTime || !updatedDesc) {
            Swal.fire('Erro', 'Todos os campos devem ser preenchidos!', 'error');
            return;
        }

        if (selectedDate < today || selectedDate > new Date(maxDate)) {
            Swal.fire('Erro', 'A data deve estar dentro do intervalo permitido (até 2 anos à frente).', 'error');
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
                    <InputMask
                        mask="99/99/9999"
                        className="form-control"
                        placeholder="Data (dd/mm/yyyy)"
                        value={updatedDate}
                        onChange={(e) => setUpdatedDate(e.target.value)}
                    />
                    <small>Limite de data: até {maxDate.split('-').reverse().join('/')}</small> 
                </div>
                <div className="form-group">
                    <InputMask
                        mask="99:99"
                        className="form-control"
                        placeholder="Hora (hh:mm)"
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
