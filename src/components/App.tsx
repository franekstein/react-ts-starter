import React from 'react';
import { FunctionComponent } from 'react';
import styles from './App.scss';

import logo from '../media/logo.svg';

const App: FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <section className={styles.description}>
          <h2 className={styles.header}>React Typescript Starter</h2>
          <ol className={styles.list}>
            <li>Webpack 5.*</li>
            <li>React 17.*</li>
            <li>Typescript 4.*</li>
            <li>Sass (with dart-sass)</li>
            <li>PostCSS 8.* (with CSS Modules)</li>
            <li>ESLint and Prettier</li>
          </ol>
        </section>
      </article>
    </main>
  );
};

export default App;
