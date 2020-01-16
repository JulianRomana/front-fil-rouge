import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

//import Home from './pages/Home'
import SplashScreen from './pages/SplashScreen'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <SplashScreen/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
