import React from 'react'
import { RiTodoLine } from 'react-icons/ri'
import { useState } from 'react'
import uuid from 'react-uuid';

export const TodoInput = ({handleAdd}) => {

    let [title, setTitle] = useState("");
    const handleInput = (e) =>{
        setTitle(e.target.value);
    }
    return (
        <div className='grid grid-cols-4  border p-3'>
            <div className='col-span-4 md:col-span-3 flex'>
                <span className='ring-1 h-full bg-sky-500 w-20 flex justify-center items-center'><RiTodoLine className='text-white' /></span>
            <div className='w-full'><input  value={title} onChange={handleInput} type="text" name="todo" placeholder='job to do ' className='  h-full w-full px-3 py-2 bg-white border border-amber-700  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'/></div>
            </div>
            <div className='col-span-4 md:col-span-1 md:pt-0 pt-2'><button className='bg-pink-500 hover:bg-pink-700 hover:ring-pink-500 hover:ring-1 hover:text-cyan-200  text-white h-full w-full p-2 md:ml-1' onClick={()=>handleAdd(uuid(),title)}>Add to list</button></div>
        </div>
    )
}
