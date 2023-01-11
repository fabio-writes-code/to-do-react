import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Reminder1",
      day: "Feb 5th at 5:00pm",
      remider: false
    },
    {
      id: 2,
      text: "Reminder2",
      day: "Feb 6th at 6:00pm",
      remider: true
    },
    {
      id: 3,
      text: "Reminder3",
      day: "Feb 7th at 7:00pm",
      remider: true
    }
  ])


  //Delete task
  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  //Reminder
  const reminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

  }
  return (
    <div className="container">
      <Header title={'Task Tracker'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onReminder={reminder} /> : 'No tasks available'}
      <Button onClick={() => setShowAddTask(!showAddTask)} color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Create New Task'} />
      {showAddTask && <AddTask onAddTask={addTask} />}
    </div>
  );
}

export default App;
