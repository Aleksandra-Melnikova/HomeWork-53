import React from 'react';
import './task.css';

interface ITask extends React.PropsWithChildren{
    textOfTask: string;
    onDeleteTaskById:React.MouseEventHandler;
}

const Task: React.FC<ITask> = ({textOfTask, onDeleteTaskById}) => {
    return (
        <div className="task-item">
            <p className="text-task">{textOfTask}</p>
            <button className="remove-btn" type="button" onClick={onDeleteTaskById}>Remove task</button>
        </div>
    );
};

export default Task;