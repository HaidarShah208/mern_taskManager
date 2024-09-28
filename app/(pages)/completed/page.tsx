'use client'
import { useGlobalContext } from '@/app/themes/globarContextProvider'
import React from 'react'
import Tasks from '../allTasks/page'

export default function page() {
  const {completedTasks}=useGlobalContext()
  return (
    <>
     <Tasks title='completed Tasks' tasks={completedTasks}/> 
    </>
  )
}
