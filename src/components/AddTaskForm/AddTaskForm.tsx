
import './AddTaskForm.css';
import React from 'react';

interface Props extends React.PropsWithChildren{
    onAddTask: React.MouseEventHandler;
    onChangeText:React.ChangeEventHandler<HTMLInputElement>;
    inputText:string;
}

const AddTaskForm: React.FC<Props> = ({onChangeText, onAddTask, inputText}) => {
    return (
        <div className="form">
            <input value={inputText} placeholder="Add new task" className="input-task" type="text"  onChange={onChangeText}/>
            <button  className="add-btn" type="button" onClick={onAddTask}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;