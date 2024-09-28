'use client'
import React from 'react'
import Tasks from '../allTasks/page'
import { useGlobalContext } from '@/app/themes/globarContextProvider'


export default function page() {
  const {incompleteTasks}=useGlobalContext()
  return ( <Tasks title='Incomplete Tasks' tasks={incompleteTasks}/>
  )
}
