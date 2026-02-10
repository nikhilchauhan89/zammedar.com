import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/taskSlice";
// import './index.css'

const FilterTask = () => {
    const filter = useSelector(state => state.tasks.filters);
    console.log(filter)
    const dispatch = useDispatch(); 
    // const filteri =()=>{
    //   if(filter==='all'){
    //     'active'
    //   }else{
    //     ""
    //   }
    // }
    return (
     <div>
    <button  onClick = {()=>dispatch(setFilter('all'))} className={`button ${filter === 'all' ? 'active' : ''}`}>All</button>
        <button onClick={()=>dispatch(setFilter('completed'))} className={`button ${filter === 'completed' ? 'active' : ''}`}>completed</button>
     </div >
    )
}

export default FilterTask;