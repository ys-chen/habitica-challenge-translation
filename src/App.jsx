import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ChallengeDetail from './routes/ChallengeDetail';
import Header from './components/Header'
import meta from './dataset/meta.json';
import './locale/i18n';
import './App.scss';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <div className="container-fluid">
          <Switch>
            {meta.map(({ officialId }) => (
              <Route path={`/detail/${officialId}`}>
                <ChallengeDetail challengeId={officialId} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
