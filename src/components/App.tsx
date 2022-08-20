// TODO: fix config issues
/// <reference types="@emotion/react/types/css-prop" />
import React from 'react';
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import styles from './App.scss';

import logo from '../media/logo.svg';

const StyledSection = styled.section`
  flex: 0 0 60%;
  display: block;
`;

const StyledList = styled.section`
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.6;
`;

const App: FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <StyledSection>
          <h2 className={styles.header}>React Typescript Starter</h2>
          <StyledList>
            <li>Webpack 5.*</li>
            <li>React 18.*</li>
            <li>Typescript 4.*</li>
            <li>Sass 1.* (with dart-sass)</li>
            <li>PostCSS 8.* (with CSS Modules)</li>
            <li>ESLint and Prettier</li>
            <li>Jest 28.*, React Testing Library 13.* and Playwright 1.*</li>
          </StyledList>
        </StyledSection>
      </article>
    </main>
  );
};

export default App;
