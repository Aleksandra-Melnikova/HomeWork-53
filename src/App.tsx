
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from "./components/Task/Task.tsx";
import {useState} from "react";

interface ITask {
    text: string;
    id: string,
}


const App = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {id: '123', text: "Buy milk"},
        {id: '1234', text: "Walk with dog"},
        {id: '12345', text: "Do homework"},
    ]);

    const [currentTasks, setCurrentTasks] = useState<ITask[]>([
        {id: '', text: ""},
    ])

    const changeText = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        console.log(e.target.value);
        const copyCurrentTasks = [...currentTasks];
        const  copyCurrentTask = {...copyCurrentTasks[index]}
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
    }

    const deleteTask = (id:string) =>{

        const copyTasks = tasks.filter(task => task.id !== id);
        // let index = people.findIndex(person => person.id === id);
//     const copyPeople = [...people];
// copyPeople.splice(index,1);
        setTasks(copyTasks );
    };
    return(
    <>
        <div className='main-block'>)
        <AddTaskForm onAddTask = {addTask} onChangeText = {e => changeText(e,0)}/>
        {tasks.map((task) => (
            <Task
                key={task.id}
                textOfTask={task.text}
                onDeleteTaskById={() => deleteTask(task.id)}>
            </Task>

        ))}
        </div>
    </>
    )
};


export default App;
