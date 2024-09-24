import React from "react";
import { Nav } from "../../components";
import { useNavigate } from 'react-router-dom';

const Home = ({ taskList }) => {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <div>
            <Nav text={"Visualização de tarefas"} />
            <div className="d-flex flex-column align-items-center mt-4">
                <h2>Tarefas</h2>
                <button 
                    className="btn btn-primary mb-3" 
                    onClick={() => navigate('/create')}
                >
                    Adicionar Tarefa
                </button>
                <ul className='list-group'>
                    {taskList.length === 0 ? (
                        <li className='list-group-item'>Nenhuma tarefa adicionada.</li>
                    ) : (
                        taskList.map((item, index) => (
                            <li className='list-group-item' key={index}>
                                <strong>{item.task}</strong> - {item.date} {item.time}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Home;
