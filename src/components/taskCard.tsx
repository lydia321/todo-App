import React, { useEffect, useRef, useState } from 'react'
import { Todo_model } from './todo_model'
import {AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css';

const TaskCard: React.FC<{
    index: number;
    todo: Todo_model;
    todos: Array<Todo_model>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo_model>>>;
  }> = ({ index, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
  
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
  
    const handleEdit = (e: React.FormEvent, id: number) => {
      e.preventDefault();
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      );
      setEdit(false);
    };
  
    const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const handleDone = (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.completed } : todo
        )
      );
    };
  
    return (
          <form className='single_todo'
            onSubmit={(e) => handleEdit(e, todo.id)}
          >
            {edit ? (
              <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="single_todo_text"
                ref={inputRef}
              />
            ) : todo.completed ? (
              <s className="single_todo_text"></s>
            ) : (
              <span className="single_todo_text">{todo.todo}</span>
            )}
            <div>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !todo.completed) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
              </span>
            </div>
          </form>
    );
  };
  
  export default TaskCard;