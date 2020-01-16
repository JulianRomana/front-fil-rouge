import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './pages/Home'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home content="test" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
