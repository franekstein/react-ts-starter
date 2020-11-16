import React from 'react';
import { FunctionComponent } from 'react';
import '../styles/index.scss';
import styles from './App.scss';

import logo from '../media/logo.png';
import back from '../media/back.jpg';

const lazyLoaded = {
  lodash: () =>
    import(
      /* webpackPrefetch: true */
      /* webpackMode: "lazy" */
      'lodash-es'
    ),
};

const App: FunctionComponent = () => {
  React.useEffect(() => {
    lazyLoaded.lodash().then(({ default: _ }) => {
      console.log('Looool', _.capitalize('test'));
    });
  }, []);

  return (
    <div className={styles.element} style={{ backgroundImage: `url(${back})` }}>
      <img src={logo} alt="Image" />
      <span>Test!</span>
      <span>{process.env.API_SECRET}</span>
    </div>
  );
};

export default App;
