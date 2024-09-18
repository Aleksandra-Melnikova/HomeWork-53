import React from 'react';
import './task.css';

interface ITask extends React.PropsWithChildren{
    textOfTask: string;
    onDeleteTaskById:React.MouseEventHandler;
    checked: boolean;
    onChangeCheckbox:React.ChangeEventHandler;
}

const Task: React.FC<ITask> = ({textOfTask, onDeleteTaskById, checked, onChangeCheckbox}) => {
    return (
        <div className="task-item">
            <p className="text-task">{textOfTask}</p>
            <button className="remove-btn" type="button" onClick={onDeleteTaskById}>Remove task</button>
            <input type="checkbox" checked={checked} onChange={onChangeCheckbox}/>
        </div>
    );
};

export default Task;