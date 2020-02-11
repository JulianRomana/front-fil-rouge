import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import SplashScreen from './pages/SplashScreen'
import Header from './modules/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <SplashScreen/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
