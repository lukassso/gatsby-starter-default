import React from 'react';
import { Link } from 'gatsby';
import H1 from '../components/H1/H1';
import Button from '../components/Button/Button';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from '../utils/colors';
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
    background: ${colors.dark};
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