import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onReminder}) => {
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onReminder(task.id)}>
      <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{curson:'pointer'}}/> </h3>
      <p>{task.day}</p>

    </div>
  )
}

export default Task