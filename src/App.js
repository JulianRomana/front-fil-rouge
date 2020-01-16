import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

//import Home from './pages/Home'
import Start from './pages/Start';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Start/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
