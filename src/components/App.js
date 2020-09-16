import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Header />  // reusable, easy to debug and rerender happens when changes are made in that component
            )}
          />
        </Switch>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Main /> //  easy to debug and rerender happens when changes are made in that component
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
