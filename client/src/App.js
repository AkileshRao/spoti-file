import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { SpotifyProvider } from './spotify';

function App() {
  return (
    <div>

      <Router>
        <SpotifyProvider>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/profile' component={Profile} />
            <Redirect from="*" to="/" />
          </Switch>

        </SpotifyProvider>
      </Router>
    </div>
  );
}

export default App;
