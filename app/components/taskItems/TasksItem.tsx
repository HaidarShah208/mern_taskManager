"use client";
import { useGlobalContext } from "@/app/themes/globarContextProvider";
import formatDate from "@/app/utils/formatedDate";
import { edit, trash } from "@/app/utils/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
  id:string
}
export default function TasksItem({
  title,
  description,
  date,
  isCompleted,
  isImportant,
  id
}: Props) {
    const {theme,deleteTask,updateTask,editTask}=useGlobalContext()
    const handleEdit = () => {
      editTask({
        id,
        title,
        description,
        date,
        isCompleted,
        isImportant,
      });
    };
  return (
    <TaskItemStyled theme={{theme}}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button className="completed" onClick={()=>{
            const task={
              id,
              isCompleted: !isCompleted
            }
            updateTask(task);
          }}>Completed</button>
        ) : (
          <button className="incomplete" onClick={()=>{
            const task={
              id,
              isCompleted: !isCompleted
            }
            updateTask(task);
          }}>Incomplete</button>
        )}
      <button className="edit" onClick={handleEdit}>{edit}</button>
      <button className="delete" onClick={()=>{
         if (id) {
          deleteTask(id);
        } else {
          console.log("Task ID is invalid or undefined.");
        }
      }}>{trash}</button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.theme.borderColor2};
  box-shadow: ${(props) => props.theme.theme.shadow7};
  border: 2px solid ${(props) => props.theme.theme.borderColor2};

  height: 14rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
        background: ${(props) => props.theme.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.theme.colorGreenDark} !important;
    }
  }
`;
