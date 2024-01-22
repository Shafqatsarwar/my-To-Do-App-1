import React from "react"

export default function Todoitem (
    { onEdit, onDelete, todo, index, ...props }:
    {
            onEdit:(index: number)=> void,
            onDelete:(index:number)=> void,
            todo: string,
            index:number,
            props?:any
        }
){
    return(
        <li className="flex items-end bg-slate-300
        mb-5 p-2 rounded-lg pl-5" {...props}>
            <span className="w-full">{todo}</span>
            <button className="w-fit p-2 px-5 bg-slate-500
            text-white rounded m-4"
            onClick={()=> onEdit(index)}>Edit</button>
             <button className="w-fit p-2 px-5 bg-transparent
            text-black-500 font-bold rounded m-4"
            onClick={()=> onDelete(index)}>Delete</button>
        </li>
    )
}