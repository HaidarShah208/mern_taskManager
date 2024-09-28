'use client'

import { useGlobalContext } from '@/app/themes/globarContextProvider'
import React from 'react'
import styled from 'styled-components'

interface Props{
    content:React.ReactNode
}

export default function Model({content}:Props) {
    const {theme,closeModel}=useGlobalContext()
  return (
    <ModalStyled theme={{theme}}>
      <div className="modal-overlay" onClick={closeModel}></div>
      <div className="modal-container">
      <div className="modal-content">{content}</div>
    </div>
    </ModalStyled>
  )
}


const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;


  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom:20;
    width: 100%;
   height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    filter: blur(4px);
  }

  
.modal-container {
    position: relative;
    width: 100%;
    max-width: 630px;
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    z-index: 101;
    max-height: calc(90vh - 2rem);
  }

  .modal-content {
    margin: 0 1rem;
    padding: 2rem;
    position: relative;
    max-width: 630px;
    width: 100%;
    z-index: 100;

    border-radius: 1rem;
    background-color: ${(props) => props.theme.theme.colorBg2};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    border-radius: ${(props) => props.theme.theme.borderRadiusMd2};

    @media screen and (max-width: 450px) {
      font-size: 90%;
    }
  }
`;
