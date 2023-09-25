import React from 'react'
import './styles.css';
import { Todo_model } from './todo_model';
import TaskCard from './taskCard';

interface Props {
    tasks: Array<Todo_model>;
    setTasks: React.Dispatch<React.SetStateAction<Array<Todo_model>>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo_model>>>;
    CompletedTodos: Array<Todo_model>;
  }
  
const TodoList:React.FC<Props> =  ({
    tasks,
    setTasks,
    CompletedTodos,
    setCompletedTodos,
  }) => {
    return (
      <div className="container">
              <span className="todos__heading">Active Tasks</span>
              {tasks?.map((todo, index) => (
                <TaskCard
                  index={index}
                  todos={tasks}
                  todo={todo}
                  key={todo.id}
                  setTodos={setTasks}
                />
              ))}
           
              <span className="todos__heading">Completed Tasks</span>
              {CompletedTodos?.map((todo, index) => (
                <TaskCard
                  index={index}
                  todos={CompletedTodos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              ))}
              
      </div>
    );
  };
  
export default TodoList
