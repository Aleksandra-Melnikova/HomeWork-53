
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from "./components/Task/Task.tsx";
import {useState} from "react";

interface ITask {
    textOfTask: string;
    id: string,
}


const App = () => {

    const [task, setTask] = useState<ITask[]>([
        {id: '123', textOfTask: "John"},
        {id: '1234', textOfTask: "Jane"},
        {id: '12345', textOfTask: "Jane"},
    ]);


    return(
    <>
        <AddTaskForm onAddTask = {()=> console.log('123')} onChangeText = {()=> console.log('123')}/>
        <Task textOfTask = {"123"} onDeleteTaskById ={()=> console.log('123')}/>
    </>
    )
};


export default App;
