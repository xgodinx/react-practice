import { useState } from 'react';
import Button from '../Button/Button';

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [todoTask, setTodoTask] = useState('');

  // удаление по самому тексту задачи
  function filterToDo(taskToRemove: any) {
    setTodos((prev) => prev.filter((item) => item !== taskToRemove));
  }

  return (
    <section>
      <input
        style={{ height: '18px' }}
        type="text"
        placeholder="Enter task"
        value={todoTask}
        onChange={(event) => setTodoTask(event.target.value)}
      />
      <Button
        onClick={() => {
          if (todoTask.trim()) {
            setTodos([...todos, todoTask]);
            setTodoTask('');
          }
        }}
      >
        Add Task
      </Button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <Button onClick={() => filterToDo(item)}>Remove</Button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ToDo;
