import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View.css';
import { Share2 } from 'lucide-react';
import Swal from 'sweetalert2';

const View = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { task } = location.state; 

    const shareTask = () => {
        navigator.clipboard.writeText(window.location.href);
        Swal.fire({
            title: 'Link copiado',
            text: 'O link foi copiado para a área de transferência',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }

    return (
        <div className='d-flex flex-column align-items-center container page-app'>
            <h1 className='my-4'>Visualizar Tarefa</h1>
            <div className='card p-4 todo-card'>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título"
                        value={task.task}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        value={task.date}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tempo"
                        value={task.time}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Descrição"
                        value={task.desc}
                        readOnly
                    />
                </div>
                < div className='botoes-de-baixo'>
                    <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
                        Voltar
                    </button>
                    <button className="btn btn-secondary mt-3" onClick={() => shareTask()}>
                        <Share2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default View;
