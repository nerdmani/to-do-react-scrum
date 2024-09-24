import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAdd.css';

const CreateAdd = ({ setTaskList }) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate(); // Usa o hook useNavigate

    const addTask = () => {
        if (task && date && time) {
            setTaskList(prevTaskList => [
                ...prevTaskList,
                { task, date, time }
            ]);

            // Limpa os campos
            setTask('');
            setDate('');
            setTime('');

            // Navega de volta para a página inicial
            navigate('/');
        }
    }

    return (
        <div className='d-flex flex-column align-items-center container page-app'>
            <h1 className='my-4'>Criação de Lista</h1>
            
            <div className='card p-4 todo-card'>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Adicionar...'
                        value={task}
                        onChange={e => setTask(e.target.value)} // Atualiza o estado do task
                    />
                </div>

                <div className='form-group'>
                    <input  
                        type='date'
                        className='form-control'
                        value={date}
                        onChange={e => setDate(e.target.value)} // Atualiza o estado do date
                    />
                </div>

                <div className='form-group'>
                    <input  
                        type='time'
                        className='form-control'
                        value={time}
                        onChange={e => setTime(e.target.value)} // Atualiza o estado do time
                    />
                </div>
                
                <button className='btn btn-primary my-3' onClick={addTask}>
                    Adicionar a Lista
                </button>
            </div>
            <button className='btn btn-secondary mt-3' onClick={() => navigate('/')}>
                Voltar
            </button>
        </div>
    );
}

export default CreateAdd;
