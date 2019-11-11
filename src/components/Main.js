import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dog from './Dog'
import Decision from './Decision';
import Cat from "./Cat";
import Bird from "./Bird";


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
      <Route path='/cat' component={Cat} />
      <Route path='/bird' component={Bird} />
    </Switch>
  </Router>
)

export default Main