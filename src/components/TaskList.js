import { useSelector } from "react-redux";
import TaskItems from "./TaskItems";

const TaskList = ()=>{
    const{items,filter}= useSelector(state=>state.tasks);
    const filtered = filter === 'completed'
    ? items.filter(task => task.completed):items;
    console.log(items,'items')
    return(
     <ul>
      {filtered.map(task =>(
        <TaskItems key={task.id} task={task}/>
      ))}
     </ul>
    )

}

export default TaskList;