
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import Task from "./components/Task/Task.tsx";

const App = () => (
    <>
    <AddTaskForm onAddTask = {()=> console.log('123')} onChangeText = {()=> console.log('123')}/>
        <Task textOfTask = {"123"} onDeleteTaskById ={()=> console.log('123')}/>
      </>
);

export default App;
