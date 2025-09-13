import { useState } from "react"

function ToDo() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  console.log(tasks)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!task.trim()) return
    
    setTasks([...tasks, task])
    setTask('')
  }

  const haandleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          
          />

        <button type="submit">
          Add
        </button>
        <button type="button" onClick={() => setTasks([])}>
          Delete all
        </button>
      </form>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => haandleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default ToDo