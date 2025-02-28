import React, { useState } from 'react'
import axios from 'axios';
import { MdClose } from "react-icons/md";
import { createPortal } from 'react-dom';
const EditModal = ({setTasks,item,modal,setModal}) => {
 const [edit,setEdit]= useState(item.itemName);


   async function handleSubmit(){
   console.log('id is : '+ item._id);
      const response = await axios.put(`https://mern-todo-app-livid.vercel.app/${item._id}`,{itemName:edit});
      console.log(response.data);
      
      setTasks(response.data);
      setModal(!modal);
   }

   function handleChange(e){
          console.log(e.target.value);
          setEdit(e.target.value);

          
   }
   function handleClose(){
    setModal(!modal);
   }

  return createPortal(
      <div>
      { modal &&
      <>
        <div className='modal-container'>
        <input type="text" value={edit} onChange={handleChange}/>
        <button onClick={handleSubmit}>Edit</button>
        <button onClick={handleClose} style={{backgroundColor:" rgb(253, 47, 19)",fontSize:'28px'}}><MdClose/></button>
      </div>
      </>
      }
      </div>,document.getElementById("modal"))

}

export default EditModal;
