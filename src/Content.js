import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems]=useState([
    {
   id:1,
   check : false,
   a: "HTML"


   
   },
   {
   id:2,
   check : false,
   a: "CSS"
   },
   {
   id:3,
   check : false,
   a: "JAVASCRIPT"
   }
   ]);

   const handleChange= (id)=>{
    
    const listItems= items.map((i)=>i.id===id? {...i,check : !i.check}:i)
   setItems(listItems)
   }
   const handleDelete=(id)=>{
    const listItems= items.filter((i)=>i.id !==id)
    setItems(listItems)
   }
  return (
    <main>
     <ul>
     {items.map((p)=> (
      <li className='item' key={p.id}>
      <input type='checkbox' checked={p.check} onChange={()=>handleChange(p.id)}/>
        <label style={(p.check)?{textDecoration:'line-through'}:null}onDoubleClick={()=>handleChange(p.id) }>{p.a}</label>
        <FaTrashAlt onClick={()=>handleDelete(p.id)}role='button' tabIndex={0}/>
          </li>
      ))}      
      </ul>
        </main>

  )
}
export default Content