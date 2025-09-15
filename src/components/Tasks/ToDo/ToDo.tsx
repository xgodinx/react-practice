import { useState } from 'react';
import Button from '../../Base/Button/Button';

function ToDo() {
  const [todos, setTodos]: any = useState([]);
  const [todoTask, setTodoTask] = useState('');

  function filterToDo(taskToRemove: any) {
    setTodos((prev: any) => prev.filter((item: any) => item !== taskToRemove));
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
        {todos.map((item: any, index: any) => (
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
