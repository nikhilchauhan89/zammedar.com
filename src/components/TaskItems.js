import { all } from "axios";
import { useDispatch } from "react-redux";
import { deleteTask,toggleTask } from "../features/taskSlice";

const TaskItems = ({task})=>{
    const dispatch = useDispatch();
    return(
    
        <li className={`task ${task.completed ? `completed` : ''}`}>
            {task.text}
            <div>
                <button onClick={()=>dispatch(toggleTask(task.id))}>{task.completed ? "undo" : "Done"}</button>
                <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
            </div>
        </li>
    
    )
}

export default TaskItems;