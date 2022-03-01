import React from "react";
import styled from "styled-components";

import { Container } from './Container'

const Nav = styled.nav`
  background-color: var(--gray1000);
  padding: 14px;
`;

const Circle = styled.div`
  background-color: #c4c4c4;
  height: 36px;
  width: 36px;
  margin-right: 0.5rem;
  border-radius: 9999px;
`;

export const Layout = ({ children }) => {
  const user = {
    name: "Julie Howard",
    role: "Admin",
  };

  return (
    <>
      <Nav>
        <Container>
          <Circle />
          <div>
            <p className="helv bold reg light">{user.name}</p>
            <p className="helv sm light">{user.role}</p>
          </div>
        </Container>
      </Nav>
      <Container>{children}</Container>
    </>
  );
};
