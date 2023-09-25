import React from 'react';
import './styles.css';

interface Props{
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({task, setTask, handleAdd}:Props) => {
  return (
    <div>
      <form className='input' onSubmit={handleAdd}>
        <input type = "input" 
        value = {task}
        onChange = {(e) => setTask(e.target.value)}
        placeholder='Enter a Task' className='input_box'></input>
        <button className = 'input_sumbit' type = 'submit'>Add</button>
      </form>
    </div>
  )
}

export default InputField
