import React from 'react';
import './task.css';

interface ITask extends React.PropsWithChildren{
    textOfTask: string;
    onDeleteTaskById:React.MouseEventHandler;
    checked: boolean;
    onChangeCheckbox:React.ChangeEventHandler;
    checkId:string;
}

const Task: React.FC<ITask> = ({textOfTask, onDeleteTaskById, checked, onChangeCheckbox, checkId}) => {
    return (
        <div className="task-item">
            <p className="text-task">{textOfTask}</p>
            <button className="remove-btn" type="button" onClick={onDeleteTaskById}>Remove task</button>
            <div className="check-item">
            <label className="label" htmlFor={`che-${checkId}`}> Task done</label>
            <input className="check" id={`che-${checkId}`} type="checkbox" checked={checked} onChange={onChangeCheckbox}/>
            </div>
        </div>
    );
};

export default Task;