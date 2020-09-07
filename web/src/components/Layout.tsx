import styled, { createGlobalStyle, withTheme } from 'styled-components';

import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { Header } from './Header';
import { Footer } from './Footer';

const StyledLayout = styled.div`
  font-family: ${(props) => props.theme.font.normal};
  font-size: calc(0.6em + 1vw);
  min-height: 100vh;
  max-width: 800px;
  margin: auto;
  padding: 0 50px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  @media (max-width: 400px) {
    padding: 0 30px;
  }
  @media (max-width: 320px) {
    padding: 0 10px;
  }

  @media only screen and (min-width: 800px) {
    font-size: calc(0.3em + 1vw);
  }
`;

const StyledMain = styled.main`
  grid-area: main;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.main};
    transition: background 0.2s ease-out;
  }
  a,
  a:visited,
  a:active {
    color: inherit;
  }
`;

export const Layout = withTheme(
  ({ children }: { children: JSX.Element }): JSX.Element => {
    const theme = React.useContext(ThemeManagerContext);

    return (
      <StyledLayout>
        <Reset />
        <GlobalStyle />
        <Header toggleTheme={() => theme.toggleDark()} />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledLayout>
    );
  },
);
