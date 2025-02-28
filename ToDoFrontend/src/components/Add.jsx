import React, { useState } from 'react'
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { toast } from 'react-toastify';


const Add = ({setTasks}) => {
const [tempTask,setTempTask]= useState('');
  function handleChange(e){
      setTempTask(e.target.value);
      console.log(e.target.value);
      
  }


  async function handleAddTask(){
    console.log(tempTask);
    // (tempTask !=="") ? setTasks((prev)=>[...prev,{itemName:tempTask}]) : setTempTask('');
    if(tempTask !=='' && tempTask.length<35){
    try{
      const response = await axios.post('https://mern-todo-app-livid.vercel.app/',{itemName:tempTask});
         console.log('todo added '+ response.data);
         setTasks(response.data);
    }
    catch(err){
      console.log(err);
    }
    
    setTempTask('');
    console.log(tempTask);

  }
  else{
    toast.error('please enter valid data',{position:'top-center'})
  }
  }

  return (
    <div className='top-container'>
      <input  type="text" placeholder='Add your new Todo' value={tempTask} onChange={handleChange}/>
      <button onClick={handleAddTask}>
      <IoMdAdd/>
      </button>
    
    </div>
  )
}

export default Add;
