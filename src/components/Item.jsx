import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineLabelImportant} from 'react-icons/md'
import {MdOutlineDoneAll} from 'react-icons/md'


function Item({item, handleDelete, handleCheck}) {
const checkedStyle = item.checked? "text-green-600" : "text-gray-400";
  return (
    <div className='border rounded-md flex  items-center border-gray-500 p-3 m-2'>
        <div className='text-cyan-500 text-2xl pr-5'><MdOutlineLabelImportant/></div>
        <div className='flex-1'><h1 >{item.name}</h1></div>
        <div className='text-red-500 text-2xl hover:text-red-600 ' onClick={()=>handleDelete(item.id)}><AiFillDelete/></div>
        <div className={`${checkedStyle} text-2xl hover:text-green-600   pl-3`} onClick = {() => handleCheck(item.id)}><MdOutlineDoneAll/></div>
    </div>
  )
}

export default Item