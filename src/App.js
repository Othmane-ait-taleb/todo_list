import { useState } from "react";
import List from "./components/List";
import { TodoInput } from "./components/TodoInput";
import uuid from 'react-uuid';


function App() {
  
  const [items, setItems] = useState([]);

  const handleAdd = (id, name) => {
    setItems((items)=>[...items, {id, name,checked: false}]);
  }

  const handleDelete = (id) => {
    setItems((items)=> items.filter(item => item.id !== id));
  }

  const handleCheck = (id) => {
    setItems((items) => items.map(item => {
      if (item.id === id && item.checked == false)
        return ({...item,checked: true});
      else if (item.id === id && item.checked == true)
        return ({...item,checked: false});
      return (item)
    }))
  }
  const handelClear = () => {
    setItems([]);
  }

  return (
    <div className="rounded border border-black p-6 m-10">
      <TodoInput handleAdd={handleAdd} />
      <List items={items} handleDelete={handleDelete} handleCheck = {handleCheck} handelClear = {handelClear} />
    </div>
  );
}

export default App;
