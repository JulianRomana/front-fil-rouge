import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SplashScreen from "./pages/SplashScreen"
import Signup from "./pages/Signup"
import Header from "./modules/Header"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
