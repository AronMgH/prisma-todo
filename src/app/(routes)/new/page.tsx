import Link from 'next/link'
import { redirect } from 'next/navigation'
import { prisma } from '@/db'

import AppHeader from '../../../components/header'

async function createNote(data:FormData) {
  'use server'
  const title = data.get("title")
  if ( typeof title !== "string" || title.length === 0 ){
    return 
    throw new Error("Invalid title")
  }
  await prisma.todo.create({data: {title: title, complete:false}})
  redirect('/')
}

async function Page() {
  return <>
    <AppHeader title="New Task" showNewButton={false}></AppHeader>
    <form action={createNote} className='flex flex-col mx-auto w-3/5 gap-3'>
      <input 
        type="text" 
        name="title" 
        id="" 
        placeholder='Enter task name here.'
        className="border border-slate-400 p-2 rounded hover:bg-slate-200 focus:bg-slate-200 outline-none" />
      <div className="flex justify-end gap-2">
        <Link href="/" className="border border-slate-400 p-2 px-4 rounded hover:opacity-25 focus:opacity-25 outline-none">Cancel</Link>
        <button type='submit' className="border border-slate-400 p-2 px-4 rounded hover:opacity-25 focus:opacity-25 outline-none">Create</button>
      </div>
    </form>
  </>
}

export default Page