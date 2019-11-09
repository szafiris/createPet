import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dog from './Dog'
import Decision from './Decision';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Decision} />
      <Route path='/dog' component={Dog} />
    </Switch>
  </Router>
)

export default Main