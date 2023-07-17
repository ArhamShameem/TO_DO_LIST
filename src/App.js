
import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import Text from "./Components/text";
import List from "./Components/List";
function App() {
 const [listTodo,setListTodo]=useState([]);
 const addList=(task)=>{
setListTodo([...listTodo,task]);
 }
 const deleteList=(key)=>{
const newListTodo=[...listTodo]
newListTodo.splice(key,1);
setListTodo(newListTodo);
 }
  return (
    <div className="w-screen min-h-screen bg-gray-400 text-lightText px-4">
      <div>
        <div className=" flex flex-col">
          <TodoInput addList={addList}/>
          <Text/>
          {listTodo.map((task,i)=>{
return(
<List key={i} index={i} items={task} deleteList={deleteList}/>
)

          })}
        </div>
      </div>
    </div>
  );
}

export default App;
