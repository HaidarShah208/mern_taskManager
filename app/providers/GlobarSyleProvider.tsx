"use client";

import React from "react";
import Styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function GlobarStyleProvider({ children }: Props) {
  return <Container>{children}</Container>;
}
const Container = Styled.div`
padding:2.5rem;
display:flex;
gap:2.5rem;
height:100%
transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
`;

export default GlobarStyleProvider;
