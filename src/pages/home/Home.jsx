import React from "react";
import { Nav } from "../../components";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import { Check , Trash, Share2, Edit} from 'lucide-react';

const Home = ({ taskList }) => {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <div>
            <Nav text={"Visualização de tarefas"} />
            <div className="d-flex flex-column align-items-center mt-4">

            <ul className='list-group'>
            {taskList.length === 0 ? (
                <li className='list-group-item'>Nenhuma tarefa adicionada.</li>
            ) : (
                taskList.map((item, index) => (
                    <li className='list-group-item' key={index}>
                        <div className="card mb-3" style={{ width: '30rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.task}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                                <p className="card-text">{item.time}</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary me-2"><Edit size={16} /></button>
                                    <button className="btn btn-secondary me-2"><Share2 size={16} /></button>
                                    <button className="btn btn-success me-2"><Check size={16}/></button>
                                    <button className="btn btn-danger"><Trash size={16} /></button>
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
