"use client";
import CreateContent from "@/app/components/model/createContent";
import Model from "@/app/components/model/Model";
import TasksItem from "@/app/components/taskItems/TasksItem";
import { useGlobalContext } from "@/app/themes/globarContextProvider";
import { plus } from "@/app/utils/icons";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  tasks: any[];
}
export default function Tasks({ title, tasks }: Props) {
  const { theme, loading,openModel,model } = useGlobalContext();
  const hasTasks = Array.isArray(tasks) && tasks.length > 0;

  return (
    <StyledTaks theme={{ theme }}>
{model && <Model content={<CreateContent/>}/>}    
      <h1>{title}</h1>
      <div className="tasks grid">
        {!loading ? (
          hasTasks ? (
            tasks.map((task) => (
              <TasksItem
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                isCompleted={task.isCompleted}
                isImportant={task.isImportant}
              />
            ))
          ) : (
            <p>No tasks available</p>
          )
        ) : (
          <div className="tasks-loader w-full h-full flex justify-center items-center ">
            <span className="loader"></span>
          </div>
        )}
        <button className="create-task" onClick={openModel}>{plus}</button>
      </div>

    
    </StyledTaks>
  );
}

const StyledTaks = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.theme.colorBg2};
  border-radius: 1rem;
  height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  .tasks {
    margin: 2rem 0;
  }

  > h1 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 800;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 0.2rem;
      background-color: ${(props) => props.theme.theme.colorPrimaryGreen};
      border-radius: 0.5rem;
    }
  }
  .create-task {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 14rem;
    color: ${(props) => props.theme.colorGrey2};
    font-weight: 600;
    cursor: pointer;
    border-radius: 1rem;
    border: 3px dashed ${(props) => props.theme.colorGrey5};
    transition: all 0.3s ease;

    i {
      font-size: 1.5rem;
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.colorGrey5};
      color: ${(props) => props.theme.colorGrey0};
    }
  }
`;
