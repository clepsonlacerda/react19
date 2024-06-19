import { useState } from 'react';
import './App.css'
import FormState from './formState';

function App() {

  const [tasks, setTasks] = useState([]);

  function handleAddTask(formData) {
    const name = formData.get("task");

    setTasks(prevState => [...prevState, name]);
  }

  return (
    <>
      {/* <form action={handleAddTask} >
        <label>Nome da tarefa</label>
        <input type="text" name='task' />
        <button type="submit">cadastrar</button>
      </form>

      <ul>
        {tasks.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul> */}

      <FormState />
    </>
  )
}

export default App
