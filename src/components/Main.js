import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dog from './Dog'
import Decision from './Decision';

const Main = () => (
  <Router>
    <Switch>
      <Route path='/' component={Decision} />
      <Route path='/dog' component={Dog} />
    </Switch>
  </Router>
)

export default Main