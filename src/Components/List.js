import React from 'react';
import { MdDelete } from 'react-icons/md';

const List = (props) => {
  return (
    <div className="w-full">
      <li className="border-8 list-none border-gray-600 flex items-center mt-5 mx-60 rounded-xl">
        <span className="flex-grow">{props.items}</span>
        <span ><MdDelete size={30} onClick={(e)=>{
           props.deleteList(props.index)
        }
        
        }/></span>
      </li>
    </div>
  );
}

export default List;
