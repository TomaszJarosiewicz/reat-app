import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
import MainLayout from '../MainLayout/MainLayout';
import List from '../List/ListContainer';
import SearchResult from '../SearchResults/SearchResultContainer';
import styles from './App.scss';

const App = () => (
  <div>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/list/:id' component={List} />
          <Route exact path='/search/:id' component={SearchResult} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;