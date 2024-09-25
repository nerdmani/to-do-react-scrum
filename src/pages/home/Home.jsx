import React, { useState, useEffect } from "react";
import { Nav } from "../../components";
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import { Check, Trash, Share2, Edit } from 'lucide-react';
import Swal from 'sweetalert2';

const Home = ({ taskList, setTaskList }) => {
    const navigate = useNavigate();
    const location = useLocation(); 
    
    useEffect(() => {
        if (location.state && location.state.updatedTaskData) {
            const { updatedTaskData, index } = location.state;
            if (taskList[index] !== updatedTaskData) {
                const updatedTaskList = [...taskList];
                updatedTaskList[index] = updatedTaskData; 
                setTaskList(updatedTaskList);
            }
        }
    }, [location.state]); 
    

    const deleteTask = (index) => {
        Swal.fire({
            title: 'Você tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sim, excluir!'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedTaskList = taskList.filter((_, i) => i !== index);
                setTaskList(updatedTaskList);
                Swal.fire('Excluído!', 'Sua tarefa foi excluída.', 'success');
            }
        });
    };

    const openEditTask = (index) => {
        const taskToEdit = taskList[index];
        navigate('/edit', { state: { task: taskToEdit, index } });
    };

    return (
        <div>
            <Nav text={"Visualização de tarefas"} />

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="src\img\floresta-amazonica-paisagem.webp" className="d-block w-100" alt="Paisagem Natural" />
                    </div>
                    <div className="carousel-item">
                        <img src="src\img\paisagem-natural-e-humanizada.jpg" className="d-block w-100" alt="Paisagem Natural" />
                    </div>
                    <div className="carousel-item">
                        <img src="src\img\paisagem-natural.jpg" className="d-block w-100" alt="Paisagem Natural" />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center mt-4" style={{ position: 'relative', zIndex: 1 }}>
                <ul className='list-group'>
                    {taskList.length === 0 ? (
                        <li className='list-group-item'>Nenhuma tarefa adicionada.</li>
                    ) : (
                        taskList.map((item, index) => (
                            <li className='list-group-item' key={index}>
                                <div className="card mb-3" style={{ width: '30rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Titulo: </strong>{item.task}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted"><strong>Data: </strong>{item.date}</h6>
                                        <p className="card-text"><strong>Tempo: </strong>{item.time}</p>
                                        <p className="card-text"><strong>Descrição: </strong> {item.desc}</p> 
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-primary me-2" onClick={() => openEditTask(index)}>
                                                <Edit size={16} />
                                            </button>
                                            <button className="btn btn-secondary me-2"><Share2 size={16} /></button>
                                            <button className="btn btn-success me-2"><Check size={16}/></button>
                                            <button 
                                                className="btn btn-danger" 
                                                onClick={() => deleteTask(index)}
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

                <button 
                    className="custom-button" 
                    onClick={() => navigate('/create')}
                >
                    Adicionar Tarefa
                </button>
            </div>
        </div>
    );
}

export default Home;
