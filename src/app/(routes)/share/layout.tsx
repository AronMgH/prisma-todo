import AppHeader from '@/components/header';
import React from 'react';

type ShareLayoutType = {
    children: React.ReactNode
}



export default function ShareLayout({children}:ShareLayoutType){
    return (
        <>
        <AppHeader title="Shareholders Meeting" showNewButton={false}></AppHeader>
        {children}
        </>
    )
}