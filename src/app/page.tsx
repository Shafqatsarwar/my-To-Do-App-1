'use client';
import React, { useState, useEffect } from "react";
import Todoitem from "./components/todoitems";
import { Calendar } from "./components/ui/calander";

type Todo=string;
export default function Home() {
    const [items, setItems]= useState<Todo[]>([]);
    

const getAllTodo=(): Todo[]=>{
    const tempItems:string | null=localStorage.getItem("todos");
    return tempItems? JSON.parse(tempItems):[];
};
const getAll=()=>{
    const tempItems=getAllTodo();
    setItems(tempItems);
};
const addTodo = () => {
    const todoTitle = prompt("Todo Title: ");
        if (todoTitle) {  
    const tempItems = getAllTodo();  
    tempItems.push(todoTitle);
    localStorage.setItem("todos", JSON.stringify(tempItems));  
    getAll();
}
};

const editTodo= (index:number)=>{
    const tempItems=getAllTodo ();
    const todoTitle= prompt("Todo Title:", tempItems[index]);
    if(todoTitle){
        tempItems[index]= todoTitle;
        localStorage.setItem("todos", JSON.stringify(tempItems));
        getAll();
    }
};
const deleteTodo=(index:number)=>{
    const tempItems= getAllTodo();
    if (confirm("Are you Sure ?"))
    {
    tempItems.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(tempItems));
    getAll();
}
};
const Calendar: any =()=>{
    return("")
  };

// css start here
useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="m-4">
        <h1 className=" text-violet-500 text-3xl text-center
         font-bold m-4 p-5 bg-gradient-radial">
            My 1st TO-Do-App for PIAIC UMT Batch 47 Q-2 </h1>
            <br/>
            <br/>
  <h1 className="font-extrabold text-violet-500">

    The Power of CSS Flexbox
  </h1>
            <div className="flex-col justify-center">
        <button className="flex-grow-0 w-fit p-2 px-4 mb-4 bg-gray-500 text-white
        rounded-lg m-4" onClick={()=>addTodo()}>Add More</button>

        <button className="flex-grow-0 w-fit p-2 px-4 mb-4 bg-blue-500 text-white
        rounded-lg m-4" onClick={()=>getAll()}>Check All</button>

        <ul>
            {items.length > 0 ?
            (items.map((ToDo: Todo, index: number)=>(
                <Todoitem key={index} todo={ToDo} index={index}
                onEdit={editTodo}
                onDelete={deleteTodo}
                />
            ))

            ):(
                <h2 className="w-full p-10 px-5 bg-red-500 text-3xl text-bold">
                     No ToDo's any more</h2>
            )}
        </ul>
    </div>
    </div>
  );
            }