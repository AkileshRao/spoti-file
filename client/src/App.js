import Login from './components/Login'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
