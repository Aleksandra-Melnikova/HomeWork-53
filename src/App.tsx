
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from './components/Task/Task.tsx';
import {useState} from 'react';

interface ITask {
    text: string;
    id: string,
    checked: boolean,
}

const App = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {id: '123', text: 'Buy milk', checked: false},
        {id: '1234', text: 'Walk with dog', checked: false},
        {id: '12345', text: 'Do homework', checked: false},
    ]);

    const [currentTasks, setCurrentTasks] = useState<ITask[]>([
        {id: '', text: '', checked: false},
    ]);

    const changeText = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        console.log(e.target.value);
        const copyCurrentTasks = [...currentTasks];
        const  copyCurrentTask = {...copyCurrentTasks[index]};
        copyCurrentTask.id = (new Date().getTime()).toString();
        copyCurrentTask.text = e.target.value;
        copyCurrentTasks[index]=copyCurrentTask;
        setCurrentTasks(copyCurrentTasks);
        console.log(copyCurrentTask);
    };

    const addTask = () => {
        const copyTasks = [...tasks];
        const copyTask = {...tasks[0]};
        copyTask.id = currentTasks[0].id;
        copyTask.text = currentTasks[0].text;
        copyTasks.push(copyTask);
        setTasks(copyTasks);
    };

    const deleteTask = (id:string) =>{
        const copyTasks = tasks.filter(task => task.id !== id);
        setTasks(copyTasks );
    };
    const changeCheckbox = (id:string) =>{
        const index = tasks.findIndex(task => task.id === id);
        const copyTasks = [...tasks];
        const copyTask = {...tasks[index]};
        copyTask.checked = !copyTask.checked;
        copyTasks[index] = copyTask;
        setTasks(copyTasks);

    };
    return(
    <>
        <div className='main-block'>)
        <AddTaskForm onAddTask = {addTask} onChangeText = {e => changeText(e,0)}/>
        {tasks.map((task) => (
            <Task
                key={task.id}
                textOfTask={task.text}
                onDeleteTaskById={() => deleteTask(task.id)}
                checked={task.checked}
                onChangeCheckbox = {() => changeCheckbox(task.id)}
            >
            </Task>

        ))}
        </div>
    </>
    );
};


export default App;
