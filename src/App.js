import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks]=useState([])

  //useEffect
  useEffect(()=>{
    const getData=async ()=>{
      const taskFromServer=await fetchTasks()
      setTasks(taskFromServer)
    }
    getData()
  },[])

  // Fetch data from json
  const fetchTasks=async()=>{
    const res=await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

 
  //Delete task
  const deleteTask=(id)=>{
    
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  // add task
  const addTask=(task)=>{
    const id =Math.floor(Math.random()*10000)+1
    const newTask={id, ...task}
    setTasks([...tasks,newTask])
  }

 
  //Reminder
  const reminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))

  }
  return (
    <div className="container">
      <Header title={'Task Tracker'} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAddTask={addTask}/>}
      {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} onReminder={reminder}/>:'No tasks available'}
    </div>
  );
}

export default App;
