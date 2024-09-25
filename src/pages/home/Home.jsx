import React from "react";
import { Nav } from "../../components";
import { useNavigate } from 'react-router-dom';

const Home = ({ taskList }) => {
    const navigate = useNavigate();

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
                <ul className='list-group '>
                    {taskList.length === 0 ? (
                        <li className='list-group-item'  >Nenhuma tarefa adicionada.</li>
                    ) : (
                        taskList.map((item, index) => (
                            <li className='list-group-item'style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={index}>
                                <div><strong>Título da tarefa:</strong> {item.task}</div>
                                <div><strong>Data:</strong> {item.date}</div>
                                <div><strong>Hora:</strong> {item.time}</div>
                                <div><strong>Mensagem:</strong></div>
                                <div>{item.message}</div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Home;
