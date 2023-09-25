import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo_model } from './components/todo_model';
import TodoList from './components/TodoList';

const App:React.FC = () => {
const [task,setTask] = useState<string>("");
const [tasks,setTasks] = useState<Todo_model[]>([]);
const [CompletedTodos, setCompletedTodos] = useState<Array<Todo_model>>([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault() ;
  if (task) {
    setTasks([...tasks,{id: Date.now(), todo: task ,completed: false}]);

    setTask('')

  }
  
};
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField task = {task} setTask = {setTask} handleAdd = {handleAdd}/>
      <TodoList
       tasks = {tasks}
       setTasks = {setTasks}
      CompletedTodos={CompletedTodos}
      setCompletedTodos={setCompletedTodos}/>    
    </div>
  );
}

export default App;
