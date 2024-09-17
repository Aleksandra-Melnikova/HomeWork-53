
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';

const App = () => (
    <>
    <AddTaskForm onAddTask = {()=> console.log('123')} onChangeText = {()=> console.log('123')}/>
      </>
);

export default App;
