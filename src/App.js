import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history, initialState } from './store';

import './App.scss';

import Counter from './Counter';
import Home from './Home';
import About from './About';
import { Provider } from 'react-redux';

const store = configureStore(initialState);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollMemory />
          <header className="app-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/counter/">Counter</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/counter/" component={Counter} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
