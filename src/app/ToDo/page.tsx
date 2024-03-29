"use client";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import React, {useState, useEffect } from "react";
import { Calendar } from "../components/ui/calander";
import Link from "next/link";

function TodoApp () {
const [todo, setTodo]= useState("");
const [todos, setTodos]= useState<string[]>([]);
const [update, setupdate]= useState(1);
console.log("~file:page.tsx:9~TodoApp~update:",update);

useEffect(()=>{
  console.log("Use Effect");
  console.log(update);
},[update]);

const addTodo=()=>{
  setTodos([...todos, todo]);
  setTodo("");
};

const deleteTodo=(index:number)=>{
  const updateTodo=[...todos];
  updateTodo.splice(index,1);
  setTodos(updateTodo);
};

const Calendar: any =()=>{
  return("")
};

// CSS start here
return (

  <div className="flex flex-col min-h-screen items-center p-24">
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input value={todo} onChange={(e)=>{
        setTodo(e.target.value);
      }}
      placeholder="What ToDo ?" />
      <Button onClick= {addTodo}>Add ToDo</Button>
    </div>
    <div className="mt-10">
      {todos.map((item, index)=>(
        <div key={index}
        className="flex gap-5 py-2 justify-center items-center">
          <p>{item}</p>
          <Button variant={"destructive"} onClick={()=>
          deleteTodo(index)}> Delete ToDo</Button>
          <Calendar className="Text-3xl font-extrabold">Set date 1st</Calendar>
    </div>
     ))}
  </div>
  </div>
);
}
export default TodoApp;