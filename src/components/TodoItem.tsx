'use client'

import { prisma } from "@/db"

type TodoItemProps = {
    id: string,
    title: string,
    complete:boolean,
    toggleTodo: (id:string, complete:boolean) => void,
    deleteTodo: (id:string) => void,
}

 
export function TodoItem({id, title, complete, toggleTodo, deleteTodo}:TodoItemProps) {
    return <li 
        className="capitalize pb-2 mb-2 border-b flex justify-start items-center"
        >
        <input id="{id}" type="checkbox" className="checkbox mr-2 p-2 cursor-pointer peer" 
        defaultChecked={complete} onChange={(e) => toggleTodo(id, !complete)}/>
        <label htmlFor="{id}" className="cursor-pointer peer-checked:line-through peer-checked:text-slate-600 flex-grow">{ title }</label>
        <button className="bg-pink-900 text-white text-sm p-1" onClick={(e) => deleteTodo(id)}>Delete</button>
    </li>
} 

