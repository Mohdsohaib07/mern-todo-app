import Add from "./components/Add";
import Items from './components/Items';
import Bottom from "./components/Bottom";
import './App.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

import { useEffect, useState } from "react";

function App() {
const [tasks,setTasks]= useState([]);

useEffect(()=>{
    async function getData(){
        try{
            const response = await axios.get('https://mern-todo-app-livid.vercel.app');
            console.log(response.data);
            setTasks(response.data);
            
        }
        catch(err){
            console.log(err);
            
        }
    
    }
    getData();
},[]);
  return (
    <>
     <div className="master-container">
      <h1>ToDo App</h1>
      <Add setTasks={setTasks}/>
      <Items tasks={tasks} setTasks={setTasks}/>
      <Bottom tasks={tasks} setTasks={setTasks} />
     <ToastContainer position="bottom-center" autoClose={2000} theme="dark" />
     </div>
    </>
  )
}

export default App;
