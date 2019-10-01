import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle` 
  body {
    padding: 0;
    font-family: 'Montserrat';
    color: white;
 } 
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.dark};
  position: relative;
  `;

const Layout = ({children}) => (
  <ThemeProvider theme = {theme}>
    <>
      <GlobalStyle/>
      <StyledWrapper>
      {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
