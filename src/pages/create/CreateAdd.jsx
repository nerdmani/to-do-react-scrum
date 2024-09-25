import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAdd.css';

const CreateAdd = ({ setTaskList }) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [desc, setDesc] = useState('');
    const navigate = useNavigate();

    const addTask = () => {
        if (task && date && time) {
            setTaskList(prevTaskList => [
                ...prevTaskList,
                { task, date, time, desc }
            ]);

            Swal.fire({
                title: 'Tarefa Adicionada!',
                text: 'Sua tarefa foi adicionada com sucesso.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            setTask('');
            setDate('');
            setTime('');
            setDesc('');

            navigate('/');
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Por favor, preencha todos os campos.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
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
                    <textarea  
                        className='form-control'
                        placeholder='Descrição...'
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
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
