import Link from "next/link";

type HeaderType = {
    title: String,
    showNewButton: Boolean
}

export default function AppHeader({title, showNewButton, }: HeaderType) {
    return (
        <header className="flex justify-between  py-4 px-12 border-b shadow">
            <Link href="/" className="text-2xl">Todo</Link>
            <div className='text-2xl'> Todo: {title}</div>
            <div>
            {   showNewButton 
                ? <Link href="/new" className='border border-slate-400 p-1 px-4 rounded hover:bg-slate-200 focus:bg-slate-200 outline-none mx-3'>New</Link>
                : <div></div> 
            }
            <Link href="/share" className='border border-slate-400 p-1 px-4 rounded hover:bg-slate-200 focus:bg-slate-200 outline-none mx-3'>Share</Link>
            </div>

        </header>
    )
}