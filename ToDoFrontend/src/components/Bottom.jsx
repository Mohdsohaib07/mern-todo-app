import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Bottom = ({tasks,setTasks}) => {

  async function handleClear(){
    if(tasks.length>0){
      try{
        const res = await axios.delete(`https://mern-todo-app-livid.vercel.app/`);
        console.log(res.data);
        toast.success(res.data.message);
           setTasks([]);
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      toast.info('No data to clear !');
    }

 
  }
  return (
    <div className='bottom-container'>
      <p>You have {tasks.length} pending Tasks</p>
      <button onClick={handleClear}>Clear All</button>
    </div>
  )
}

export default Bottom;
