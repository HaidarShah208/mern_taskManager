'use client'
import { useGlobalContext } from '@/app/themes/globarContextProvider'
import React from 'react'
import Tasks from '../allTasks/page'

export default function page() {
  const {importantTasks}=useGlobalContext()
  return (
    <>
      <Tasks title='Important Tasks' tasks={importantTasks}/>
    </>
  )
}
