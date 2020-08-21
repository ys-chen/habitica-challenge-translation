import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faAngleDown, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons'
import ChallengeDetail from './routes/ChallengeDetail';
import Header from './components/Header'
import meta from './dataset/meta.json';
import './locale/i18n';
import './App.scss';

library.add(faAngleUp, faAngleDown, faLock, faGlobe)

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <div className="container-fluid">
          <Switch>
            {meta.map(({ officialId }) => (
              <Route key={officialId} path={`/detail/${officialId}`}>
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
