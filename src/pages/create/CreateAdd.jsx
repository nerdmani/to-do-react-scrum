import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAdd.css';

const CreateAdd = ({ setTaskList }) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const addTask = () => {
        if (task && date && time && message) {  // Certifique-se de que a mensagem não está vazia
            setTaskList(prevTaskList => [
                ...prevTaskList,
                { task, date, time, message }
            ]);

            // Limpar os campos
            setTask('');
            setDate('');
            setTime('');
            setMessage(''); 

            navigate('/');  // Redirecionar para a home após adicionar a tarefa
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
                        placeholder='Adicionar tarefa...'
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <input  
                        type='date'
                        className='form-control'
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                    />
                </div>

                <div className='form-group'>
                    <input  
                        type='time'
                        className='form-control'
                        value={time}
                        onChange={e => setTime(e.target.value)} 
                    />
                </div>

                <div className='form-group'>
                    <input  
                        type='text'
                        className='form-control'
                        placeholder='Mensagem...'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                
                <button className='btn btn-primary my-3' onClick={addTask}>
                    Adicionar à Lista
                </button>
            </div>
            <button className='btn btn-secondary mt-3' onClick={() => navigate('/')}>
                Voltar
            </button>
        </div>
    );
}

export default CreateAdd;
