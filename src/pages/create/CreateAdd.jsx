import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAdd.css';

class CreateAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: '',
            time: '',
            taskList: []
        };
    }

    handleDateChange = (e) => {
        this.setState({ date: e.target.value });
    }

    handleTimeChange = (e) => {
        this.setState({ time: e.target.value });
    }

    handleInputChange = (e) => {
        this.setState({ task: e.target.value });
    }

    addTask = () => {
        const { task, date, time } = this.state;
        if (task && date && time) {
            this.setState(prevState => ({
                taskList: [...prevState.taskList, { task, date, time }],
                task: '',
                date: '',
                time: ''
            }));
        }
    }

    render() {
        return (
            <div className='d-flex flex-column align-items-center container page-app'>
                <h1 className='my-4'>Criação de Lista</h1>
                
                <div className='card p-4 todo-card'>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Adicionar...'
                            value={this.state.task}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input  
                            type='date'
                            className='form-control'
                            value={this.state.date}
                            onChange={this.handleDateChange}    
                        />
                    </div>

                    <div className='form-group'>
                        <input  
                            type='time'
                            className='form-control'
                            value={this.state.time}
                            onChange={this.handleTimeChange}    
                        />
                    </div>
                    
                    <button className='btn btn-primary my-3' onClick={this.addTask}>
                        Adicionar a Lista
                    </button>
                    
                    <ul className='list-group'>
                        {this.state.taskList.map((item, index) => (
                            <li className='list-group-item' key={index}>
                                <strong>{item.task}</strong> - {item.date} {item.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CreateAdd;
