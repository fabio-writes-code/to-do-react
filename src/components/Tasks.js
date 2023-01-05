import Task from "./Task"

const Tasks = ({tasks, onDelete, onReminder}) => {
  return (
    <div>
      {tasks.map(t => (
        <Task key={t.id} task={t} onDelete={onDelete} onReminder={onReminder}/>
      ))}
    </div>
  )
}

export default Tasks