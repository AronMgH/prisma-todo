import { type } from 'os'
import React from 'react'

type NewLayoutType = {
    children: React.ReactNode
}

export default function NewLayout({children}: NewLayoutType) {
 return(
    <>
        <div className='bg-slate-800 text-white h-48 w-full'>
            { children }
        </div>
    </>
 )
}