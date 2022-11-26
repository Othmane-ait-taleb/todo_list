import React from 'react'
import Item from './Item'
import uuid from 'react-uuid';


function List({items, handleDelete, handleCheck, handelClear, handleClickEnter}) {

  return (
    <div className='p-4  border flex-col '>
{items.map((item)=>{
   return  <Item key={item.id} item = {item} handleDelete = {handleDelete} handleCheck = {handleCheck}/>
})}
        <div className=' text-white border  p-2 mt-7 bg-red-600 text-center hover:ring-1 hover:ring-red-600 hover:bg-red-700 shadow-black-300 shadow-md' onClick={handelClear} >clear</div>
    </div>
  )
}

export default List