"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./Themes";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  const [selectedTheme, setSeletedTheme] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model,setModel]=useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const theme = themes[selectedTheme];

 const openModel=()=>{
   setModel(true);
 }

 const closeModel=()=>{
   setModel(false);
 }

 const collapseMenu = () => {
  setCollapsed(!collapsed);
};
  const allTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/tasks");
  const sortTasks=res.data.sort((a: any,b: any)=>{
    return (
       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
     
    )
  })

      setTasks(sortTasks);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tasks", err);
      toast.error("Error occure in fetching tasks");
    }
  };


  const deleteTask = async (id:string) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const updateTask = async (task: any) => {
    try {
      const res = await axios.put(`/api/tasks`, task);

      toast.success("Task updated");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const completedTasks= tasks.filter(task => task.isCompleted === true);
  const importantTasks= tasks.filter(task => task.isImportant === true);
  const incompleteTasks= tasks.filter(task => task.isCompleted === false);
  React.useEffect(() => {
   if(user) allTasks();
  }, [user]);

  return (
    <GlobalContext.Provider value={{ theme,tasks,deleteTask,loading ,completedTasks,importantTasks,incompleteTasks,updateTask,openModel,closeModel,model,allTasks,collapseMenu,collapsed}}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalUpdateContext = () => useContext(GlobalUpdateContext);
