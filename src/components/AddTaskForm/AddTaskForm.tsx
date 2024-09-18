
import './AddTaskForm.css';
import React from 'react';

interface Props extends React.PropsWithChildren{
    onAddTask: React.MouseEventHandler;
    onChangeText:React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<Props> = ({onChangeText, onAddTask}) => {
    return (
        <div className="form">
            <input className="input-task" type="text"  onChange={onChangeText}/>
            <button className="add-btn" type="button" onClick={onAddTask}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;