import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ChallengeDetail from './routes/ChallengeDetail';
import Header from './components/Header'
import './locale/i18n';
import './App.scss';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/detail/:challengeId">
              <ChallengeDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
