'use client'
import Tasks from "./(pages)/allTasks/page";
import { useGlobalContext } from "./themes/globarContextProvider";

export default function Home() {
  const {tasks} = useGlobalContext()
  return  <Tasks title="All Tasks" tasks={tasks}/>
}
