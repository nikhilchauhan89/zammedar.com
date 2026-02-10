import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const AddTask = ()=>{
    const [text, setText]=useState("")
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
      e.preventDefault();
     dispatch(addTask(text))
      setText("");
    }
    return(
      <form onSubmit={handleSubmit}>
        <input placeholder="Add a Task" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    )
}
export default AddTask;