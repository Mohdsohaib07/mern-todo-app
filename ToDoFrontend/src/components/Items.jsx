import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import EditModal from './EditModal';
import axios from 'axios';
const Items = ({tasks,setTasks}) => {
const [isChecked, setIsChecked] = useState(false);
const [modal,setModal]=useState(false);
const [currentItem,setCurrentItem]= useState(null);//to check which item is selected in  modal in map function 
const [itemId,setItemId]=useState(null); // to appply class to only selected item using its id



async function handleDelete(i){
  console.log(i);
  console.log(tasks[i]._id);
  
 const response = await axios.delete(`http://localhost:8080/${tasks[i]._id}`);
  let newTaskList = tasks.filter((_,index)=>{
    return index != i;
  });
console.log(newTaskList);
setTasks(newTaskList);
}

function handleEdit(item){
    setCurrentItem(item);
    console.log('edit clicked  ',item);
    setModal(!modal);
  }
 function handleCheck(item_id){
   console.log(item_id);
   setItemId(item_id);
   setIsChecked(!isChecked);
   if (!isChecked) {
    console.log('Checkbox is checked');
   

    // Perform action when checked
  } else {
    console.log('Checkbox is unchecked');
    // Perform action when unchecked
  }

 }
  return (
    <div className='items-container'>
      {(tasks.length<=0)? <p className='no-tasks'>NO TASKS </p>:
      tasks.map((item,i)=>{
        return(
     <li key={i}>
      <input type="checkbox" onClick={()=>handleCheck(item._id)}/>
      {/* used one itemid variable to keep track of selected items id and then compared it with the item's id in map() */}
      <p className={(isChecked && item._id==itemId)?'check-active':''}>{item.itemName}</p>
      
      <div className='list-buttons'>
        <button className='edit-button' onClick={()=>handleEdit(item)}>
        <FiEdit/>
        </button>
        <button onClick={()=>handleDelete(i)} >
        <MdDelete/>
        </button>
      </div>
      {
        // render only when the item in map() matches the currentItem
        currentItem==item &&
      <EditModal item={item} setTasks={setTasks} modal={modal} setModal={setModal}/>
      }
      
      </li>)
      })
    }
    </div>
  )
}

export default Items;
