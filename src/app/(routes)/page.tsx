import { prisma } from '@/db'
// import { redirect } from 'next/navigation'
import AppHeader  from '../../components/header'
import { TodoItem } from '@/components/TodoItem'

async function getTodos() {
  "use server"
  return  await prisma.todo.findMany()
}

async function toggleTodo(id:string, complete:boolean){
  "use server"
  await prisma.todo.update({
    where:{id:id}, 
    data: {complete:complete}
  })
}

async function deleteTodo(id:string) {
  "use server"
  await prisma.todo.delete({where:{id:id}})
  // redirect('/')
}

async function Home() {
  const todos = await getTodos()
  return <>
        <AppHeader title="HomePage" showNewButton={true}></AppHeader>
      <div  className="container w-4/5 mx-auto">
        <ul>
        { todos.map( todo => 
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
        )}
        </ul>
      </div>
    </>
}


export default Home